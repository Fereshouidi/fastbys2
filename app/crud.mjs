import axios from "axios";

const urlCode = 'http://192.168.247.143:3001/api'



export const getAllProducts = async() => {
    try {
        const response = await axios.get(urlCode + '/get/allProducts')
        console.log(response.data);
        return response.data
    }catch(err){
        console.log(err);
        
    }
}

