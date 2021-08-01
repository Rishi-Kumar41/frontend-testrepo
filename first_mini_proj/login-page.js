const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
// const loginErrorMsgNoUser = document.getElementById("login-error-msg-no-user");
// const loginErrorMsgNoPassword = document.getElementById("login-error-msg-no-password");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ris" && password === "allow") {
        // loginErrorMsgNoUser.style.opacity = 0;
        loginErrorMsg.style.opacity = 0;
        // loginErrorMsgNoPassword.style.opacity=0;
       
        alert("You have successfully logged in.");
        // location.reload();
        // window.location.href = "Resume.html";
        setTimeout(window.location.href = "Resume.html", 100);
    }
    else if(username==="") 
    {
        document.getElementById("login-error-msg").innerHTML = "Please enter username";
        // loginErrorMsgNoUser.style.opacity = 1;
        loginErrorMsg.style.opacity = 1;
        // loginErrorMsgNoPassword.style.opacity=0;
    }
    else if(password==="")
    {
        document.getElementById("login-error-msg").innerHTML = "Please enter password";
        // loginErrorMsgNoUser.style.opacity = 0;
        loginErrorMsg.style.opacity = 1;
        // loginErrorMsgNoPassword.style.opacity=1;
    }
    else {
        document.getElementById("login-error-msg").innerHTML = "Invalid username and/or password";
        // loginErrorMsgNoUser.style.opacity = 0;
        loginErrorMsg.style.opacity = 1;
        // loginErrorMsgNoPassword.style.opacity=0;
    }

})

function myFunction()
{
    loginErrorMsg.style.opacity = 0;
}