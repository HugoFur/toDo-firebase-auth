import { createApp } from "vue";
import App from "./App.vue";

import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCtH_HSWiHSGdojJWdV_-44jGvJyA28-4U",
    authDomain: "vue-todo-231b9.firebaseapp.com",
    databaseURL: "https://vue-todo-231b9-default-rtdb.firebaseio.com",
    projectId: "vue-todo-231b9",
    storageBucket: "vue-todo-231b9.appspot.com",
    messagingSenderId: "1084120166573",
    appId: "1:1084120166573:web:9cf89750daac78ea719624",
    measurementId: "G-JWHLQJENX3"
};

firebase.initializeApp(firebaseConfig);

createApp(App).mount("#app");
