import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';

class User extends React.Component{
    constructor(props){
        super(props);
 }
     
     render(){
        return(
            <div>
            <header>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
            <h1 className="text-warning">The Fitness Pack</h1>
            <Link to="/">Home</Link> 
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
            <Link to="/aboutus">AboutUs</Link>
            </div>
            </nav>
            </header>
            <div className="container-fluid" style={{backgroundColor:"lightblue"}}>
                <div> <br/>
                <h1 className="text:primary">About Us</h1> <br/> <br/> <br/>
                <h3 style={{textAlign:"center"}}>TheFitness Pack</h3> <br/> <br/>
                <p style={{textAlign:"center"}}>‘If something stands between you and your success, move it. Never be denied.’</p>
                <p style={{textAlign:"center"}}>— Dwayne ‘The Rock’ Johnson</p> <br/> <br/>
                <p style={{textAlign:"center"}}>Being physically and mentally fit is necessary for an individual to live a happy, long life. Typically, exercise is one of the best ways to keep a person healthyHence, no matter how busy you are, it is always best to find time to do a workout routine. With the numerous diseases that spread in the world today, many individuals realized the essence of workout. Specifically, having a workout routine will give an individual the greatest benefit in physical, mental and social aspects. Accordingly, exercise will not just help you increase energy levels, reduce the risk of chronic disease and lose weight but will also help improve brain health and memory. With such benefits, you probably will love to do workout routines soon. Luckily, you don’t need to do it by yourself as various personal trainers or professional fitness coaches exist to provide the help you need. And joining fitness classes is just at your fingertips.Heance, <b>The Fitness Pack</b> is Designed to Go through your Daily Diet Plan and Weekly Workout Plan, follow all the Guidelines to Stay Healthy and Fit. </p> <br/><br/><br/>
                <p>Designed By @Paras, @Sampada, @Sejal and @Jeet.</p>
                </div>
                <footer className="bg-dark text-center text-white">
                    <div class="container p-4 pb-0">
                        <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com/" role="button">
                            <i className="fab fa-google"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" role="button">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/" role="button">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/" role="button">
                            <i className="fab fa-github"></i>
                        </a>
                        </section>
                    </div>
                    <div class="text-center p-3">
                        © 2021 Copyright:
                        <a class="text-white" href="https://localhost:3000/">TheFitnessPack.com</a>
                    </div>
                </footer>
            </div>
            </div>
        );
    }
}


export default User;