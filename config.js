import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA14ODPl7YwCZf8_s8bFImtYKWazmfUkhM",
  authDomain: "fireblogsyt-96c29.firebaseapp.com",
  databaseURL: "https://fireblogsyt-96c29-default-rtdb.firebaseio.com",
  projectId: "fireblogsyt-96c29",
  storageBucket: "fireblogsyt-96c29.appspot.com",
  messagingSenderId: "694313777079",
  appId: "1:694313777079:web:618f40bf0e19a2464d5a32",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
