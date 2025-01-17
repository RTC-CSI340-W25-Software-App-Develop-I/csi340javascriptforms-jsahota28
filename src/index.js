const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    reason: e.target.reason.value,
    message: e.target.message.value,
  };

  renderConfirmation(formData);

});


// Create a function called renderConfirmation that takes a parameter called formData.
//- Create a heading element with the text content "Submission Confirmation".
//- Create <p> tags for each value in the form and set their text content to the corresponding data from formData.
//- Append the created elements to the section in the DOM to display the confirmation message.

const renderConfirmation = (formData) => {
    const h2 = document.createElement("h2");
    h2.textContent = "Submission Confirmation";

    const namep = document.createElement("p");
    namep.textContent =formData.name;

    const emailp = document.createElement("p");
    emailp.textContent = formData.email;

    const phonep = document.createElement("p");
    phonep.textContent = formData.phone;

    const reasonp = document.createElement("p");
    reasonp.textContent = formData.reason;

    const messagep = document.createElement("p");
    messagep.textContent = formData.message;

    const section = document.querySelector("section");
    section.innerHTML = "";
 
    section.append(h2, namep, emailp, phonep, reasonp, messagep);



};
