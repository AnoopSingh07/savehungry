import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header, { Poster } from "./components/Header";
import AllRecipes from "./components/AllRecipes";
import AddRecipe from "./components/AddRecipe";
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Login from "./components/login";
import Register from "./components/register";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Route, Routes } from "react-router";

const app_id = 'be373b02';
const app_key = 'a8d3403b311f36d79e58cceac8ead6fd';


function App() {

  const [user, setLoginUser] = useState({});
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${searchString}&app_id=${app_id}&app_key=${app_key}`);
    console.log(response);//
    updateRecipeList(response.data.hits);
  };

  let timeout;
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    timeout = setTimeout(() => fetchRecipe(event.target.value), 800);
    updateTimeoutId(timeout);
  };

  return (
    <>
      <Router>

        <Routes>

          <Route exact path="/" element={<>
            <div>
              {console.log("user returned from database", user)}
              {
                user && user._id ? <>
                  <Header setLoginUser={setLoginUser} />
                  <div className="App">
                    <Poster className="posterbackground" />
                  </div>
                </> : <Login setLoginUser={setLoginUser} />
              }
            </div>
          </>} />


          <Route exact path="/home" element={<>
            <Header setLoginUser={setLoginUser} />
            <div className="App">
              <Poster className="posterbackground" setLoginUser={setLoginUser} />
            </div>
          </>} />

          <Route exact path="/login" element={<>
            <div>
              <Login setLoginUser={setLoginUser} />
            </div>
          </>} />

          <Route exact path="/register" element={<>
            <div>
              <Register />
            </div>
          </>} />


          <Route exact path="/add-recipe" element={<>
            <Header setLoginUser={setLoginUser} />
            <div>
              <AddRecipe setLoginUser={setLoginUser} currentUser={user} />
            </div>
          </>} />

          <Route exact path="/all-recipe" element={<>
            <Header setLoginUser={setLoginUser} />
            <div>
              <AllRecipes onTextChange={onTextChange} recipeList={recipeList} />
            </div>
          </>} />

          <Route exact path="/feedback" element={<>
            <Header setLoginUser={setLoginUser} />
            <div>
              <Feedback setLoginUser={setLoginUser} currentUser={user} />
            </div>
          </>} />

        </Routes>

        < Footer />

      </Router>
    </>
  );
}

export default App;

