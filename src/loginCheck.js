const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks =document.querySelectorAll('.logged-out')


export const loginCheck = user =>{
    if (user) {
        loggedOutLinks.forEach(links => links.style.display='none')
    } else {

    }
}