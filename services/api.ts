import axios from "axios";

// http:// 172.17.6.149:3333 /create
export const api = axios.create({
    baseURL: "http:// 172.17.6.149:3333"
})