import React from "react";
import NavBar from "../components/NavBar";
import "../css/MainPage.css"

const MainPage = () => {
    return (
        <div className="mainpage">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                <div className="gallery">
                    <div className="product">
                        <div className="product-image">Image 1</div>
                        <div className="product-details">
                            <div>Detail 1</div>
                            <div>Detail 2</div>
                            <div>Detail 3</div>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div >
    )
}

export default MainPage;