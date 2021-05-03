<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
  ,methods: {
    getBackendURL() {
      // const burl = "http://192.168.1.40:5678";
      const burl = "http://localhost:5678";
      return burl;
    }
  }
});
</script>