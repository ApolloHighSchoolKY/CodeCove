firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
      var email_id = user.email;
      document.getElementById("user_greetings").innerHTML = "Welcome back, " + email_id + "!";
    }
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

//Login method
function login(){
  var userEmail = document.getElementById("emailIn").value;
  var userPassword = document.getElementById("passwordIn").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    // ...
  });
}

//Logout methods
function logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    document.getElementById("passwordIn").value = "";
  }).catch(function(error) {
    // An error happened.
    window.alert("Error : " + error.message);
  });
}

//Create an acount method
function signup(){
  var userEmail = document.getElementById("emailUp").value;
  var userPassword = document.getElementById("passwordUp").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    // ...
  });
}

//Contact
function contact(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if(document.getElementById("like").checked=true){
    var like = "I like it!"
  }else {
    var like = "I don\'t like it!"
  }

  firebase.database().ref('contact/' + name).set({
    email: email,
    message: message,
    opinion: like
  });
}
