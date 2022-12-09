import { setRegisterFormListener } from "./handlers/signup.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { updatePost} from "./api/posts/update.mjs"


setRegisterFormListener()
setLoginFormListener()


updatePost({
    title: "Frank er søt",
    body: "fordi han er fin", 
    id: 817, 
})

