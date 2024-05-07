import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../css/upload_re.css";
import ImageCard from "../components/ImageCard";
import '../css/ImageCard.css'


const UploadRe = () => {

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
                {similarImages.map((image, index) => (
                    <ImageCard key={index} imageUrl={image} index={index} alt={`Similar Image ${index}`} />
                ))}
            </div>

        </div >
    )
}

export default UploadRe;