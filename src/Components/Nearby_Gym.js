import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';


class Nearby_Gym extends Component {

    constructor(props){
        super(props);
        this.state = {
            latitude : null,
            longitude : null,
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.getlocation = this.getlocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.logout = this.logout.bind(this);
    }

    getlocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getCoordinates , this.handleLocationError);
        }
        else{
            alert("Geolocation is not supported by this Browser.!!");
        } 
    }

    getCoordinates(position){
        this.setState({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        })
    }

    handleLocationError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert ("User denied the request for Geolocation.")
            break;
          case error.POSITION_UNAVAILABLE:
            alert ( "Location information is unavailable.")
            break;
          case error.TIMEOUT:
            alert ( "The request to get user location timed out.")
            break;
          case error.UNKNOWN_ERROR:
            alert ( "An unknown error occurred.")
            break;
        }
    }

    logout = () => {
        alert("Are You Sure you want to Logout?")
       localStorage.removeItem("user_id");
       this.props.history.push("/login");
   }

    render() {
        return (
            <div className="container-fluid">
            <header>
                <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                <h1 className="text-warning">The Fitness Pack</h1>
                <Link to="/user">User</Link> 
                    <Link to="/diet_plan">Diet Plan</Link>
                    <Link to="/fullbodylist">Workout Plan</Link>
                    <Link to="/bmical">BMI Calculator</Link>
                    <Link to="/nearby_gym">Nearby Gym</Link>
                    <Link to="#" onClick={this.logout} >Logout</Link> 
                </div>
            </nav>
            </header>
            <div className="App" style={{background:"lightblue"}}> <br/>
                <h1 className="text-danger">Nearby GYM</h1> <br/> <br/>
                <button className="btn btn-primary" onClick={this.getlocation}>Get Coordinates</button> <br/> <br/>
                <p>Latitude : {this.state.latitude}</p>
                <p>Longitude : {this.state.longitude}</p>
                {
                    this.state.latitude && this.state.longitude ?
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59543.426087108535!2d +position.coords.longitude+ !3d +position.coords.latitude+ !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snearby%20gym%20nagpur!5e0!3m2!1sen!2sin!4v1616511246278!5m2!1sen!2sin" width="1510" height="950" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                    :
                    null
                }
            </div>
            </div>
        );
    }
}   

export default Nearby_Gym;