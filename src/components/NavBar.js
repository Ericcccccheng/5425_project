import React, { useState, useEffect, useRef } from "react";
import { MdSearch } from "react-icons/md";
import "../css/NavBar.css"
import { Link } from 'react-router-dom';
import { RiUpload2Fill } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import logo from '../image/logo3.png';
import Fuse from 'fuse.js';

import animal_1 from '../image/animal/animal_1.jpg'
import animal_2 from '../image/animal/animal_2.jpg'
import animal_3 from '../image/animal/animal_3.jpg'
import animal_4 from '../image/animal/animal_4.jpg'
import animal_5 from '../image/animal/animal_5.jpg'
import animal_6 from '../image/animal/animal_6.jpg'
import animal_7 from '../image/animal/animal_7.jpg'
import animal_8 from '../image/animal/animal_8.jpg'
import animal_9 from '../image/animal/animal_9.jpg'
import animal_10 from '../image/animal/animal_10.jpg'
import animal_11 from '../image/animal/animal_11.jpg'
import animal_12 from '../image/animal/animal_12.jpg'
import car_1 from '../image/car/car_1.jpg'
import car_2 from '../image/car/car_2.jpg'
import car_3 from '../image/car/car_3.jpg'
import car_4 from '../image/car/car_4.jpg'
import car_5 from '../image/car/car_5.jpg'
import car_6 from '../image/car/car_6.jpg'
import car_7 from '../image/car/car_7.jpg'
import car_8 from '../image/car/car_8.jpg'
import car_9 from '../image/car/car_9.jpg'
import car_10 from '../image/car/car_10.jpg'
import car_11 from '../image/car/car_11.jpg'
import car_12 from '../image/car/car_12.jpg'
import plant_1 from '../image/plant/plant_1.jpg'
import plant_2 from '../image/plant/plant_2.jpg'
import plant_3 from '../image/plant/plant_3.jpg'
import plant_4 from '../image/plant/plant_4.jpg'
import plant_5 from '../image/plant/plant_5.jpg'
import plant_6 from '../image/plant/plant_6.jpg'
import plant_7 from '../image/plant/plant_7.jpg'
import plant_8 from '../image/plant/plant_8.jpg'
import plant_9 from '../image/plant/plant_9.jpg'
import plant_10 from '../image/plant/plant_10.jpg'
import plant_11 from '../image/plant/plant_11.jpg'
import plant_12 from '../image/plant/plant_12.jpg'
import space_1 from '../image/space/space_1.jpg'
import space_2 from '../image/space/space_2.jpg'
import space_3 from '../image/space/space_3.jpg'
import space_4 from '../image/space/space_4.jpg'
import space_5 from '../image/space/space_5.jpg'
import space_6 from '../image/space/space_6.jpg'
import space_7 from '../image/space/space_7.jpg'
import space_8 from '../image/space/space_8.jpg'
import space_9 from '../image/space/space_9.jpg'
import space_10 from '../image/space/space_10.jpg'
import space_11 from '../image/space/space_11.jpg'
import space_12 from '../image/space/space_12.jpg'


const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const popupRef = useRef(null);
    const ImagePopupRef = useRef(null);
    const [imageData, setImageData] = useState(null);
    const [inputValue, setInputValue] = useState('');

    // dictionary to store all images
    const images_dict = {
        'animal': {
            'predator': [animal_2, animal_4, animal_7, animal_9, animal_11],
            'pet': [animal_1, animal_3, animal_5, animal_6, animal_8, animal_10, animal_12]
        },
        'car': {
            'luxury car': [car_1, car_2, car_3, car_4, car_9, car_10, car_11],
            'normal car': [car_5, car_6, car_7, car_8, car_12]
        },
        'plant': {
            'green plant': [plant_1, plant_2, plant_3, plant_7, plant_9],
            'colorful plant': [plant_4, plant_5, plant_6, plant_8, plant_10, plant_11, plant_12]
        },
        'space': {
            'planet': [space_1, space_2, space_3, space_5, space_6, space_9, space_11, space_12],
            'astronaut': [space_4, space_10],
            'satellite': [space_7, space_8]
        }
    };

    // State to store similar images
    const [similarImages, setSimilarImages] = useState([]);

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

    const finishUpload = () => {
        const imageData = localStorage.getItem('uploadedImage');
        if (imageData) {
            fetch('http://localhost:8080/run-python', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ imageData })
            })
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('similarImages', JSON.stringify(data.similarImages));
                    setSimilarImages(data.similarImages);
                    window.location.href = "/toUpload"
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
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

    const handleSearch = (input) => {
        // Prepare the list of items to search
        const list = [];
        Object.keys(images_dict).forEach(category => {
            Object.keys(images_dict[category]).forEach(tag => {
                images_dict[category][tag].forEach(image => {
                    list.push({ category, tag, image });
                });
            });
        });

        // Configure Fuse options
        const options = {
            includeScore: true,
            keys: ['tag', 'category'],
            threshold: 0.3
        };

        const fuse = new Fuse(list, options);

        const results = fuse.search(input);

        const searchResults = results.map(result => result.item.image);

        console.log("Search results:", searchResults);
        localStorage.setItem('searchResults', JSON.stringify(searchResults));
        window.location.href = "/SearchResult";
    };

    return (
        <>
            <div className="brand_logo">
                <Link to="/main" className="logo_link">
                    <img src={logo} alt="Logo" className="react_icon" />
                </Link>
            </div>
            <div className="function1">
                Category
                <div className="fun_pop1">
                    <div className="button-container">
                        <div className="column">
                            <Link to="/toAnimal">
                                <button>Animal</button>
                            </Link>

                            <Link to="/toCar">
                                <button>Car</button>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/toPlant">
                                <button>Plant</button>
                            </Link>

                            <Link to="/toSpace">
                                <button>Space</button>
                            </Link>
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

            <div></div>

            <div className="search" ref={popupRef}>
                <div className={`search_bar ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <MdSearch className="s_icon" />
                    <input
                        type="text"
                        id="searchInput"
                        className="search-input"
                        placeholder="Search"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch(inputValue)} // Pass inputValue here
                    />
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
                                            <button className="up_finish" onClick={finishUpload}>Finish</button>

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