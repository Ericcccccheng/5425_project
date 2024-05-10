import React from "react";
import NavBar from "../components/NavBar";
import "../css/cate_plant.css";
import ImageCard from "../components/ImageCard";
import image1 from '../image/plant/plant_1.jpg';
import image2 from '../image/plant/plant_2.jpg';
import image3 from '../image/plant/plant_3.jpg';
import image4 from '../image/plant/plant_4.jpg';
import image5 from '../image/plant/plant_5.jpg';
import image6 from '../image/plant/plant_6.jpg';
import image7 from '../image/plant/plant_7.jpg';
import image8 from '../image/plant/plant_8.jpg';
import image9 from '../image/plant/plant_9.jpg';
import image10 from '../image/plant/plant_10.jpg';
import image11 from '../image/plant/plant_11.jpg';
import image12 from '../image/plant/plant_12.jpg';


const cate_plant = () => {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

    return (
        <div className="cate_plant">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content_plant">
                <div className="title_plant">
                    Plant
                </div>
                {images.map((imageUrl, index) => (
                    <ImageCard key={index} imageUrl={imageUrl} index={index} />
                ))}
            </div>

        </div >
    )
}

export default cate_plant;