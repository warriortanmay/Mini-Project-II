

//------- ------FIREBASE CONFIG-- - ------//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
const firebaseConfig = {

    apiKey: "AIzaSyC0_84lWmFCV8G3Up6T4-LdMBqO0y7ni50",
    authDomain: "mini-project-ii-e8bef.firebaseapp.com",
    databaseURL: "https://mini-project-ii-e8bef-default-rtdb.firebaseio.com",
    projectId: "mini-project-ii-e8bef",
    storageBucket: "mini-project-ii-e8bef.appspot.com",
    messagingSenderId: "349817714639",
    appId: "1:349817714639:web:7fdedf6694ad5ec2f8c4ba"
  };



  const app = initializeApp(firebaseConfig);
  import { getDatabase, ref, set, child, get }
    from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

const db = getDatabase();

//-- --variables-//
const username = document.getElementById('userInp');
const pass = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');
// alert(username.value+"dfjknsdkfsndlfkjsd");


//-- --Authenticate-- --//
function AuthenticateUser() {
    const dbRef = ref(db);
    get(child(dbRef, "UsersList/" + username.value)).then((snapshot)=>{
        if (snapshot.exists()) {
            let dpass = snapshot.val().password;
            if (dpass === pass.value) {
                login(snapshot.val());
            }
            else {
                alert("username or password is invalid");
            }
        }
        else {
            alert("user does not exist");
        }
    });
}

// if(sessionStorage.getItem('user')!=null){
//     user=JSON.parse(sessionStorage.getItem('user'));
//     dp();
//   }

  //stop user from using website if not logged in
//   var a=document.getElementsByTagName("a");
//   a=Array.from(a);
//   a.forEach(element => {
//    element.addEventListener('click',check); 
//   });

//   function check(e){
//     if(sessionStorage.getItem('user')==null){
//         alert('Please login to continue');
//         e.preventDefault();
//     }
// }


//-- -LOGIN-1/1
function login(user) {
    let keepLoggedIn = document.getElementById('customSwitch1').checked;
    if (!keepLoggedIn) {
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location = "./index.html";
        I
    }
    else {
        localStorage.setItem('keepLoggedIn', 'yes');
        localStorage.setItem('user', JSON.stringify(user));
        window.location = "./index.html";
    }
}

submit.addEventListener('click', AuthenticateUser);