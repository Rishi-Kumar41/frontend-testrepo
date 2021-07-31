const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginErrorMsgNoUser = document.getElementById("login-error-msg-no-user");
const loginErrorMsgNoPassword = document.getElementById("login-error-msg-no-password");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ris" && password === "allow") {
        loginErrorMsgNoUser.style.opacity = 0;
        loginErrorMsg.style.opacity = 0;
        loginErrorMsgNoPassword.style.opacity=0;
        setTimeout(function(){ alert("You have successfully logged in."); }, 05);
       
        location.reload();
    }
    else if(username==="") 
    {
        loginErrorMsgNoUser.style.opacity = 1;
        loginErrorMsg.style.opacity = 0;
        loginErrorMsgNoPassword.style.opacity=0;
    }
    else if(password==="")
    {
        loginErrorMsgNoUser.style.opacity = 0;
        loginErrorMsg.style.opacity = 0;
        loginErrorMsgNoPassword.style.opacity=1;
    }
    else {
        loginErrorMsgNoUser.style.opacity = 0;
        loginErrorMsg.style.opacity = 1;
        loginErrorMsgNoPassword.style.opacity=0;
    }
})