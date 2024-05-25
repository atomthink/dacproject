import React, {useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';

function BMICalculator(){
  const [height, setHeight]=useState(0);
  const [weight, setWeight]=useState(0);
  const [bmi, setBMI]=useState(0);

  function handleHeight(e){
    let h = e.target.value;
    setHeight(h);
  }
  function handleWeight(e){
    let w = e.target.value;
    setWeight(w);
  }

  useEffect(() => {
    let bmi1 = (weight/(height*2))*100;
    setBMI(bmi1.toFixed(2));
  },[height,weight]);

  return(
    <div className="App" style={{backgroundColor:"lightblue"}}>
      <header>
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <h1 className="text-warning">The Fitness Pack</h1>
        <Link to="/user">User</Link> 
                    <Link to="/diet_plan">Diet Plan</Link>
                    <Link to="/fullbodylist">Workout Plan</Link>
                    <Link to="/bmical">BMI Calculator</Link>
                    <Link to="/nearby_gym">Nearby Gym</Link>
                    <Link to="/login">Logout</Link> 
        </div>
        </nav>
      </header> <br/>
      <h1 className="text-primary">BMI Calculator</h1> <br/>
      <p>Body Mass Index , or <b>BMI</b>, is a way to help you figure out if you are at a healthy weight for your height.BMI is a number based on your weight for your weight and height.</p> <br/>
      <p><b>BMI </b> is used to Broadly define different weight groups in adults 20 years old or older. The same Groups apply to both Men and Women.</p> <br/>
      <p>Height :</p> <input type="number" className="mb-3" onChange={handleHeight} placeholder="Enter Your Height in cm" /> <br/>
      <p>Weight :</p> <input type="number" className="mb-3" onChange={handleWeight} placeholder="Enter Your Weight in kg" /> <br/> <br/>
      <h2 className="text-danger">BMI : {bmi}</h2> <br/>
      <li><b>Underweight:</b> BMI is less than 18.5</li>
      <li><b>Normalweight:</b> BMI is 18.5 to 24.9</li>
      <li><b>Overweight:</b> BMI is 25 to 29.9</li>
      <li><b>Obese:</b> BMI is 30 or more</li>
    </div>
  );
}

export default BMICalculator;