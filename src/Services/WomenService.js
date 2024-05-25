import axios from 'axios';

const WOMEN_BASE_API_URL = "http://localhost:8080/womenworkout"

class WomenService{
    getWomenExercise(){
        return axios.get(WOMEN_BASE_API_URL);
    }
}

export default new WomenService()