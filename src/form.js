import React from 'react';

class Form extends React.Component{

    state = {}

    handleSubmit = (e) =>{
        e.preventDefault();
        let city = document.getElementById('inputContent').value;
        this.setState({
            city
        })
        document.getElementById('inputContent').value = ""
        this.props.updateWeatherDetails(city);
    }
    render(){
        return(
            <div className=" container text-center">
            <form  className = "container " onSubmit={this.handleSubmit}>
            <div className ="form-group row pt-3 "> 
            <label className="text-primary  pt-2 pr-2 pl-1 " >Enter City:</label>
            <input type="text" className="form-control w-50 mr-2" id="inputContent" placeholder="city name"/>
            <button type="submit" className=" btn btn-success btn-sm">Submit</button>
            </div>
            </form>
            </div>
        )
    }
}

export default Form;