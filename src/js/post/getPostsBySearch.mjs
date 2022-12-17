import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

export async function getPostsBySearch(search, onProfile) {
    const container = document.querySelector("#posts");
    if (container) {
        const posts = await postMethods.getPostsBySearch(search, onProfile);
        templates.renderPostList(posts, container);
    }
}
