import axios from "axios";

// http://192.168.1.151:3333 /create
export const api = axios.create({
    baseURL: "https://aplicativo-mobile-theta.vercel.app/"
})