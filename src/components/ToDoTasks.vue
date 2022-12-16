/* eslint-disable */
<template>
  <div>
    <h1>Minhas tarefas</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
    </ul>
    <input type="text" v-model="newTask" />
    <button @click="addTask">Adicionar tarefa</button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import * as gapi from "gapi-client";
import "firebase/firestore";

const googleApiConfig = {
  clientId: "",
  apiKey: "",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

export default {
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      gapi.client.init(googleApiConfig).then(() => {
        gapi.client.calendar.events
          .insert({
            calendarId: "primary",
            resource: {
              summary: this.newTask,
            },
          })
          .then(() => {
            const db = firebase.firestore();
            db.collection("tasks").add({
              name: this.newTask,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            this.newTask = "";
          });
      });
    },
  },
  mounted() {
    const db = firebase.firestore();
    db.collection("tasks")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        this.tasks = [];
        snapshot.forEach((doc) => {
          this.tasks.push({
            id: doc.id,
            name: doc.data().name,
          });
        });
      });
  },
};
</script>
