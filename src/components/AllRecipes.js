import React from "react";
import "./AllRecipes.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const AllRecipes = (props) => {
    const { onTextChange, recipeList } = props;
    
    let id = 0;
    recipeList.length && recipeList.map((recipeObj) => (recipeObj.uId = ++id));
    return (

        <div className="allRecipes">
            <h3 id="headingh3">Explore all recipes of Foodysite</h3>
            <SearchBar onTextChange={onTextChange} />
            <div className='SearchResults' id="recAndIng">
                {
                    recipeList.length && recipeList.map((recipeObj) => (
                        <SearchResults recipeObj={recipeObj.recipe} key={recipeObj.uId} ID={recipeObj.uId} />
                    ))
                }
            </div>
        </div>
    )
};

export default AllRecipes;
