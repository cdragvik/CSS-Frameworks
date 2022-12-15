import { BASE_URL } from "../constants.mjs"; 
import { authFetch } from "../authFetch.mjs";

const action = "/posts";


export async function getPosts() {
        
    const getPostURL = `${BASE_URL}${action}`;
        
    const response = await authFetch (getPostURL)

    console.log(response)
    
    return await response.json(); 
}


export async function getPostById() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);    
    const id = params.get("id");

    console.log(id)

    if (!id) {
        throw new Error("Get requires a postID");
    }
        
    const getPostURL = `${BASE_URL}${action}/${id}`;
        
    const response = await authFetch (getPostURL)
    
    return await response.json(); 
}