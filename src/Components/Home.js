import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';

class Home extends React.Component{
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
                <img src="https://source.unsplash.com/1600x900/?gym,gym" />
                <div>
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

export default Home;