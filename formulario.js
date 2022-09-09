let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let passowrdtwo = document.getElementById('passowrdtwo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let passowrdtwoValue = passowrdtwo.value.trim();

    
    if(usernameValue === ''){
        errorValidation(username, 'preencha esse campo')

    }
    
    else{
        successValidatio(username);
    }

    if(emailValue === ''){
        errorValidation(email, 'preencha esse campo')

    }
    
    else{
        successValidatio(email);
    }

    if(passwordValue === ''){
        errorValidation(password, 'preencha esse campo')

    }
    
    else{
        successValidatio(password);
    }

    if(passowrdtwoValue === ''){
        errorValidation(passowrdtwo, 'preencha esse campo')

    }
    else if (pass !== passowrdtwoValue){
        errorValidation(passowrdtwo , 'senhas nao confere')

    }
    else{
        successValidatio(passowrdtwo);
    }
}



function errorValidation (input , menssage){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = menssage


    formControl.className = 'form-control error'
}

function successValidatio(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}