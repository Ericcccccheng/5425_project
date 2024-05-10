import React from "react";
import NavBar from "../components/NavBar";
import "../css/cate_space.css";
import ImageCard from "../components/ImageCard";
import image1 from '../image/space/space_1.jpg';
import image2 from '../image/space/space_2.jpg';
import image3 from '../image/space/space_3.jpg';
import image4 from '../image/space/space_4.jpg';
import image5 from '../image/space/space_5.jpg';
import image6 from '../image/space/space_6.jpg';
import image7 from '../image/space/space_7.jpg';
import image8 from '../image/space/space_8.jpg';
import image9 from '../image/space/space_9.jpg';
import image10 from '../image/space/space_10.jpg';
import image11 from '../image/space/space_11.jpg';
import image12 from '../image/space/space_12.jpg';


const cate_space = () => {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

    return (
        <div className="cate_space">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content_space">
                <div className="title_space">
                    Space
                </div>
                {images.map((imageUrl, index) => (
                    <ImageCard key={index} imageUrl={imageUrl} index={index} />
                ))}
            </div>

        </div >
    )
}

export default cate_space;