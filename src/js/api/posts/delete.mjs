import { BASE_URL } from "../constants.mjs"; 
import { authFetch } from "../authFetch.mjs";
const action = "/posts";
const method = "delete";


export async function removePost(id) {

    if (!id) {
        throw new Error("Delete requires a postID");
    }
    
    const deletePostURL = `${BASE_URL}${action}/${id}`;
        
    const response = await authFetch (deletePostURL, {
        method
    })
    
    return await response.json(); 
}
