export function updatePostFormTemplate(postData) {

    const editPostFormContent = document.createElement("div");
    editPostFormContent.innerHTML =  `
    
    <div class="form-group mb-3">
    <label for="">Title</label>
    <input type="text" name="title" class="form-control" placeholder="Title" value=${postData.title} required>
  </div>

  <div class="form-group mb-3">
    <label for="">Body</label>
    <textarea name="body" class="form-control" required>${postData?.body}</textarea>
  </div>
    `
    return editPostFormContent;


}


export function renderUpdatePostForm(postData, parent) {
    parent.append(updatePostFormTemplate(postData))
}


    // <div class="card p-2 mb-2" id=${postData.id}>
    //     <p class="text-muted">${postData.author.name}</p>
    //     <div>
    //         <h2>${postData.title}</h2>
    //         <p>${postData.body}</p>
    //         ${isAuthor ? myOwnSection : ""}
    //             <div class="d-flex text-muted pt-4">       
    //                 <p class="me-3">Likes: ${postData._count.reactions}</p>
    //                 <p>Comments: ${postData._count.comments}</p>
    //             </div>
    //     </div>