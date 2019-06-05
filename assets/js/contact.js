let fullname = "";
let contactemail = "";
let contactphone = "";
let contactmessage = "";

$("#submit").on("click", function contact(event) {
  event.preventDefault();
  fullname = $("#fullname").val().trim();
  contactemail = $("#email").val().trim();
  contactphone = $("#phone").val().trim();
  contactmessage = $("#message").val().trim();
  console.log(fullname + "," + email + "," + message)
  saveFirebase()
  clear()
  alert("Thank You! Your message has been sent!");
})

function saveFirebase () {
  database.ref("/"+fullname).set({
    name: fullname,
    email: contactemail,
    phone: contactphone,
    message: contactmessage
  });
};

function clear () {
  $("#fullname").val("");
  $("#email").val("");
  $("#message").val("");
}

var firebaseConfig = {
  apiKey: "AIzaSyCzg29-VzhASBtvHlfDD3xuwEN1BuV-VhA",
  authDomain: "profile-page-13e08.firebaseapp.com",
  databaseURL: "https://profile-page-13e08.firebaseio.com",
  projectId: "profile-page-13e08",
  storageBucket: "profile-page-13e08.appspot.com",
  messagingSenderId: "930966470683",
  appId: "1:930966470683:web:8772c6e1f716024c"
};
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database.ref("/"+fullname);

function openWindow (link) {
  window.open(link)
};
