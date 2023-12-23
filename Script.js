function formOnSubmit() {
  // Reset error messages
  document.getElementById("name-validation").classList.add("hidden");
  document.getElementById("email-validation").classList.add("hidden");
  document.getElementById("number-validation").classList.add("hidden");
  document.getElementById("message-validation").classList.add("hidden");

  // Validate name
  var firstName = document.getElementById("Firstname").value.trim();
  var lastName = document.getElementById("Lastname").value.trim();
  if (firstName === "" || lastName === "") {
    document.getElementById("name-validation").classList.remove("hidden");
    return false;
  }

  // Validate email
  var email = document.getElementById("email").value.trim();
  if (email === "") {
    document.getElementById("email-validation").classList.remove("hidden");
    return false;
  }

  // Validate phone number
  var phoneNumber = document.getElementById("number").value.trim();
  if (phoneNumber === "") {
    document.getElementById("number-validation").classList.remove("hidden");
    return false;
  }

  // Validate message
  var message = document.getElementById("message").value.trim();
  if (message === "") {
    document.getElementById("message-validation").classList.remove("hidden");
    return false;
  }
}
