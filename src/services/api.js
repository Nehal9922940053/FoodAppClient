import axios from 'axios';

axios.defaults.withCredentials = true;

const  URL = "http://localhost:8000";

export const signupUser = async (data) => {
    try {
        return await axios.post(`${URL}/user/signup`,data)
    } catch (error) {
        console.log(error, "error while calling signupUser api");
    }
}

export const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/user/login`,data)
    } catch (error) {
        console.log(error, "error while calling loginUser api");
    }
}

export const signupRestaurant = async (data) => {
    try {
        return await axios.post(`${URL}/restaurant/signup`,data)
    } catch (error) {
        console.log(error, "error while calling signupRestaurant api");
    }
}

export const loginRestaurant = async (data) => {
    try {
        return await axios.post(`${URL}/restaurant/login`,data)
    } catch (error) {
        console.log(error, "error while calling loginRestaurant api");
    }
}

export const changeUserPassword  = async (data) => {
    try {
        return await axios.put(`${URL}/user/changePassword`,data)
    } catch (error) {
        console.log(error, "error while calling changeUserPassword api");        
    }
}    

export const changeRestaurantPassword  = async (data) => {
    try {
        return await axios.put(`${URL}/restaurant/changePassword`,data)
    } catch (error) {
        console.log(error, "error while calling changeRestaurantPassword api");        
    }
}    


export const verifyUser = async () => {
    try {
        return await axios.get(`${URL}/user/verifyUser`)
    } catch (error) {
        console.log(error, "error while calling verifyUser api");
    }
}

export const verifyRestaurant = async () => {
    try {
        return await axios.get(`${URL}/restaurant/verifyRestaurant`)
    } catch (error) {
        console.log(error, "error while calling verifyUser api");
    }
}

export const addProductToCart = async ({ userID, productID, productName, productImg, restaurantID, quantity, total }) => {
    try {
        return await axios.post(`${URL}/user/addToCart`, { userID, productName, productImg, quantity, total, productID, restaurantID })
    } catch (error) {
        console.log(error, "error while calling addProductToCart api", error)
    }
}

export const buy = async ({ userID, productDetails }) => {
    try {
        return await axios.post(`${URL}/user/buyProduct`, { userID, productDetails });
    } catch (error) {
        console.log(error, "error while calling buy api");
    }
}

export const changeStatus = async ({ orderID, restaurantID }) => {
    try {
        return await axios.post(`${URL}/restaurant/products/status`, { orderID, restaurantID })
    } catch (error) {
        console.log(error, "error while calling changeStatus api");
    }
}

export const handlePayment = async (amount) => {
    try {
        const data = { amount: amount }
        return await axios.post(`${URL}/payment/orders`, data)
    } catch (error) {
        console.log(error, "error while calling handlePayment api");
    }
}

export const verifyPayment = async (res) => {
    try {
        const response = { response: res }
        return axios.post(`${URL}/payment/verify`, response)
    } catch (error) {
        console.log(error, "error while calling verifyPayment api")
    }
}


export const pastOrders = async ({ userID, productDetails }) => {
    try {
        return await axios.post(`${URL}/user/pastOrders`, { userID, productDetails })
    } catch (error) {
        console.log(error, "error while calling pastOrders api");
    }
}
