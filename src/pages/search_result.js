import React from "react";
import NavBar from "../components/NavBar";
import ImageCard from "../components/ImageCard";
import "../css/search_result.css";

const SearchResult = () => {
    const searchResults = JSON.parse(localStorage.getItem('searchResults')) || [];

    return (
        <div className="search_result"> 
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content_re">
                <div className="title_re">
                    Search Results
                </div>
                {searchResults.length > 0 ? (
                    searchResults.map((imageUrl, index) => (
                        <ImageCard key={index} imageUrl={imageUrl} index={index} />
                    ))
                ) : (
                    <div>No results found.</div>
                )}
            </div>
        </div>
    );
};

export default SearchResult;
