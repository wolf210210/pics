import axios from 'axios';


export default axios.create({
    baseURL :'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 4dfb1adecbc8afc5bdfe93253e36e6f0bea56fb05a0678646f1c4cf7e91594e7' 
    }
});