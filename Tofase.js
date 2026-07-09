console.log("Tofase.js loaded");
let birthDateInput = document.getElementById("birthDate");
let Button = document.getElementById("calculateAge");
let resultParagraph = document.getElementById("result");
Button.addEventListener("click", function() {
    console.log("Calculate Age button clicked");

    let birthDate = new Date(birthDateInput.value);
    if (birthDate === "") {
        resultParagraph.textContent = "Please enter a valid birth date.";
        return;
    }
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    resultParagraph.textContent = `Your age is: ${age} years`;
});