import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

export async function getAllPosts() {
    const container = document.querySelector("#posts");
    console.log("container")
    if (container) {
        const posts = await postMethods.getPosts();
        templates.renderPostList(posts, container);
    }
}

getAllPosts()