import React from "react";
import NavBar from "../components/NavBar";
import "../css/MainPage.css";
import ImageCard from "../components/ImageCard";
import image1 from '../image/space/space_1.jpg';
import image2 from '../image/animal/animal_2.jpg';
import image3 from '../image/plant/plant_3.jpg';
import image4 from '../image/animal/animal_4.jpg';
import image5 from '../image/car/car_5.jpg';
import image6 from '../image/plant/plant_6.jpg';
import image7 from '../image/space/space_7.jpg';
import image8 from '../image/animal/animal_8.jpg';
import image9 from '../image/plant/plant_9.jpg';
import image10 from '../image/space/space_10.jpg';
import image11 from '../image/car/car_11.jpg';
import image12 from '../image/space/space_12.jpg';

const MainPage = () => {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

    return (
        <div className="mainpage">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                {images.map((imageUrl, index) => (
                    <ImageCard key={index} imageUrl={imageUrl} index={index} />
                ))}
            </div>
        </div >
    )
}

export default MainPage;