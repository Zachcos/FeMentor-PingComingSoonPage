const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  onClick();
});

function onClick() {
  const emailVal = email.value;
  if (validateEmail(emailVal)) {
    form.classList.remove("error");
  } else {
    form.classList.add("error");
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}