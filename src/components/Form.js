import React from 'react';

const Form = (props) => {
    return (
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="Enter your city"></input>
                <input type="text" name="country" placeholder="Enter your country"></input>
                <input type="submit" value="Get Weather"></input>
            </form>
    );
};

export default Form;