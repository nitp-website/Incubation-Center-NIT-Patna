import Swal from 'sweetalert2';

const IdeaJs = async (e) => {
  e.preventDefault();

  const form = document.querySelector("form");
  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  function checkInputs() {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
      if (item.value === "") {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }

      item.addEventListener("keyup", () => {
        if (item.value !== "") {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        } else {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
      });
    });

    if (email.value !== "") {
      checkEmail();
    }

    email.addEventListener("keyup", checkEmail);
  }

  function checkEmail() {
    const emailRegix = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegix)) {
      email.classList.add("error");
      email.parentElement.classList.add("error");

      errorTxtEmail.innerHTML =
        email.value !== ""
          ? "Enter a valid email address"
          : "Email Address can't be blank";
    } else {
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
    }
  }

  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !message.classList.contains("error")
  ) {

    const ideaPayload = {
      name: fullName.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
      phone: phone.value,
    };

    try {

      await fetch("http://localhost:5000/api/ideaMail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ideaPayload)
      });

      const formData = new FormData(form);
      formData.append("access_key", "your-key");

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      Swal.fire({
        title: 'Success!',
        text: 'Idea submitted successfully!',
        icon: 'success'
      });

      form.reset();

    } catch (error) {
      console.error(error);

      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Something went wrong.',
        icon: 'error'
      });
    }
  }
};

export default IdeaJs;