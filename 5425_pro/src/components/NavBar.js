import React, { useState, useEffect, useRef } from "react";
import { PiWindowsLogoBold } from "react-icons/pi";
import { MdSearch } from "react-icons/md";
import "../css/NavBar.css"
import { Link } from "react-router-dom";
import { RiUpload2Fill } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import logo from '../image/logo3.png';

const NavBar = () => {

    const [expanded, setExpanded] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const popupRef = useRef(null);
    const ImagePopupRef = useRef(null);
    const [imageData, setImageData] = useState(null);

    const openPopup = (event) => {
        event.stopPropagation();
        setPopupOpen(true);
        setButtonClicked(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
        setButtonClicked(false);
    };

    const toggleExpand = (event) => {
        if (expanded) {
            closeSearch();
        } else {
            expendSearch(event);
        }
    };

    const expendSearch = (event) => {
        event.stopPropagation();
        setExpanded(true);
        setButtonClicked(true);
    };

    const closeSearch = () => {
        setExpanded(false);
        setButtonClicked(false);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) {
            console.error('No file selected');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const imageData = reader.result;
            localStorage.setItem('uploadedImage', imageData);
            console.log('Image uploaded and stored in localStorage.');

            setImageData(imageData);
        };
        reader.readAsDataURL(file);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            closeSearch();
        }
        if (ImagePopupRef.current && !ImagePopupRef.current.contains(event.target)) {
            closePopup();
            localStorage.removeItem('uploadedImage');
            setImageData(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="brand_logo">
                <Link to="/main" className="logo_link">
                    <img src={logo} alt="Logo" className="react_icon"/>
                </Link>
            </div>
            <div className="function1">
                Category
                <div className="fun_pop1">
                    <div className="button-container">
                        <div className="column">
                            <Link to="/toSpring">
                                <button>Spring</button>
                            </Link>
                            <button>Button 2</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="function2">
                Size
                <div className="fun_pop2">
                    <div className="button-container1">
                        <div className="column1">
                            <button>1920*1080</button>
                            <button>2560*1440</button>
                            <button>3840*2160</button>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
            {/* <div className="function3">
                Function 3
                <div className="fun_pop3">
                    <div className="button-container">
                        <div className="title"> Function 3 Title</div>
                        <div className="column">
                            <button>Button 1</button>
                            <button>Button 2</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div></div>

            <div className="search" ref={popupRef}>
                <div className={`search_bar ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <MdSearch className="s_icon" />
                    <input type="text"
                        id="searchInput"
                        className="search-input"
                        placeholder="Search" />
                </div>
            </div>


            <div className={`upload_button ${buttonClicked ? "clicked" : ""}`}>
                <button className="upload" onClick={openPopup}><RiUpload2Fill className="upl" /></button>

                {isPopupOpen && (
                    <div className="popup" ref={ImagePopupRef}>
                        <div className="upload_box">
                            <div className="up_title">Upload</div>
                            <input
                                type="file"
                                id="fileInput"
                                onChange={handleFileUpload}
                                style={{ display: 'none' }}
                            />
                            <label htmlFor="fileInput">
                                {imageData ? (
                                    <>
                                        <div className="up_image">
                                            <img src={imageData} alt="Uploaded" className="upp" />
                                        </div>

                                        <div className="up_container">
                                            <button className="up_back">Back</button>
                                            <button className="up_finish">Finish</button>
                                        </div>

                                    </>
                                ) : (
                                    <>
                                        <FaCirclePlus className="up_logo" />
                                        <div>
                                            <button className="up_back_ori">Back</button>
                                        </div>
                                    </>


                                )}
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default NavBar;