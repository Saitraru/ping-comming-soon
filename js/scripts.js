let inputEmail = document.getElementById("email");
let MyButton = document.getElementById("button");

MyButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateEmail(inputEmail.value);
});

function validateEmail(email) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (expReg.test(email) == true){
        inputEmail.style.border = '1px solid var(--Blue)';
        error.style.visibility = 'hidden';
        inputEmail.value = ''; // Como no hay backend con esto simulo el envio de la info y dejo el form listo para recibir nueva data.
    }else{
        inputEmail.style.border = '1px solid var(--Light_Red)';
        error.style.visibility = 'visible';
    }
}