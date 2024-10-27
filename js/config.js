

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
    const firebaseConfig = {
        apiKey: "AIzaSyBwS1qAt9U9DrbR1ewKJv89ycoxlAePLvo",
        authDomain: "airpods-7d2e7.firebaseapp.com",
        databaseURL: "https://airpods-7d2e7-default-rtdb.firebaseio.com",
        projectId: "airpods-7d2e7",
        storageBucket: "airpods-7d2e7.appspot.com",
        messagingSenderId: "562713597779",
        appId: "1:562713597779:web:24aec5726cbff384f8f3a6"
      };
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);


    //funcion que envia nuestros usuario para registrarse a firebase
    document.getElementById("submit").addEventListener('click', function (e){
        e.preventDefault();
        set(ref(db, 'user/' + document.getElementById("username").value),
            {
                username: document.getElementById("username").value,
                lastname:document.getElementById("lastname").value,
                email: document.getElementById("email").value,
                adress:document.getElementById("adress").value,
                phoneNumber: document.getElementById("phoneNumber").value,

            });
    })

 console.log("Conexión a Firebase establecida correctamente.");
