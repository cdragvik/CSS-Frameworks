import { getPostsBySearch } from "../post/getPostsBySearch.mjs";

export async function setSearchFormListener() {
  const form = document.querySelector("#search");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const formData = new FormData(event.target);
      const searchObject = Object.fromEntries(formData.entries())
      const onProfile = false
      getPostsBySearch(searchObject.searchInput, onProfile)
    })
  }

  const formOnProfile = document.querySelector("#searchOnProfile");

  if (formOnProfile) {
    formOnProfile.addEventListener("submit", (event) => {
      event.preventDefault()
      const formData = new FormData(event.target);
      const searchObject = Object.fromEntries(formData.entries())
      const onProfile = true
      getPostsBySearch(searchObject.searchInput, onProfile)
    })
  }
}

setSearchFormListener()