 import React, { Component } from 'react';
import { async } from 'q';
import Weather from './components/Weather';
import Form from './components/Form';

import './App.css';

const APIKey='d01925b8c42733310ee70323c10f6bed';

class App extends Component {


  state={
          temperature:null,
          city:null,
          country:null,
          humidity:null,
          description:null,
          error:null,
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const API_URL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`);
    const API_Data = await API_URL.json()
    console.log(API_Data);
    console.log(APIKey);
    if(city && country){
      this.setState({
        temperature:API_Data.main.temp,
        city:API_Data.name,
        country:API_Data.sys.country,
        humidity:API_Data.main.humidity,
        description:API_Data.weather[0].description,
        error:"",
      })
    }
    else{
      console.log(city + country);
      this.setState({
        temperature:"",
        city:"",
        country:"",
        humidity:"",
        description:"",
        error:"Enter full Data",
      })
    }

    console.log(this.state);
    
    

  }

  // await will wait until get all data

  render() {
    return (
      <div>
        <Form getWeather={this.getWeather}/>
        <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} humidity={this.state.humidity}
            description={this.state.description} error={this.state.error}/>
      </div>
    );
  }
}

export default App;