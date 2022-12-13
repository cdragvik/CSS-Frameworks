export function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML =  `<div class="card p-2 mb-2" id=${postData.id}>
        <p class="text-muted">${postData.name}</p>
        <div>
        <h2>${postData.title}</h2>
        <p>${postData.body}</p>
        <div class="d-flex text-muted">       
        <p class="me-3">Likes: ${postData._count.reactions}</p>
        <p>Comments: ${postData._count.comments}</p>
        </div></div>`
    return post;
}

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate))
}