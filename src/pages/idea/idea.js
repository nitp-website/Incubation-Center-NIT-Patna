import Swal from 'sweetalert2';

const IdeaJs = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

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

      errorTxtEmail.innerHTML = email.value !== "" ? "Enter a valid email address" : "Email Address can't be blank";
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
    const formData = new FormData(form);
    formData.append("access_key", "da9045aa-c37f-471c-a85d-a94d37e076aa");
    formData.append("from_name",fullName.value)
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        form.reset();
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.message || 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message || 'Something went wrong.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
};

export default IdeaJs;
