import axios from 'axios';

const token = localStorage.getItem('user-token')

export const HTTP = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
    headers: {
      Authorization: `Bearer ${token}`
    }
})

export default HTTP