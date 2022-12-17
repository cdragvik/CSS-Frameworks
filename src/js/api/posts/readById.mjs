import { BASE_URL } from "../constants.mjs"; 
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

async function getPost() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);    
    const id = params.get("id");

    // if (!id) {
    //     throw new Error("Get requires a postID");
    // }
        
    // const getPostURL = `${BASE_URL}${action}/${id}`;
        
    // const response = await authFetch (getPostURL)
    
    // return await response.json(); 
}