import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';
import { Button, Card, FormGroup, CardBody, Label, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


 class Sign_Up extends React.Component{
     constructor(props) {
        super(props);
        this.state = {
          msg: {
            user_name:'',
            password:'',
            fname: '',
            lname: '',
            dob: '',
            emailid:'',
            address:'',
            gender:'',
            contact: '',
            user_type:''  
          }
        }
        this.user_name = this.user_name.bind(this);
        this.password= this.password.bind(this);
        this.fname = this.fname.bind(this);
        this.lname = this.lname.bind(this);
        this.dob = this.dob.bind(this);
        this.user_type= this.user_type.bind(this);
        this.emailid = this.emailid.bind(this);
        this.address = this.address.bind(this);
        this.gender = this.gender.bind(this);
        this.contact = this.contact.bind(this);
        this.register = this.register.bind(this);
            
    }
                  
    user_name(event) {
    this.setState({ user_name: event.target.value })
    }
    password(event) {         
    this.setState({ password: event.target.value })          
    }
    user_type(event) {     
    this.setState({ user_type: event.target.value })          
    }
    fname(event) {
    this.setState({ fname: event.target.value })
    }
    lname(event) {
    this.setState({ lname: event.target.value })
    }
    dob(event) {
    this.setState({ dob: event.target.value })
    }
    emailid(event) {
    this.setState({ emailid: event.target.value })
    }        
    address(event) {          
    this.setState({ address: event.target.value })        
    }
    gender(event) {
    this.setState({ gender: event.target.value })
    }
    contact(event) {       
    this.setState({ contact: event.target.value })
    }
    register(event) {
      alert("Hello");
          fetch('http://localhost:8080/save', {
            method: 'post',
            headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
             },                      
            "body": JSON.stringify({
              user_name:this.state.user_name,
              password:this.state.password,
              user_type:this.state.user_type,
              fname: this.state.fname,
              lname: this.state.lname,
              dob: this.state.dob,
              emailid: this.state.emailid,
              address: this.state.address,
              gender: this.state.gender,
              contact: this.state.contact
            })
          })       
          .then((response) => {
            if (response.status === 200)
            {
              alert("success");
              this.props.history.push("/login");
            }
            else    
              alert('Un-authenticated User')
          });         
}
render(){
    return(
      <div className="container-fluid">
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
        <div className="app flex-row align-items-center" style={{backgroundColor:"lightblue"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="12" lg="10" xl="9">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div className="row" className="mb-2 pageheading">
                      <div className="col-sm-16 text-primary">
                        <h2>Sign Up Page</h2> <br/>
                        </div>
                    </div>
                    <lable>User Name</lable><br></br>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={(event) =>this.user_name(event)} placeholder="Enter username " />
                    </InputGroup>
                    <lable>Password</lable><br></br>
                    <InputGroup className="mb-3">
                      <Input type="password"  onChange={(event) =>this.password(event)} placeholder="Enter password" />
                    </InputGroup>
                    <InputGroup>
                    <lable>User Type</lable><br></br>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={(event) =>this.user_type(event)} placeholder="You are User" />
                    </InputGroup>
                    </InputGroup>
                    <lable>First Name</lable><br></br>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={(event) =>this.fname(event)} placeholder="Enter First Name" />
                    </InputGroup>
                    <lable>Last Name</lable><br></br>
                      <InputGroup className="mb-3">
                      <Input type="text"  onChange={(event) =>this.lname(event)} placeholder="Enter last name" />
                    </InputGroup>
                    <lable>Birthdate</lable><br></br>
                    <InputGroup className="mb-3">
                   <Input type="date"  onChange={(event) =>this.dob(event)} placeholder="Enter date of birth " />
                    </InputGroup>
                    <lable>Email</lable><br></br>
                    <InputGroup className="mb-3">
                   <Input type="email"  onChange={(event) =>this.emailid(event)} placeholder="Enter email" />
                    </InputGroup>
                    <lable>Address</lable><br></br>
                    <InputGroup className="mb-4">
                      <Input type="text"  onChange={(event) =>this.address(event)} placeholder="Enter address" />
                    </InputGroup>
                    <FormGroup>
                    <Label>Gender</Label>
                    <Input type="select" onChange={(event) =>this.gender(event)} name="select">
                    <option>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                    </Input>
                    </FormGroup>
                   <lable>Contact Number</lable><br></br>
                   <InputGroup className="mb-4">
                      <Input type="number"  onChange={(event) =>this.contact(event)} placeholder="Enter 10 Digit Contact Number" />
                   </InputGroup>
                    <Button  onClick={(event) => this.register(event)}  color="success"  >Create Account</Button>
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

export default Sign_Up;