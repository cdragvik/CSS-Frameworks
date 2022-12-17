import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

export async function getPostsForProfile() {
    const container = document.querySelector("#posts");
    if (container) {
        const posts = await postMethods.getPostsForProfile();
        templates.renderPostList(posts, container);
    }
}

getPostsForProfile()