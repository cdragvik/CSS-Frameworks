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

    if (id === 0) {
        return {"id": 0, 
        "title": "A nice title", 
        "body": "a long body", 
        "tags": ["tag1", "tag2"], 
        "media": "https://url.com/image.jpg",
        "created": "2022-09-04T08:08:38.830Z",
        "updated": "2022-09-04T08:08:38.830Z",
        "_count": {
            "comments": 0,
            "reactions": 0
          }
        }
    } else if (id === 1){
        return {
            "id": 1, 
            "title": "A nice title 2", 
            "body": "a long body 2", 
            "tags": ["tag1", "tag2"], 
            "media": "https://url.com/image.jpg",
            "created": "2022-09-04T08:08:38.830Z",
            "updated": "2022-09-04T08:08:38.830Z",
            "_count": {
                "comments": 2,
                "reactions": 2
            }
        }
    } else return null;
}