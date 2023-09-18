import axios from 'axios';

const URL = "http://localhost:8000";


export const addProduct = async (restaurantID, data) => {
    try {
        return await axios.post(`${URL}/restaurant/products/addProduct/${restaurantID}`, data)
    } catch (error) {
        console.log(error, "error while calling the addProduct api")
    }
}
