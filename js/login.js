document.querySelector('#basic-addon2').addEventListener('mouseup', function(){
    let typeIcon = document.querySelector('#passw_icon')
    let password_field = document.querySelector('#password_field')
    if(password_field.type == 'password'){
        password_field.type = 'text'
        typeIcon.classList = 'bi bi-eye'
    } else {
        password_field.type = 'password'
        typeIcon.classList = 'bi bi-eye-slash'
    }
})

let password = 'Cottage in Gunnislake'

document.querySelector('#submit-btn').addEventListener('mouseup', function(){
    if(document.querySelector('#password_field').value == password){
        document.cookie = "registered=true; expires=; path=/"
        window.location.replace('index.html')
    } else {
        alert("Incorrect password")
    }
})

window.addEventListener("load", function() {
    let params = (new URL(document.location)).searchParams; 
    let passwordVal = (params.get("password"));
    document.querySelector('#password_field').value = passwordVal.replaceAll('_', ' ')
})