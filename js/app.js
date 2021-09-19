const firebaseConfig = {
    apiKey: "AIzaSyB3Mx-lA8gqE_m5zGm63qtIYx7umbBmLuQ",
    authDomain: "game-82ca5.firebaseapp.com",
    projectId: "game-82ca5",
    storageBucket: "game-82ca5.appspot.com",
    messagingSenderId: "915325250593",
    appId: "1:915325250593:web:1602a4cb7bfc53d737c760",
    measurementId: "G-K898WELZZC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const firestore = firebase.firestore();


const signup=()=> {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("conf signup")
     location.href="../index.html"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });

}
const login=()=> {
    //get login page data
    let Lemail = document.getElementById("Lemail").value;
    let Lpassword = document.getElementById("Lpassword").value;
firebase.auth().signInWithEmailAndPassword(Lemail, Lpassword)
  .then((userCredential) => {
   
    var user = userCredential.user;
    console.log("login sucessfully")
    location.href="./HTML/level.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}

//add user data
auth.onAuthStateChanged((user) => {
  if (user) {
      firestore.collection('users').doc(user.uid).set({
          email: user.email,
          lastLoggedInAt: new Date()
      })
          .then(() => {
              console.log("Document written");
          })
          .catch((error) => {
              console.error("Error adding document: ", error);
          });
      
  }
});



const logout=()=>{
    firebase.auth().signOut()
    .then(()=>{
        location.href="../index.html"
    }

    )
}




let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon1" ){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "pop";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
    
   
  
    
});


function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 8){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
        
    }
   
};


// function setColor(btn, color){
//   var count=1;
//   var property = document.getElementById(btn);
//   var hello = document.getElementById('baloons');
//   if (count == 0){
//       property.style.backgroundColor = "#FFFFFF"
//       count=1;        
//   }
//   else{
//       property.style.backgroundColor = "#7FFF00"
//       count=0;
//   }

// }



let next =()=>{
  location.href="level1.html";
}


