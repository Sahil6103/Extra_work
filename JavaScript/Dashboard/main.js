document.addEventListener("DOMContentLoaded", function () {
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let btn = document.querySelector("#signin-btn");
  let error = document.querySelector(".error");
  let form = document.querySelector("form");

  if (btn) {
    btn.addEventListener("click", (e) => {
      if (checkEmail() == false || checkPassword() == false) {
        e.preventDefault();
      } else {
        form.action = "dashboard.html";
      }
    });
  }

  function checkEmail() {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.value == "") {
      error.innerHTML = `<div class="alert alert-danger" role="alert">
              Enter Email!
          </div>`;
      email.focus();
      return false;
    } else {
      if (emailRegex.test(email.value) == false) {
        error.innerHTML = `<div class="alert alert-danger" role="alert">
                  Enter valid Email!
              </div>`;
        email.focus();
        return false;
      }
    }
    return true;
  }

  function checkPassword() {
    let passwordRegex = /^[a-zA-Z0-9]{6,16}$/;

    if (password.value == "") {
      error.innerHTML = `<div class="alert alert-danger" role="alert">
              Enter Password
          </div>`;
      password.focus();
      return false;
    } else {
      if (!passwordRegex.test(password.value)) {
        error.innerHTML = `<div class="alert alert-danger" role="alert">
              Enter valid Password!
          </div>`;
        password.focus();
        return false;
      }
    }
    return true;
  }

  let toggleButton = document.getElementById("toggleButton");
  let mainContainer = document.querySelector("main");

  if (toggleButton && mainContainer) {
    toggleButton.addEventListener("click", function () {
      mainContainer.classList.toggle("sidebar-hidden");
    });
  }

  let logout = document.querySelector(".logout");

  if (logout) {
    logout.addEventListener("click", () => {
      if (confirm("Are You Sure? You want to Logout?") === true) {
        window.location.href = "signin.html";
      }
    });
  }
});
