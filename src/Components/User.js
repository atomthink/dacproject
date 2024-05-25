import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
          msg:"",user_name:"",password:"",
          user:[]
        }
        this.logout = this.logout.bind(this);
        //this.updateuser = this.updateuser.bind(this);
}

/*updateuser(user_id){
    this.props.history.push(`/updateusers/${user_id}`);
}*/

 logout = () => {
     alert("Are You Sure you want to Logout?")
    localStorage.removeItem("user_id");
    this.props.history.push("/login");
}
     
     render(){
        return(
            <div className="container-fluid" style={{backgroundColor:"lightblue"}}>
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
            <div className="container-fluid" >
                <div> <br/>
                <h1>Welcome User</h1> <br/> <br/> <br/>
                <h4 style={{textAlign:"center"}}>Start Your Fitness Pact here</h4> <br/>
                <p style={{textAlign:"center"}}>Start Your Regin with our <b>Workout Plan</b> and <b>Diet Plan</b> and be Fit , more than Yesterday.</p>
                </div> <br/> <br/>
            </div>
        </div>
        );
    }
}


export default User;