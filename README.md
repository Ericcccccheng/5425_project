# Wallpaper retrieval web software User guide

## Introduction

Welcome to read the user manual of Wallpaper web software! This manual is intended to provide you with detailed instructions for installing, configuring, and successfully running the software. Our Wallpapers Web software is a powerful tool that can help you quickly find your favourite wallpapers by keyword search or upload image search.

## Prerequisites

We utilise React as our primary tool for constructing user interfaces, complemented by Express.js for our backend and Python for certain backend functionalities. To get started with our development environment, it's essential to download Node.js and Visual Studio Code beforehand. 

React requires Node.js and its included npm (Node Package Manager) to run. Please
download the (https://nodejs.org/en) LTS version from the official website to ensure
stability. Once you have downloaded and installed, run (npm –v) on your terminal to
verify the installation and version.

The next step is to download Visual Studio Code (VSCode) from its official website at (https://code.visualstudio.com/). Install it according to your operating system after downloading. You can run it automatically after installation. Now, you can customise it or use it in your code projects. Additionally, upon loading files, you'll notice automatic prompts in the bottom-right corner suggesting the download of Python-related extensions. Please ensure that these necessary files are installed.

To download Python, visit the official Python website at (https://www.python.org/), choose the appropriate version for your operating system, and follow the installation instructions. After installation, verify Python's installation by typing python --version or python3 --version in the command prompt or terminal. Then, you can start coding in IDE like Visual Studio Code, leveraging Python's extensive library ecosystem for various projects.

Next, download the Microsoft C++ Build Tools software from the official Microsoft website (https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/), making sure to select and install the C++ related components during installation. This tool is essential for C++ development and integrates seamlessly with IDEs like Visual Studio Code.

Congratulations on your successful installation of the required software! Now that you've downloaded and installed the Node.js, Visual Studio Code, Python, and Microsoft c++ build tools, you are ready to start the next step of running the software.

## Running

This process can be broadly divided into two parts: running the frontend React application and running the backend Express server. Let's walk through each step to get your application up and running smoothly.

To begin running the frontend React application, open a terminal at the directory "group-21-project". Execute the command npm install to install the necessary dependencies, then input npm start to launch the application. Once the application loads in your web browser, you can navigate through its features and utilise the text search functionality located in the top right corner.

Then proceed to install the required Python packages using the pip command. These packages include sqlite3, numpy, tensorflow, matplotlib, annoy, PIL, and others. You can install them all at once using the following command: pip install sqlite3 numpy tensorflow matplotlib annoy pillow. Ensure you are still in the "src" directory in your terminal before executing this command. Once installed, you'll have all the necessary Python libraries to implement the algorithms and functionalities required for your project.

Now, you should be able to run the backend successfully. In the terminal at the "src" directory, enter the command node server.js to start the server. This will enable the image retrieval functionality. You can now upload local images by clicking the upload icon in the top right corner. The backend, powered by Python, will search for similar images in the database and return the results.

## Summary

This user guide simplifies the setup and operation of the Wallpaper Retrieval Web Software. It covers the installation of essential tools like Node.js, Visual Studio Code, Python, and Microsoft C++ Build Tools. Users are then guided through running both the frontend React application and backend Express server, enabling image retrieval functionality.
