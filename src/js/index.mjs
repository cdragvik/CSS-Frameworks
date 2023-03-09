import { signout } from "./api/auth/logout.mjs"
import * as listeners from "./handlers/index.mjs"


listeners.setRegisterFormListener()
listeners.setLoginFormListener()
listeners.setCreateFormListener()
listeners.setUpdateFormListener()
listeners.setUpdateProfileListener()
listeners.setSearchFormListener()
listeners.setDeleteFormListener()
listeners.setFilterFormListener()

signout();

// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()
// post.getPosts()




// The function below is not the right way to display the feed of posts. 

// async function testTemplates() {
//      const posts = await postMethods.getPosts();
//      const container = document.querySelector("#posts");
//      templates.renderPostTemplates(posts, container);
// }

// testTemplates()

// The function above is not the right way to display the feed of posts.

export * from "./post/index.mjs"