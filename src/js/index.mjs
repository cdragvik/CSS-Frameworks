
import * as listeners from "./handlers/index.mjs"
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";


listeners.setRegisterFormListener()
listeners.setLoginFormListener()
listeners.setCreateFormListener()
listeners.setUpdateFormListener()
listeners.setUpdateProfileListener()

// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()
// post.getPosts()


async function testTemplates() {
    const posts = await postMethods.getPosts();
    const post = posts.pop()
    const container = document.querySelector("#posts");
    templates.renderPostTemplates(posts, container);
}

testTemplates()