import React, { useState } from 'react';
import './AddRecipe.css';
import axios from 'axios';
import { BASE_URL } from './constants';

const AddRecipe = (props) => {

    const { currentUser, setLoginUser } = props;

    let [userRecipe, setUserRecipe] = useState("");

    const handleChange = e => {
        console.log(e);
        const { value } = e.target;
        setUserRecipe(value);
    }

    const submit = () => {
        axios.post(`${BASE_URL}/add-recipe`, { userRecipe, currentUser })
            .then(res => {
                alert(res.data.message);
                setLoginUser(res.data.user);
                console.log(currentUser);
                setUserRecipe("");
            }).catch((err) => {
                console.log("error message from submit button ", err);
            })
    };

    return (
        <>
            <div className="addRecipe">
                <div className='addrdiv2'>Add Your Recipe Here</div>
                <div className='addrdiv3'>And your recipe may be added on Foodysite</div>
                <div className="addRecipeForm">
                    <label htmlFor="yourRecipe">Enter your recipe here</label>
                    <textarea id="addRecipeArea" rows="15" cols="85" name="yourRecipe" value={userRecipe} onChange={handleChange} placeholder='Write here...'></textarea>
                    <button id="addRecipeButton" onClick={submit}>Add Recipe</button>
                </div>
            </div>
        </>
    )
}
export default AddRecipe;