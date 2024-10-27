

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
    const firebaseConfig = {
        apiKey: "AIzaSyBwS1qAt9U9DrbR1ewKJv89ycoxlAePLvo",
        authDomain: "airpods-7d2e7.firebaseapp.com",
        projectId: "airpods-7d2e7",
        storageBucket: "airpods-7d2e7.appspot.com",
        messagingSenderId: "562713597779",
        appId: "1:562713597779:web:f20d8fce3061c520f8f3a6"
    };
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);


    //funcion que envia nuestros usuario para registrarse a firebase
    document.getElementById("submit").addEventListener('click', function (e){
        e.preventDefault();
        set(ref(db, 'user/' + document.getElementById("username").value),
            {
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
            });
    })



      //funcion que envia nuestros usuario para iniciar sesion  a firebase 
    document.getElementById("sign-up").addEventListener('click', function (e){
        e.preventDefault();
        set(ref(db, 'user/' + document.getElementById("username").value),
            {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
            });
    })

 console.log("Conexión a Firebase establecida correctamente.");


 //inicio de sesion
