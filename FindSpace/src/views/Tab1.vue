<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button @click="reload()">
        reload
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  // name: 'Tab1',
  name: "Nearby",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
  },
  beforeMount() {
    console.log("hello from tab 1");
    this.helloBackend();
  },
  methods: {
    helloBackend() {
      // axios.defaults.withCredentials = true;
      return (
        axios
          // .get("http://localhost:5678/cumap")
          .get("http://localhost:5678/realtime/recommWS")
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
      );
    },
    reload() {
      window.location.reload();
    },
  },
});
</script>
