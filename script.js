const d = document;
const submitBtn = d.getElementById("submit");
const emailInput = d.getElementById("email");
const errorMsg = d.querySelector(".error-msg");  
const patternEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

console.log(errorMsg)

emailInput.addEventListener("input", e => {  
    console.log(emailInput.value);

    if(emailInput.value === "" || !patternEmail.test(emailInput.value)) {
        errorMsg.classList.add("exist")
    } else {
        errorMsg.classList.remove("exist");
    }
}) 


