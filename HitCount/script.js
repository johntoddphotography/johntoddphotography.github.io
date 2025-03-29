const firebaseConfig = {
    apiKey: "AIzaSyDNpRCVtZf1P9tc-T6FNAQKm0jKOMLpPYc",
    authDomain: "jtwebcounter.firebaseapp.com",
    projectId: "jtwebcounter",
    storageBucket: "jtwebcounter.firebasestorage.app",
    messagingSenderId: "185612864879",
    appId: "1:185612864879:web:7285942608fbcefc4aac9a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const hitCounter = document.getElementById("hit-counter");
hitCounter.style.display = "none";

const db = firebase.database().ref("totalHits");
db.on("value", (snapshot) => {
  hitCounter.textContent = snapshot.val();
});

const userCookieName = "returningVisitor";
checkUserCookie(userCookieName);
function checkUserCookie(userCookieName) {
  const regEx = new RegExp(userCookieName, "g");
  const cookieExists = document.cookie.match(regEx);
  if (cookieExists != null) {
    hitCounter.style.display = "inline-block";
  } else {
    createUserCookie(userCookieName);
    db.transaction(
      (totalHits) => totalHits + 1,
      (error) => {
        if (error) {
          console.log(error);
        } else {
          hitCounter.style.display = "inline-block";
        }
      }
    );
  }
}

function createUserCookie(userCookieName) {
  const userCookieValue = "Yes";
  const userCookieDays = 7;
  let expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + userCookieDays);
  document.cookie =
    userCookieName +
    "=" +
    userCookieValue +
    "; expires=" +
    expiryDate.toGMTString() +
    "path=/";
}
