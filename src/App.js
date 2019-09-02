// b66ecf3c7e717c4eb45abd13e53ba0ac
import React from 'react';
import Form from './form.js';
class App extends React.Component {

  state = {
    weather:{
    temp:"",
    type:"",
    city:"",
    country:"",
    wind:"",
    humidity:""} ,
    requestSuccessfull:true
  }

  updateWeatherDetails = (area) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${area}&units=metric&APPID=b66ecf3c7e717c4eb45abd13e53ba0ac`,{mode:'cors'})
    .then((response)=>{
      if (response.ok){
        console.log(response)
      return (response.json());
      }
      else{
        throw new Error(
          this.setState({
            requestSuccessfull:false
           })
        )
      }
      
    })
    .then((response) =>{
      this.setState((prevState) =>({
        weather : { 
            temp:response.main.temp,
            type:response.weather[0].description,
            city:response.name,
            country:response.sys.country,
            wind:response.wind.speed,
            humidity:response.main.humidity,
        },
        requestSuccessfull:true
      }))
    })
    .catch((error) =>{
    this.setState({
    requestSuccessfull:false
   })
    console.log("error occured")
  })
}
  render(){
  
    if (this.state.weather.temp !== "" && this.state.requestSuccessfull){
      return(
        <div className="container-fluid p-2 ">
        <div className="border-bottom border-secondary container-fluid">
        <h1 className="text-center mt-3 ">Weather App</h1>
        </div>
        <Form updateWeatherDetails ={this.updateWeatherDetails}/>
        <div className=" increaseWidth container mx-auto bg-dark w-70  mt-5 pt-2 pb-2 border border-secondary rounded  " id = "increaseWidth">
          <h1 className="text-left text-white border-bottom">{this.state.weather.temp} &deg;, {this.state.weather.type}</h1>
          <h3 className="text-left text-white">{this.state.weather.city}, {this.state.weather.country}</h3>
          <h5 className="text-left text-white"> Wind :{this.state.weather.wind}km/h</h5>
          <h5 className="text-left text-white"> Humidity :{this.state.weather.humidity}%</h5>

        </div>
        </div>
      )
     
    }
    else if (this.state.weather.temp === "" && this.state.requestSuccessfull){
      return (
        <div className="container-fluid p-2 ">
        <h1 className="text-center mt-3 border-bottom border-secondary">Weather App</h1>
        <Form updateWeatherDetails ={this.updateWeatherDetails}/>
        <div className="container mx-auto bg-dark w-50 mt-5">
        </div>
        </div>
       
    )}
    else{
      return(
        <div className="container-fluid p-0 ">
        <h1 className="text-center mt-3 border-bottom border-secondary">Weather App</h1>
        <Form updateWeatherDetails ={this.updateWeatherDetails}/>
        <h2 className="text-center text-danger">Invalid city/country name</h2>
        </div>
      )
    }
    }
     

}





export default App;
