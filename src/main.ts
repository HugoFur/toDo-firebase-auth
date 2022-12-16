import { createApp } from "vue";
import App from "./App.vue";

import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    //suas configs
};

firebase.initializeApp(firebaseConfig);

createApp(App).mount("#app");
