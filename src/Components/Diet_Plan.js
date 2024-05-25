import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';
import { Button, Card, FormGroup, CardBody, Label, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


 class Diet_Plan extends React.Component{
     constructor(props) {
        super(props);
        this.state = {
          details: {
            //user_id:'',
            diet_preference: '',
            activity_level:'',
            goal:'',
            date: '', 
            age:'' 
          }
        }
        //this.user_id= this.user_id.bind(this);
        this.diet_preference = this.diet_preference.bind(this);
        this.activity_level= this.activity_level.bind(this);
        this.goal= this.goal.bind(this);
        this.date = this.date.bind(this);
        this.age = this.age.bind(this);
        this.userdetail = this.userdetail.bind(this);
        this.logout = this.logout.bind(this);
            
    }
                  
    /*user_id(event) {         
    this.setState({ user_id: event.target.value })          
    }*/

    logout = () => {
      alert("Are You Sure you want to Logout?")
     localStorage.removeItem("user_id");
     this.props.history.push("/login");
    }

    diet_preference(event) {
    this.setState({ diet_preference: event.target.value })
    }
    activity_level(event) {
    this.setState({ activity_level: event.target.value })
    }
    goal(event) {
    this.setState({ goal: event.target.value })
    }      
    date(event) {          
    this.setState({ date: event.target.value })        
    }
    age(event) {          
      this.setState({ age: event.target.value })        
      }
    userdetail(event) {
      alert(sessionStorage.getItem("user_personal"));
          fetch('http://localhost:8080/savedetails', {
            method: 'post',
            headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
             },                      
            "body": JSON.stringify({
              user_id: sessionStorage.getItem("user_id"),
              diet_preference: this.state.diet_preference,
              activity_level: this.state.activity_level,
              goal: this.state.goal,
              date: this.state.date,
              age:this.state.age
            })
          })       
          .then((response) => {
            console.log(response)
            if (response.status === 200)
            {
              alert("success");
              this.props.history.push(`/foodlist?diet_preference=${this.state.diet_preference}`);
            }
            else    
              alert('Fail to Show Diet Plan')
          });           
}
render(){
    return(
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
        <div className="app flex-row align-items-center" style={{backgroundColor:"lightblue"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="18" lg="10" xl="9">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div className="row" className="mb-2 pageheading">
                      <div class="col-sm-16 text-primary">
                        <h2>Diet Plan Page</h2> <br/>
                        </div>
                    </div>
                    <FormGroup>
                    <Label>Diet Preference</Label>
                    <Input type="select" onChange={(event) =>this.diet_preference(event)} name="select">
                    <option>Choose...</option>
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non Veg</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label>Activity Level</Label>
                    <Input type="select" onChange={(event) =>this.activity_level(event)} name="select">
                    <option>Choose...</option>
                    <option>Sedentary (little to no exercise)</option>
                    <option>Light exercise (1-3 days of exercise per week)</option>
                    <option>Moderate exercise (4-5 days of exercise per week)</option>
                    <option>Intense exercise (6-7 days of exercise per week)</option>
                    <option>Hard exercise (marathon or twice daily training sessions)</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label>Goal</Label>
                    <Input type="select" onChange={(event) =>this.goal(event)} >
                    <option>Choose...</option>
                    <option>Loose Fat</option>
                    <option>Maintain Muscles</option>
                    <option>Build Muscles</option>
                    </Input>
                    </FormGroup>
                    <lable>Date</lable><br></br>
                    <InputGroup className="mb-3">
                   <input type="date"  onChange={(event) =>this.date(event)} />
                    </InputGroup>
                    <lable>Age</lable><br></br>
                    <InputGroup className="mb-3">
                      <Input type="number"  onChange={(event) =>this.age(event)} placeholder="Enter your age" />
                    </InputGroup>
                    <Button  onClick={(event) => this.userdetail(event)}  color="success"  >Submit Details</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
    );
  }
}

export default Diet_Plan;