import React from 'react'
import axios from 'axios';
import { CookiesProvider, useCookies } from "react-cookie";
import Cookies from 'js-cookie';



export default  axios.create({
    baseURL: 'https://swift-secure-api.onrender.com/',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});


