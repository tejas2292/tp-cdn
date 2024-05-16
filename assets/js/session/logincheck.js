$(document).ready(function () {
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    window.location.href = "index.html";
  }
  var role = sessionStorage.getItem("role");

  if (role !== "admin") {
    window.location.href = "index.html";
    window.history.pushState({}, "", "index.html");
  }
});
