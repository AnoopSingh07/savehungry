import React from 'react';
import './Header.css';
import './SearchBar.css';

const SearchBar = (props) => {
    const { onTextChange } = props;
    return (
        <>
            <div className="searchBar">
                <input type="text" className="searchBox" id="searchText" name="search" placeholder="search recipe" onChange={onTextChange}></input>
                <button id="searchButton"><i className=" searchIcon fa-solid fa-magnifying-glass" /></button>
            </div>
        </>
    )
}

export default SearchBar;