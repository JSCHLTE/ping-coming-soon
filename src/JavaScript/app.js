function validate(){
    const input = document.querySelector('#form');
    const email = document.querySelector('#email').value;
    const appendError = document.querySelector('#appendError');
    const validation = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email == ''){
        appendError.textContent = ``;
        appendError.style.color = `#ff0000`;
    }

    if(email.match(validation)){
        appendError.textContent = `Your email address is valid!`;
        appendError.style.color = `#00ff00`;
        return;
    } else {
        appendError.textContent = `Your email address is invalid!`;
        appendError.style.color = `#ff0000`;
        return;
    }
}