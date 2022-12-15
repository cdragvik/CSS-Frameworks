import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

async function getPostById() {
    const container = document.querySelector("#post");
    if (container) {
        const post = await postMethods.getPostById();
        templates.renderSinglePost(post, container);
    }
}

getPostById()