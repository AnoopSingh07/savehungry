import React from 'react';
import './SearchResults.css';
import './SearchBar.css';
import './SearchResults.css';

const SearchResults = (props) => {
  console.log("props ", props);
const { recipeObj,ID } = props;

  return (

    <>
      <div className='SearchedRecipes'  >
        <img src={recipeObj.image} alt="food_image" />
        <span className='label'>{recipeObj.label}</span>
        <span className="ingredients" id={ID.toString()} onClick={() => window.open(recipeObj.url)}>Ingredients</span>
        <span className="seecr" onClick={() => window.open(recipeObj.url)}>See complete recipe</span>
      </div>
    </>
  );
};

export default SearchResults;
