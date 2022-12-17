import { createPost } from "../api/posts/index.mjs";
import { getAllPosts } from "../post/getAllPosts.mjs";

export async function setCreateFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries())
      
      // Send it to the API
      createPost(post)
      await getAllPosts()
      
    })
  }
}