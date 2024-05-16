document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var usernameValidation = document.getElementById("usernameValidation");
    var passwordValidation = document.getElementById("passwordValidation");

    // Clear previous validation classes and messages
    usernameInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-invalid");
    usernameValidation.innerHTML = "";
    passwordValidation.innerHTML = "";

    var username = usernameInput.value;
    var password = passwordInput.value;

    if (username.length < 1 && password.length < 1) {
      usernameValidation.innerHTML += "<div>Please enter a username.</div>";
      usernameInput.classList.add("is-invalid");
      passwordValidation.innerHTML += "<div>Please enter a password.</div>";
      passwordInput.classList.add("is-invalid");
      return;
    }

    if (username.length < 1) {
      usernameValidation.innerHTML += "<div>Please enter a username.</div>";
      usernameInput.classList.add("is-invalid");
      return;
    }

    if (password.length < 1) {
      passwordValidation.innerHTML += "<div>Please enter a password.</div>";
      passwordInput.classList.add("is-invalid");
      return;
    }

    // Check length
    if (password.length < 8) {
      passwordValidation.innerHTML +=
        "<div>Password must be at least 8 characters long.</div>";
      passwordInput.classList.add("is-invalid");
      return;
    }

    // Check for uppercase letter
    if (!/[A-Z]/.test(password)) {
      passwordValidation.innerHTML +=
        "<div>Password must contain at least one uppercase letter.</div>";
      passwordInput.classList.add("is-invalid");
      return;
    }

    // Check for lowercase letter
    if (!/[a-z]/.test(password)) {
      passwordValidation.innerHTML +=
        "<div>Password must contain at least one lowercase letter.</div>";
      passwordInput.classList.add("is-invalid");
      return;
    }

    // Check for digit
    if (!/\d/.test(password)) {
      passwordValidation.innerHTML +=
        "<div>Password must contain at least one digit.</div>";
      passwordInput.classList.add("is-invalid");
      return;
    }

    // Check for special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      passwordValidation.innerHTML +=
        "<div>Password must contain at least one special character.</div>";
      passwordInput.classList.add("is-invalid");
      return;
    }

    // Simulating simple username and password check
    if (username === "admin" && password === "Admin@123") {
      // Successful login
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("role", "manufacturer");
      window.location.href = "manufacturer/system-information.html";
    } else {
      // Invalid username or password
      Swal.fire({
        text: "Invalid username or password. Please try again.",
        icon: "error",
        buttonsStyling: !1,
        confirmButtonText: "Okay",
        customClass: { confirmButton: "btn btn-primary" },
      });
    }

    // // If validation passes, proceed with form submission
    // var formData = new FormData(this);

    // fetch("form1", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.text())
    //   .then((data) => {
    //     if (data.startsWith("valid:")) {
    //       var parts = data.split(":");
    //       var username = parts[1];
    //       var role = parts[2];

    //       sessionStorage.setItem("isLoggedIn", "true");
    //       sessionStorage.setItem("username", username);
    //       sessionStorage.setItem("role", role);

    //       if (role === "admin") {
    //         window.location.href = "admin_home.html";
    //       } else {
    //         window.location.href = "user_home.html";
    //       }
    //     } else {
    //       Swal.fire({
    //         text: "Invalid username or password. Please try again.",
    //         icon: "error",
    //         buttonsStyling: !1,
    //         confirmButtonText: "Okay",
    //         customClass: { confirmButton: "btn btn-primary" },
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     Swal.fire({
    //       text: "An error occured, please try again.",
    //       icon: "error",
    //       buttonsStyling: !1,
    //       confirmButtonText: "Okay",
    //       customClass: { confirmButton: "btn btn-primary" },
    //     });
    //   });
  });
