<template>
  <div id="app">
    <header>
      <h1>Lista de tarefas</h1>
      <nav>
        <button @click="login">Login com o Google</button>
      </nav>
    </header>
    <main>
      <ToDoTasks />
    </main>
    <router-view />
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import ToDoTasks from "./components/ToDoTasks.vue";

export default {
  components: ToDoTasks,
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
  },
};
</script>
