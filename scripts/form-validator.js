
  const form = document.getElementById("contact-form");
  const alert = document.getElementById("alert");

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$/;
  const minNameLength = 2;
  const maxNameLength = 50;

  

  function validateField(element, validator, errorMessage) {
    const isValid = validator(element.type === "checkbox" ? element.checked : element.value);
    const errorElement = element.nextElementSibling;

    if (isValid) {
      element.parentElement.classList.remove("error");
      errorElement.textContent = "";
    } else {
      element.parentElement.classList.add("error");
      errorElement.textContent = errorMessage;
    }
    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const consent = form.querySelector("#consent");

    const isNameValid = validateField(
      name,
      (value) => value.length >= minNameLength && value.length <= maxNameLength,
      "Invalid Name"
    );

    const isEmailValid = validateField(
      email,
      (value) => emailRegex.test(value),
      "Invalid email address."
    );

    const isConsentValid = validateField(
      consent,
      (value) => value === true,
      "Please agree to the terms."
    );

    if (isNameValid && isEmailValid && isConsentValid) {
      submitForm({
        name: name.value,
        email: email.value,
        consent: consent.checked,
      });
    }
  }

  

  function submitForm(formData) {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted:", data);
        showAlert();
      })
      .catch((error) => console.error("Error submitting form:", error));
  }

  function showAlert() {
    alert.style.display = "block";
    setTimeout(() => {
      alert.style.display = "none";
    }, 2000);
  }

  form.addEventListener("submit", handleSubmit);