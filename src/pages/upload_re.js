import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../css/upload_re.css";
import '../css/ImageCard.css'
import ImageCard from "../components/ImageCard";

const UploadRe  = () => {

    const [similarImages, setSimilarImages] = useState([]);

    useEffect(() => {
        const storedImages = JSON.parse(localStorage.getItem('similarImages'));
        if (storedImages) {
            setSimilarImages(storedImages);
        }
    }, []);

    return (
        <div className="upload_re">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                <div className="title">
                    Upload Wallpaper Search:
                </div>
                <div className="image-container">
                    {similarImages.map((image, index) => (
                        <img key={index} src={image} alt={`Similar Image ${index}`} />
                    ))}
                </div>
            </div>

        </div >
    )
}

export default UploadRe ;