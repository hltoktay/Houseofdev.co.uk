// Initialize Firebase
var config = {
    apiKey: "AIzaSyDw_kiHIO_TXSU5PVSVHlCnLAyYKzYzzJc",
    authDomain: "houseofdev-76a14.firebaseapp.com",
    databaseURL: "https://houseofdev-76a14.firebaseio.com",
    projectId: "houseofdev-76a14",
    storageBucket: "houseofdev-76a14.appspot.com",
    messagingSenderId: "858428998052"
  };
  firebase.initializeApp(config);

// Referance messages collection
var messageRef = firebase.database().ref('messages');

// Listen for form submit

document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
    e.preventDefault();

   // Get values
   var name = getInputVal('name');
   var email = getInputVal('email');
   var subject = getInputVal('subject');
   var message = getInputVal('message');

   //Save Message
   saveMessage(name, email, subject, message);

   // Show Alert
   document.querySelector('#sendmessage').style.display = 'block';

   // Hide alert after 3 seconds
   setTimeout(function() {
    document.querySelector('#sendmessage').style.display = 'none';
   }, 3000);

   // Clear Form 
   document.getElementById('contact-form').reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
}