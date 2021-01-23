function isEmail(email) {
  // make sure input is string
  if (typeof email !== "string") {
    return false;
  } else {
    // make sure email is valid _@_._ (https://ui.dev/validate-email-address-javascript/)
    // because anything extra is way too much of a headache
    return /\S+@\S+\.\S+/.test(email);
  }
}

function submitEmail(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  if (isEmail(email)) {
    // send email off
  } else {
    error;
  }
}

function init() {
  document.getElementById("emailSubmitForm").onsubmit = submitEmail;
}

window.onload = init;
