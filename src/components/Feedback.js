import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';
import { BASE_URL } from './constants';

function Feedback(props) {

    const { currentUser, setLoginUser } = props;

    let [userFeedback, setFeedback] = useState("");

    const handleChange = e => {
        console.log(e);
        const { value } = e.target;
        setFeedback(value);
    };

    const submit = () => {
        axios.post(`${BASE_URL}/feedback`, { userFeedback, currentUser })
            .then(res => {
                alert(res.data.message);
                setLoginUser(res.data.user);
                console.log(currentUser);
                setFeedback("");
            }).catch((err) => {
                console.log("error message from submit button ", err);
            })
    };



    return (
        <div className="feedBox">
            <div className='feeddiv3'>Guys, we are open for your valuable feedback and cool Suggestions</div>
            <div className='form'>
                <label htmlFor="feedback">Enter your feedback here</label>
                <textarea id="feedArea" rows="15" cols="85" name="feedback" value={userFeedback} onChange={handleChange} placeholder='Write here...'></textarea>
                <button id="feedbackButton" onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default Feedback;
