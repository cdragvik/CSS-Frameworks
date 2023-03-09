import { load } from "../storage/index.mjs";

function displayAvatar() {

    const profile = load("profile")

    const profileAvatarContainer = document.querySelector("#userAvatar");
    profileAvatarContainer.innerHTML = `<img src="${profile.avatar}" style="max-width:100%;"> `;
}

displayAvatar(); 