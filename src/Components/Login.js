import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';

class Login extends React.Component{

  constructor(props){
         super(props);
         this.state={
           msg:"",user_name:"",password:""
         }
  }
  login = () => {

    console.log(this.state);
     let user_name = this.refs.user_name.value;
     let password = this.refs.password.value;
     const url = "http://localhost:8080/login?user_name="+user_name+"&password="+password;
    fetch (url)
    .then(response => response.json())
    .then(data => {
        if(data.user_type == "user")
          {
            alert(data.user_id);
         sessionStorage.setItem("user_id",data.user_id)
         sessionStorage.setItem("user_personal",JSON.stringify(data))
         this.props.history.push("/user");
          }
        else if(data.user_type == "admin")
          {
          sessionStorage.setItem("user_id",data.user_id)
          sessionStorage.setItem("user_personal",JSON.stringify(data))
          this.props.history.push("/listusers");
          }
      else
         alert('Wrong id or password !!')
    });
    /*
    .then(response => response.text())
    .then(data => this.setState({msg: data}));
     alert('You are logged in successfully'); 
     this.props.history.push("/user");
     */
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
      <div style={{backgroundColor:"lightblue"}}>
      <h2>Login</h2>
        <form>
        <div style={{height:'100%', height:'100%'}}>
        <br/>
          Enter Username :
          <input type="text" ref="user_name"  placeholder="username" className="form-control" aria-describedby="UserNamelHelp"/><br/>
          Enter Password :
          <input type="password" ref="password" placeholder="password" className="form-control"/> <br/> 
         <input type="button" onClick={this.login} value="Login"  className="btn btn-primary" /> <br/>
         <a href="/register">New User? Sign Up Here</a>
        </div>
        </form>
        <br/>
        <p>{this.state.msg}</p>
      </div>
      </div>
    )
  }   
}
export default Login;

/*render(){
    return(
      <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="9">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <div className="row" className="mb-2 pageheading">
                    <div class="col-sm-12 btn btn-primary">
                      <h2>Login Page</h2>
                      </div>
                  </div>
                  <lable>User Name</lable><br></br>
                  <InputGroup className="mb-3">
                    <Input type="text"placeholder="Enter username " />
                  </InputGroup>
                  <lable>Password</lable><br></br>
                  <InputGroup className="mb-3">
                    <Input type="password" placeholder="Enter password" />
                  </InputGroup> 
                  <Button  onClick={this.login}  color="success" size="lg" block >Login</Button> <br/>
                  <a href="/register">New User? Sign Up Here</a>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <p>{this.state.msg}</p>
    </div>
  );

}*/