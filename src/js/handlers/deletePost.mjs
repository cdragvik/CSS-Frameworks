import { removePost } from "../api/posts/delete.mjs";
import { getPostById } from "../api/posts/read.mjs";
import { load } from "../storage/index.mjs";

export async function setDeleteFormListener() {
  const form = document.querySelector("#deletePost");
  const submitButton = document.querySelector("#submitDelete")

  const post = await getPostById();
  const currentUser = load("profile")

  if(post.author.email !== currentUser.email) {
    submitButton.classList.add("disabled")
}
  
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()

      removePost(post.id)
      
      // Send it to the API
      // createPost(post)
      
    })
  }
}