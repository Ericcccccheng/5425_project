import React from "react";
import NavBar from "../components/NavBar";
import "../css/MainPage.css";
import ImageCard from "../components/ImageCard";

const MainPage = () => {
    return (
        <div className="mainpage">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
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

export default MainPage;