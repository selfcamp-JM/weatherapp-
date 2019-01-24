import React, { Component } from 'react'

const Weather = (props)=>{

    const{city,country,description,humidity,temperature,error} = props;
   
    return (
        <div className="weather__info">
        {city && country &&
        <div>
            <p className="weather__key"> Location: 
	 		  <span className="weather__value"> { city }, { country }</span>
            </p>
            <p className="weather__key"> Temperature: 
                <span className="weather__value"> { temperature }	</span>
            </p> 
            <p className="weather__key"> Humidity: 
	 		   <span className="weather__value"> { humidity } </span>
	 	    </p> 
            <p className="weather__key"> Conditions: 
	 		   <span className="weather__value"> { description } </span>
	        </p> 

        </div>}
        
        {error &&<p className="weather__error">{ props.error }</p>  }
        
      </div>


    )};

export default Weather;
