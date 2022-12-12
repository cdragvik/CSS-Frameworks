import { BASE_URL } from "../api/constants.mjs"; 
import { authFetch } from "../api/authFetch.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {

    if (!profileData.name) {
        throw new Error("Update requires a name");
    }
    
    const updateProfileURL = `${BASE_URL}${action}/${profileData.name}/media`;
    
    const response = await authFetch (updateProfileURL, {
        method,
        body: JSON.stringify(profileData)
    })

    return await response.json(); 
}