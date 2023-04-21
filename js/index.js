import { getUser } from "./services/user.js"
import { getRepos } from "./services/repos.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

let getError =  document.getElementById('error')

document.getElementById('btn').addEventListener('click', () => {
    const userName = document.getElementById('input').value
    if(userName.length === 0) {
        getError.style.display = 'block'
        return
    } else {
        getUserData(userName)
        getError.style.display = 'none'
        return
    }
})

document.getElementById('input').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if(userName.length === 0) {
            getError.style.display = 'block'
            return
        } else {
            getUserData(userName)
            getError.style.display = 'none'
            return
        }
    }
})


async function getUserData(userName) {

    const userResponse = await getUser(userName)

    console.log(userResponse);

    if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }

    const reposResponse = await getRepos(userName)

    user.setInfo(userResponse)
    user.setRepos(reposResponse)

    screen.renderUser(user)
}