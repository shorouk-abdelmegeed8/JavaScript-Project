var signUpButton = document.getElementById('signUp');
var signInButton = document.getElementById('signIn');
var container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

/////////////////////////////////////

// var nameInput=document.getElementById("nameValid");
// var email=document.getElementById("emailValid");


    


// nameInput.addEventListener('keyup', function (e) {
//     if(nameInput.value.length <=4 ){
        
//         nameInput.style.border="2px solid red"
//         span1.style.display="block"


//     }else{
//         nameInput.style.border="2px solid green"
//         span1.style.display="none"

//     }
// })



// email.addEventListener('keyup', function(e){
//     if(e.target.value.length <=5){
//         email.style.border="2px solid red"
//         span2.style.display="block"


//     }else{
//         email.style.border="2px solid green"
//         span2.style.display="none"

//     }
// })



var username = document.getElementById('username');
    var password = document.getElementById('password');
    var email = document.getElementById('email');
    var error = document.getElementById('error');

    function isValid(u,e, p){
        var valid = true
        if(! /^([a-zA-Z0-9]{5,15})$/.test(username.value)){
            valid = false
        }
        if(! /^([a-zA-Z0-9]{5,15})$/.test(password.value)){
            valid = false
        }
        if(! /^[a-zA-Z]+@[a-zA-Z0-9]+.com$/.test(email.value)){
            valid = false
        }
        return valid
    }

    function logIn(event){
        if(isValid(username.value , email.value,password.value)){
            event.preventDefault()
            error.innerHTML = "Request Submitted Successfully!"
            error.style.color = "green"
            username.value = ""
            password.value = ""
            email.value = ""
        } else {
            event.preventDefault()
            error.innerHTML = "invalid Username and Password , Please!"
            error.style.color = "red"
        }

    }