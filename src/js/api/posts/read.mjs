import { BASE_URL } from "../constants.mjs"; 
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/posts";
const include_author = "_author=true"
const include_engagement  = "_comments=true&_reactions=true"


export async function getPosts() {
        
    const getPostURL = `${BASE_URL}${action}?${include_author}`;
        
    const response = await authFetch (getPostURL)
    
    return await response.json(); 
}


export async function getPostById() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);    
    const id = params.get("id");

    if (!id) {
        throw new Error("Get requires a postID");
    }
        
    const getPostURL = `${BASE_URL}${action}/${id}?${include_author}&${include_engagement}`;
        
    const response = await authFetch (getPostURL)
    
    return await response.json(); 
}

export async function getPostsForProfile() {

    const getPostURL = `${BASE_URL}${action}?${include_author}`;
        
    const response = await authFetch (getPostURL)

    const result = await response.json();

    const profile = load("profile")

    const email = profile.email

    const filtered = result.filter(post => post.author.email === email)
    
    return filtered;
}


export async function getPostsBySearch(search, onProfile) {

    const getPostURL = `${BASE_URL}${action}?${include_author}`;
        
    const response = await authFetch (getPostURL)

    const result = await response.json();

    const lowerCasedSearch = search.toLowerCase()

    let filtered = result.filter(post => 
         post.author.email.toLowerCase().includes(lowerCasedSearch) 
         || post.author.name.toLowerCase().includes(lowerCasedSearch)
         || post.body?.toLowerCase().includes(lowerCasedSearch)
         || post.title.toLowerCase().includes(lowerCasedSearch)
         || post.tags?.map(tag => tag.toLowerCase()).includes(lowerCasedSearch)
    )

    if (onProfile) {
        const {email} = load("profile")
        filtered = filtered.filter(post => post.author.email.includes(email) )
    }
    
    return filtered;
}