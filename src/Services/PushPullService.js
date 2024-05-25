import axios from 'axios';

const PUSHPULL_BASE_API_URL = "http://localhost:8080/pushpullworkout";

class PushPullService{
    getPushPullExercise(){
        return axios.get(PUSHPULL_BASE_API_URL);
    }
}

export default new PushPullService()