import React, { Component } from 'react'

const Weather = (props)=>{

    const{city,country,description,humidity,temperature,error} = props;
    return (
      <div>
          {city && country &&
        <div>
            <p>{city}</p>
            <p>{country}</p>
            <p>{description}</p>
            <p>{temperature}</p>
            <p>{humidity}</p>

        </div>}
        
        {error &&<p> {error}</p>}
        
      </div>


    )};

export default Weather;
