import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

export async function getPostsByFilter() {
    const container = document.querySelector("#posts");

    // find out if filtered is Yes

    if (container) {
        const posts = await postMethods.getPostsWithMedia();
        templates.renderPostList(posts, container);
    }
}

getPostsByFilter()