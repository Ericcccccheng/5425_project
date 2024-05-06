import sqlite3
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt 
from tensorflow.keras.preprocessing import image as keras_image
from tensorflow.keras.applications.resnet import ResNet50, preprocess_input
from annoy import AnnoyIndex
from PIL import Image
import os
import io
import sys
import base64
import json

# Method to preprocess the (input) image
def preprocess_image(image):
  # Check if the input is byte data, if yes, convert it to a PIL Image
  if isinstance(image, bytes):
    image = Image.open(io.BytesIO(image))

  image = image.resize((224, 224))
  img_array = keras_image.img_to_array(image)
  img_array_expanded = np.expand_dims(img_array, axis=0)
  return preprocess_input(img_array_expanded)

# Method preprocess image blob retrieved from the database
def preprocess_image_blob(image_blob):
  # Convert the binary data to an image
  img = Image.open(io.BytesIO(image_blob))
  # Resize to the same size as the model expects
  img = img.resize((224, 224))  
  img_array = keras_image.img_to_array(img)
  img_array_expanded = np.expand_dims(img_array, axis=0)
  return preprocess_input(img_array_expanded)

# Method to extract features of image
def extract_features(preprocessed_image, model):
  features = model.predict(preprocessed_image)
  return features.flatten()

# Method to create and populate the Annoy(Approximate Nearest Neighbors Oh Yeah) Index
def build_index(preprocessed_images, model, n_trees=10):
  dimension = model.output_shape[-1]
  index = AnnoyIndex(dimension, metric='angular')

  for i, preprocessed_image in enumerate(preprocessed_images):
    features = extract_features(preprocessed_image, model)
    index.add_item(i, features)

  index.build(n_trees)
  return index

# Method to find the first "n_similar" most similar images
def find_similar_images(input_image, index, db_images, model, n_similar=12):
  features = extract_features(input_image, model)
  similar_ids = index.get_nns_by_vector(features, n_similar)

  similar_images = []
  for idx in similar_ids:
    # Get the first (and only) batch dimension
    img_array = db_images[idx][0] 
    # Reverse preprocessing the image
    img_array += 127.5                     
    img_array = np.clip(img_array, 0, 255)  
    img = Image.fromarray(np.uint8(img_array))

    # Convert the image to a byte buffer using PIL, then encode it to base64
    buffered = io.BytesIO()
    img.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
    similar_images.append(f"data:image/jpeg;base64,{img_str}")
  
  return similar_images


if __name__ == "__main__":
  input_base64 = sys.argv[1]

  if "base64," in input_base64:
    input_base64 = input_base64.split("base64,")[1]
  image_data = base64.b64decode(input_base64)
  image_stream = io.BytesIO(image_data)
  input_image = Image.open(image_stream)

  input_image = preprocess_image(input_image)  
  

  # Establish a database connection
  conn = sqlite3.connect('./images.db')
  cursor = conn.cursor()

  # Retrieve all images from the database
  cursor.execute("SELECT image FROM images")
  image_blobs = cursor.fetchall()

  # Preprocess all image blobs retrieved from the database
  # and convert them for further model input
  preprocessed_images = []
  for image_tuple in image_blobs:
    # Extract the BLOB from the tuple
    image_blob = image_tuple[0]  
    processed_image = preprocess_image_blob(image_blob)
    preprocessed_images.append(processed_image)

  # Initialize the model(a pre-trained model called ResNet50)
  base_model = ResNet50(weights='imagenet', include_top=False, pooling='avg')

  # Build annoy index
  annoy_index = build_index(preprocessed_images, base_model)

  # Find the most similar images to the input image from the database
  similar_images = find_similar_images(input_image, annoy_index, preprocessed_images, base_model)
  
  # Send images back to the webpage
  output_json = json.dumps(similar_images)
  print(output_json)

  # Close database connection
  conn.close()