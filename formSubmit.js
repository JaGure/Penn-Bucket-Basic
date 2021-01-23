// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAee8xGyT8t1CZNJUC7UmqGi4hFspPuDPk",
  authDomain: "penn-bucket.firebaseapp.com",
  projectId: "penn-bucket",
  storageBucket: "penn-bucket.appspot.com",
  messagingSenderId: "837280360161",
  appId: "1:837280360161:web:4cac4ff8517d50d7aaf9a0",
  measurementId: "G-T3KRXEQWGV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

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
    database.ref("emails/").push().set(email); // append email to list in firebase
    document.getElementById("email").value = ""; // clear input field
    alert("Success! Thanks for signing up. You'll here from us soon 😜");
  } else {
    alert("Not a valid email");
  }
}

function init() {
  document.getElementById("emailSubmitForm").onsubmit = submitEmail;
}

window.onload = init;
