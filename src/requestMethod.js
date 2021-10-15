import axios from 'axios'

const BASE_URL = "http://localhost:4000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjU5ZGM2NWIyYTY1ZDBmNDRlNGQxOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDIxMDAyMiwiZXhwIjoxNjM0NDY5MjIyfQ.iMuU360sayuXpnsP8J4SpP6bHs6Ygn_eMqhq2WEdii8"



export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});