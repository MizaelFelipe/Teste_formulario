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
    let usernameValue = username.value.trin();
    let emailValue = email.value.trin();
    let passwordValue = password.value.trin();
    let passowrdtwoValue = passowrdtwo.value.trin();

    
    if(usernameValue === ''){
        errorValidation(username, 'preencha esse campo')

    }
    
    else{

    }
}

function errorValidation (input , menssage){
    const formControl = input.parentElement



    formControl.className = 'form-control error'
}