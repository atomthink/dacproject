import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PushPullService from '../Services/PushPullService';

class PushPull_WorkoutList extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            ppexercises: []
        }
        this.fullbodyExercise = this.fullbodyExercise.bind(this);
        this.womenExercise = this.womenExercise.bind(this);
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        alert("Are You Sure you want to Logout?")
       localStorage.removeItem("user_id");
       this.props.history.push("/login");
    }

    fullbodyExercise(){
        this.props.history.push('fullbodylist');
    }

    womenExercise(){
        this.props.history.push('/womenlist');
    }

    componentDidMount(){
        PushPullService.getPushPullExercise().then((res) => {
            this.setState({ppexercises: res.data});
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
                <h1 className="text-center">Push Pull Workout List</h1>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Body Part</th>
                                <th>Day</th>
                                <th>First Exercise</th>
                                <th>Second Exercise</th>
                                <th>Third Exercise</th>
                                <th>Fourth Exercise</th>
                                <th>Fifth Exercise</th>
                                <th>Sixth Exercise</th>
                                <th>Seventh Exercise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.ppexercises.map(
                                    exercise =>
                                    <tr key={exercise.id}>
                                        <td>{exercise.eid}</td>
                                        <td>{exercise.body_part}</td>
                                        <td>{exercise.day}</td>
                                        <td>{exercise.first_exercise}</td>
                                        <td>{exercise.second_exercise}</td>
                                        <td>{exercise.third_exercise}</td>
                                        <td>{exercise.fourth_exercise}</td>
                                        <td>{exercise.fifth_exercise}</td>
                                        <td>{exercise.sixth_exercise}</td>
                                        <td>{exercise.seventh_exercise}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <h3 style={{textAlign:"center"}}>More Workout Plans</h3> <br/>
                    <div className="row">
                        <button style={{marginLeft:"510px"}} onClick={this.womenExercise} className="btn btn-success">Women Workout</button> <br/>
                        <button style={{marginLeft:"195px"}} onClick={this.fullbodyExercise} className="btn btn-success">Full Body Workout</button> <br/>
                    </div>
            </div>
        );
    }
}

export default PushPull_WorkoutList;