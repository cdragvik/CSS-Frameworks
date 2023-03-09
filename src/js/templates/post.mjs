import { load } from "../storage/index.mjs";

export function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post");


    const loader = document.querySelector(".loader");
    loader.style.display ="none";

    const {email} = load("profile")
    const isAuthor = postData.author.email === email
    const myOwnSection = `
        <a href="/post/edit/index.html?id=${postData.id}"<button class="btn btn-light">Update post</button></a>`

    const image = `<img src=${postData?.media} class="img-fluid"/>`

    post.innerHTML =  `<div class="card p-2 mb-2" id=${postData.id}>
        <p class="text-muted">${postData.author.name}</p>
        <div>
            <h2>${postData.title}</h2>
            <p>${postData.body}</p>
            ${postData.media ? image : ""}
            <a href="/post/index.html?id=${postData.id}"<button class="btn btn-light">Read more</button></a>
            ${isAuthor ? myOwnSection : ""}
                <div class="d-flex text-muted pt-4">       
                    <p class="me-3">Likes: ${postData._count.reactions}</p>
                    <p>Comments: ${postData._count.comments}</p>
                </div>
        </div>`
    return post;
}


export function singlePostTemplate(postData) {

    const loader = document.querySelector(".loader");
    loader.style.display ="none";

    const {email} = load("profile")
    const isAuthor = postData.author.email === email
    const myOwnSection = `
        <a href="/post/edit/index.html?id=${postData.id}"<button class="btn btn-light">Update post</button></a>`

    const image = `<img src=${postData?.media} class="img-fluid"/>`

    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML =  `<div class="card p-2 mb-2" id=${postData.id}>
        <p class="text-muted">${postData.author.name}</p>
        <div>
            <h2>${postData.title}</h2>
            <p>${postData.body}</p>
            ${postData.media ? image : ""}
            ${isAuthor ? myOwnSection : ""}
                <div class="d-flex text-muted pt-4">       
                    <p class="me-3">Likes: ${postData._count.reactions}</p>
                    <p>Comments: ${postData._count.comments}</p>
                </div>
        </div>`
    return post;
}


export function renderPostList(postDataList, parent) {
    parent.innerHTML = ""
    postDataList.map(data => {
        parent.append(postTemplate(data))
    })
}


export function renderSinglePost(postData, parent) {
    parent.append(singlePostTemplate(postData))
}