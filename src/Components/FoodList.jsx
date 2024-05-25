import React, { Component } from 'react';
import FoodItem from '../Services/FoodItem';
import { parse } from 'query-string';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";


class FoodList extends Component {

    constructor(props){
        super(props)
        this.state = {
            foods: []
            //foods : user_id:""
        }
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        alert("Are You Sure you want to Logout?")
       localStorage.removeItem("user_id");
       this.props.history.push("/login");
    }

    componentDidMount(){
         const search = this.props.location.search;
         const diet_preference = new URLSearchParams(search).get("diet_preference");
         console.log("diet",diet_preference);
        alert("your diet plan..")
        FoodItem.getFoodItem(diet_preference).then((res) => {
            this.setState({foods: res.data});
            //let food = res.data;
            //this.setState({user_id:food.user_id});
        });
    }

    render() {
        return (
            <div style={{backgroundColor:"lightblue"}} className="container-fluid">
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
            <h1 className="text-center">Here is Your Diet Plan </h1> <br/>
            <h3 className="text-center">Food Item List</h3>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Food ID</th>
                            <th>Dish</th>
                            <th>Calories</th>
                            <th>Proteins</th>
                            <th>Carbs</th>
                            <th>Fats</th>
                            <th>Meal</th>
                            <th>Diet Preference</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.foods.map(
                                food =>
                                <tr key={food.userdetail_id}>
                                    <td>{food.food_id}</td>
                                    <td>{food.dish}</td>
                                    <td>{food.calories}</td>
                                    <td>{food.proteins}</td>
                                    <td>{food.carbs}</td>
                                    <td>{food.fat}</td>
                                    <td>{food.meal}</td>
                                    <td>{food.diet_preference}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <h3 className="container-fluid">For More Details <a href="https://blog.myfitnesspal.com/recipes/">click here</a></h3>
        </div>
        );
    }
}

export default FoodList;