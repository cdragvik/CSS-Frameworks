export function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML =  `<div class="card p-2 mb-2" id=${postData.id}>
        <p class="text-muted">${postData.name}</p>
        <div>
            <h2>${postData.title}</h2>
            <p>${postData.body}</p>
            <a href="/post/index.html?id=${postData.id}"<button class="btn btn-light">Read more</button></a>
                <div class="d-flex text-muted pt-4">       
                    <p class="me-3">Likes: ${postData._count.reactions}</p>
                    <p>Comments: ${postData._count.comments}</p>
                </div>
        </div>`
    return post;
}


export function renderPostList(postDataList, parent) {
    postDataList.map(data => parent.append(postTemplate(data))) 
}


export function renderSinglePost(postData, parent) {
    parent.append(postTemplate(postData))
}