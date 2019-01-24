import React, { Component } from 'react';
import './App.css';
import Title from "./Components/Title";
import Form from "./Components/Form"
import Weather from "./Components/Weather"



const API_KEY ="aa82a2e4b40111392a33d56946397148";

class App extends Component {

  constructor(props){
    super(props);
  this.state={
    temperature:undefined,
    ciy:undefined,
    country: undefined,
    description:undefined,
    humidity:undefined,
    error: undefined
    
  }}


  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data =await api_call.json();
    console.log(data);
    
    if(country && city){

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:""
        
  
      });}else{
        this.setState({
          temperature:undefined,
          ciy:undefined,
          country: undefined,
          description:undefined,
          humidity:undefined,
          error:"Please enter the city and the country!!!"
        });

      }
    
  }

  render(){
    
    const{temperature,city,country,humidity,description,error} = this.state;
    
    return (
      <div className="App">
        Hello
        <Title />
        <Form getWeather = {this.getWeather} />
        <Weather  
          temperature = {temperature}
          city = {city}
          country = {country}
          humidity = {humidity}
          description = {description}
          error = {error}/>
      </div>
    );
  }}

export default App;
