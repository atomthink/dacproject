import axios from 'axios';

const EXERCISE_API_BASE_URL = "http://localhost:8080/fullexercise";

class ExerciseService {

    getFullBodyExercise(){
        return axios.get(EXERCISE_API_BASE_URL);
    }
}

export default new ExerciseService()