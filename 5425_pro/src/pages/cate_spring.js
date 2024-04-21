import React from "react";
import NavBar from "../components/NavBar";
import "../css/cate_spring.css";
import ImageCard from "../components/ImageCard";

const cate_spring = () => {
    return (
        <div className="cate_spring">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                <div className="title">
                    Spring
                </div>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
            </div>

        </div >
    )
}

export default cate_spring;