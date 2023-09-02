import { message } from './avisos.js'

window.onload = () => {
    var userLoggedIn = localStorage.getItem('user');
    if (!userLoggedIn) {
        window.location.replace('../../index.html');
        console.log("No user logged in");
    } else {
        console.log(`User logged in: ${userLoggedIn}`);
        message();
    }
}


function closeSession() {
    localStorage.removeItem('user');
    window.location.replace('../../index.html');
}
