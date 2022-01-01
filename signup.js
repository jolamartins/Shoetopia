const password = document.getElementById('password')
const form = document.getElementById('form')
const error = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if (password.value.length <= 5) {
        messages.push('Password must be longer than 5 characters!')
        
    }
    if (password.value.length >= 10) {
        messages.push('Password must be less than 10 characters!')
    }
    if (messages.length > 0 ) {
        e.preventDefault()
        error.innerText = messages.join(', ')
    }
})

function openForm() {
    document.getElementById("signin").style.display = "block";
}

function closeForm() {
    document.getElementById("signin").style.display = "none";
}

var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("form").style.display = "block";
}