import React from 'react';
import axios from 'axios';
export const getAxios = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
}
export const postAxios=async(url,body)=>{
    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}