/* eslint-disable no-undef */
import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'http://192.168.220.119:9004',
});
