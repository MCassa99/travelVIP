let validusr = 'mcassa1999@gmail.com';
let validpass = '1234';

document.getElementById('validate').style.display = 'none';

function validateUSR_PASS() {
    let username = document.getElementById("usr").value;
    let password = document.getElementById("pass").value;
    if (username != validusr) {
        document.getElementById('validate').style.display = 'block'
        return false;
    } else if (password != validpass) {
        document.getElementById('validate').style.display = 'block'
        return false;
    } else {
        localStorage.setItem("user", username);
        localStorage.setItem("pass", password);
        console.log(`User logged in: ${username}`);
        window.location.replace('../../pages/dashboard.html');
        
    }
}
