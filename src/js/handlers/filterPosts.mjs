import * as storage from "../storage/index.mjs"

export async function setFilterFormListener() {
  const filter = document.querySelector("#filterByMediaForm");
  const dontFilter = document.querySelector("#dontFilterByMediaForm");

  if (filter) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      storage.save("filterByMedia", true)
        
      
    })
  }

  if (dontFilter) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      storage.save("filterByMedia", false)
        
      
    })
  }
}