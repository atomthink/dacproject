import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';

import Home from './Components/Home';
import Login from './Components/Login';
import Sign_Up from './Components/Sign_Up';
import Diet_Plan from './Components/Diet_Plan';
import User from './Components/User';
import AboutUs from './Components/AboutUs';
import Nearby_Gym from './Components/Nearby_Gym';
import AdminListUserComponent from './Components/AdminListUserComponent';
import UpdateUserComponents from './Components/UpdateUserComponents';
import FullBody_WorkoutList from './Components/FullBody_WorkoutList';
import PushPull_WorkoutList from './Components/PushPull_WorkoutList';
import Women_WorkoutList from './Components/Women_WorkoutList';
import FoodList from './Components/FoodList';
import BMICalculator from './Components/BMICalculator';


function App() {
  return (
    <header>
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Sign_Up} />
        <Route path="/diet_plan" component={Diet_Plan} />
        <Route path="/user" component={User} />
        <Route path="/nearby_gym" component={Nearby_Gym} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/listusers" component={AdminListUserComponent} />
        <Route path="/updateusers/:user_id" component={UpdateUserComponents} />
        <Route path="/fullbodylist" component={FullBody_WorkoutList} />
        <Route path="/pushpulllist" component={PushPull_WorkoutList} />
        <Route path="/womenlist" component={Women_WorkoutList} />
        <Route path="/foodlist" component={FoodList} />
        <Route path="/bmical" component={BMICalculator} />
        <Route path="/updateusers" component={UpdateUserComponents} />
      </div>
    </header>
  );
}

export default App;
