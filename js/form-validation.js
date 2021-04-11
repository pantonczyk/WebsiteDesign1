const form = document.querySelector("form");
const inputFName = form.querySelector("input[id=fname]");
const inputLName = form.querySelector("input[id=lname]");
const inputEmail = form.querySelector("input[id=email]");
const inputSubject = form.querySelector("textarea[id=subject]");
const formMessage = form.querySelector(".form-message");

form.addEventListener("submit", e => {
    e.preventDefault();

    let formErrors = [];

    
    if (inputFName.value.length <= 3) {
        formErrors.push("Wypełnij poprawnie pole z imieniem");
    }
    if (inputLName.value.length <= 3) {
        formErrors.push("Wypełnij poprawnie pole z nazwiskiem");
    }

    const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    if (!reg.test(inputEmail.value)) {
        formErrors.push("Wypełnij poprawnie pole z emailem");
    }
    if (inputSubject.value.length <= 3) {
        formErrors.push("Wypełnij poprawnie pole z treścią");
    }
    if (!formErrors.length) { 
        e.target.submit();
        
    } else {
        
        formMessage.innerHTML = `
        <h3 class="form-error-title">Przed wysłaniem proszę poprawić błędy:</h3>
        <ul class="form-error-list">
            ${formErrors.map(el => `<li style="list-style-type: none;">${el}</li>`).join("")}
        </ul>
        `;
    }
});