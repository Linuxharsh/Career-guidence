import firebase from './firebase'
const auth = firebase.auth();

function signup(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('student registered successfully');
    alert('Student registered successfully');
    window.location.href = 'result.html'; // Redirect to result page after signup
  })
  .catch(error => alert(error.message));
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log('student logged in successfully');
    window.location.href = 'result.html'; // Redirect to result page after login
  })
  .catch(error => alert(error.message));
}

// Attach functions to window for onclick handlers
window.signup = signup;
window.login = login;
