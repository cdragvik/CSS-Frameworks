import { setRegisterFormListener } from "./handlers/signup.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { createPost} from "./api/posts/create.mjs"


setRegisterFormListener()
setLoginFormListener()


createPost({
    title: "an example",
    body: "also an example"
})

