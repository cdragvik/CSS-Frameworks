import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

export async function showEditPostForm() {
    const container = document.querySelector("#editPostForm");
    if (container) {

        const post = await postMethods.getPostById();
        templates.renderUpdatePostForm(post, container);
    }
}

showEditPostForm()