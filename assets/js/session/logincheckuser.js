$(document).ready(function () {
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    window.location.href = "index.html";
  }
  var role = sessionStorage.getItem("role");

  if (role !== "general") {
    window.location.href = "index.html";
    window.history.pushState({}, "", "index.html");
  }
});
