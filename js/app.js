const form = document.querySelector(".main-ping__form");
const button = document.querySelector(".form-ping__button");
const errorMessage = document.querySelector(".form-ping__error-text");
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


button.addEventListener('click', validation);

function validation(e) {
    e.preventDefault();

    let txtEmail = form.querySelector("#email");

    txtEmail = validateEmail(txtEmail);

    if(txtEmail)
        form.reset();
}

function validateEmail(element) {
    
    if(element.value === "") {
        element.classList.add('form-ping__input-error');
        errorMessage.classList.add('form-ping__error-text--show');
        errorMessage.textContent = "Whoops! It looks like you forgot to add your email";
        return false;
    }
    else if(!regexEmail.exec(element.value)) {
        element.classList.add('form-ping__input-error');
        errorMessage.classList.add('form-ping__error-text--show');
        errorMessage.textContent = "Please provide a valid email address";
        return false;
    } else {
        element.classList.remove('form-ping__input-error');
        errorMessage.classList.remove('form-ping__error-text--show');
        return true;
    }
}