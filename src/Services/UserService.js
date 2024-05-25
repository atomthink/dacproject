import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/users";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    getUserById(user_id){
        return axios.get(USER_API_BASE_URL+'/'+user_id);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL+'/' + userId,user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL+ '/' +userId);
    }
}

export default new UserService()