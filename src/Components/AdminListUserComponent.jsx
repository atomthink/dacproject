import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import UserService from '../Services/UserService';

class AdminListUserComponent extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            users : []
        }
        this.addUser = this.addUser.bind(this);
        this.deleteUsers=this.deleteUsers.bind(this);
        this.logout=this.logout.bind(this);
    }

    deleteUsers(id){
        alert(id);
        UserService.deleteUser(id).then(res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }

    addUser(){
        this.props.history.push('/register');
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({users: res.data});
        });
    }

    logout = () => {
        alert("Are You Sure you want to Logout?")
       localStorage.removeItem("user_id");
       this.props.history.push("/login");
    }

    render() {
        return (
            <div style={{backgroundColor:"lightblue"}} className="container-fluid">
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                    <h1 className="text-warning">The Fitness Pack</h1>
                    <Link to="/listusers">Admin</Link>
                    <Link to="#" onClick={this.logout} >Logout</Link> 
                    </div>
                    </nav>
                </header>
                <h1 className="text-center">Users List</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}>Add User</button>
                </div> <br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Password</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Email ID</th>
                                <th>Address</th>
                                <th>Contact</th>
                                <th>User Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key={user.user_id}>
                                        <td>{user.user_name}</td>
                                        <td>{user.password}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.emailid}</td>
                                        <td>{user.address}</td>
                                        <td>{user.contact}</td>
                                        <td>{user.user_type}</td>
                                        <td>
                                            <button style={{marginLeft:"10px"}} onClick={() => this.deleteUsers(user.user_id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminListUserComponent;