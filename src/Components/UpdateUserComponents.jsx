import React, { Component } from 'react';
import UserService from '../Services/UserService';
import { Button, Card, FormGroup, CardBody, Label, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class UpdateUserComponents extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            user_id: this.props.match.params.user_id,
            user_name: "",
            password:"",
            fname : "",
            lname : "",
            gender : "",
            dob : "",
            emailid : "",
            address: "",
            contact: ""
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changefNameHandler = this.changefNameHandler.bind(this);
        this.changelNameHandler = this.changelNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.updateUser(this.state.user_id).then((res) => {
            let user = res.data;
            this.setState({user_name: user.user_name,
                password: user.password,
                fname: user.fname,
                lname: user.lname,
                gender: user.gender,
                dob: user.dob,
                emailid: user.emailid,
                address: user.address,
                contact: user.contact
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {user_name: this.state.user_name, password: this.state.password, fname: this.state.fname, lname: this.state.lname, gender: this.state.gender, dob: this.state.dob, emailid: this.state.emailid, address: this.state.address, contact: this.state.contact};
        console.log('user => ' + JSON.stringify(user));
        UserService.updateUser(user, this.state.user_id).then(res => {
            this.props.history.push('/user');
        })
    }

    changeUserNameHandler = (event) => {
        this.setState({user_name: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    changefNameHandler = (event) => {
        this.setState({fname: event.target.value});
    }

    changelNameHandler = (event) => {
        this.setState({lname: event.target.value});
    }

    changeGenderHandler = (event) => {
        this.setState({gender: event.target.value});
    }

    changeDobHandler = (event) => {
        this.setState({dob: event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailid: event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }

    changeContactHandler = (event) => {
        this.setState({contact: event.target.value});
    }

    cancle(){
        this.props.history.push('/user');
    }

    render() {
        return (
            <div style={{backgroundColor:"lightblue"}}>
                <Container>
          <Row className="justify-content-center">
            <Col md="12" lg="10" xl="9">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div className="row" className="mb-2 pageheading">
                      <div className="col-sm-16 text-primary">
                        <h2>Update User</h2> <br/>
                        </div>
                    </div>
                    <lable>User Name</lable><br></br>
                    <InputGroup className="mb-3">
                      <Input type="text" value={this.state.user_name} onChange={this.changeUserNameHandler} placeholder="Enter username " />
                    </InputGroup>
                    <lable>Password</lable><br></br>
                    <InputGroup className="mb-3">
                      <Input type="password" value={this.state.password} onChange={this.changePasswordHandler} placeholder="Enter password" />
                    </InputGroup>
                    <lable>First Name</lable><br></br>
                    <InputGroup className="mb-3">
                      <Input type="text" value={this.state.fname} onChange={this.changefNameHandler} placeholder="Enter First Name" />
                    </InputGroup>
                    <lable>Last Name</lable><br></br>
                      <InputGroup className="mb-3">
                      <Input type="text" value={this.state.lname} onChange={this.changelNameHandler} placeholder="Enter last name" />
                    </InputGroup>
                    <lable>Birthdate</lable><br></br>
                    <InputGroup className="mb-3">
                   <Input type="date" value={this.state.dob} onChange={this.changeDobHandler} />
                    </InputGroup>
                    <lable>Email</lable><br></br>
                    <InputGroup className="mb-3">
                   <Input type="email" value={this.state.emailid} onChange={this.changeEmailIdHandler} placeholder="Enter email" />
                    </InputGroup>
                    <lable>Address</lable><br></br>
                    <InputGroup className="mb-4">
                      <Input type="text" value={this.state.address} onChange={this.changeAddressHandler} placeholder="Enter address" />
                    </InputGroup>
                    <FormGroup>
                    <Label>Gender</Label>
                    <Input type="select" value={this.state.gender} onChange={this.changeGenderHandler} name="select">
                    <option>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                    </Input>
                    </FormGroup>
                   <lable>Contact Number</lable><br></br>
                   <InputGroup className="mb-4">
                      <Input type="number" value={this.state.contact} onChange={this.changeContactHandler} placeholder="Enter 10 Digit Contact Number" />
                   </InputGroup>
                   <Button className="btn btn-success" onClick={this.updateUser}>Save</Button>
                   <Button className="btn btn-danger" onClick={this.cancle.bind(this)} style={{
                    marginLeft: "10px"}}>Cancel</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>        
    </div>
        );
    }
}

export default UpdateUserComponents;