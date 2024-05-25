import axios from 'axios';

const FOOD_API_BASE_URL = "http://localhost:8080/getFoodForUser";

class FoodItem{
    getFoodItem(dietpref){
        /*
       return axios({
           method:'POST',
           data:{
               dietpref:dietpref
           }
       })
       */
       let obj = {
           diet_preference: dietpref
       }
        return axios.post(FOOD_API_BASE_URL, obj);

    }
}

export default new FoodItem()