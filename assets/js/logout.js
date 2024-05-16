function logout() {
  sessionStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("role");
  window.location.href = "../index.html";
}

$(document).on("click", "#logoutButton", function (e) {
  e.preventDefault();
  Swal.fire({
    title: "Are you sure?",
    text: "Sign out from portal..",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Signed Out!",
        text: "You are successfully signed out.",
        icon: "success",
      });

      logout();
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire({
        title: "Cancelled",
        text: "You are not signed out.",
        icon: "error",
      });
    }
  });
});
