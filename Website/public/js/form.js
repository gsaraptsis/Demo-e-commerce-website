const loader = document.querySelector('.loader');

// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const terms = document.querySelector('#terms');

submitBtn.addEventListener('click', () => {
    if(username.value.length < 3){
        showAlert('το όνομα πρέπει να είναι τουλάχιστον 3 χαρακτήρες');
    } else if(!email.value.length){
        showAlert('δώστε το email');
    } else if(password.value.length < 8){
        showAlert('ο κωδικός πρέπει να είναι τουλάχιστον 8 χαρακτήρες');
    } else if(!terms.checked){
        showAlert('πρέπει να αποδεχτείτε τους όρους χρήσης');
    } else{
        // submit form
        loader.style.display = 'block';
        sendData('/signup', {
            username: username.value,
            email: email.value,
            password: password.value,
            terms: terms.checked
        })
    }
})

// send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    }
}

// alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}