import axios from "axios";


const BASE_URL = "http://localhost:5000/api"
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTlhNjNiY2EyZDcxZjA1MGUzOTcyMCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTQzNTEwNDIsImV4cCI6MTY1NDYxMDI0Mn0.2N659Y9uvfHZZLVg1ufUCIC4qedWYQP_CSlrzYDnmBQ";



export const publicRequest = axios.create({
    baseURL : BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header:{token: `Bearer ${TOKEN}`}
});
