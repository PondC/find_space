<template>
  <ion-page>
    <ion-content>
      <div id="admin_create">
        <ion-button
          class="container"
          href="/create"
          size="large"
          color="secondary"
        >
          CREATE
        </ion-button>
      </div>
      <div id="admin_modify" class="container">
        <ion-button
          class="container"
          href="/modify"
          size="large"
          color="tertiary"
        >
          MODIFY
        </ion-button>
      </div>
      <div id="admin_modify" class="container">
        <ion-button
          class="container"
          size="large"
          color="tertiary"
          @click="logOut()"
        >
          Log out
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { ellipse, square, triangle } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tabs",
  components: { IonContent, IonPage },
  setup() {
    return {
      ellipse,
      square,
      triangle,
    };
  },
  methods: {
    logOut() {
      console.log("logout complete");
      window.localStorage.removeItem("username");
      // window.localStorage.removeItem("password");
      window.localStorage.setItem("LoginPageReloaded", "no");
      window.localStorage.setItem("UserPageReloaded", "no");
      window.localStorage.setItem("NearbyPageReloaded", "no");
      window.localStorage.setItem("MainPageReloaded", "no");
      window.localStorage.clear();
      console.log("username and password forgotten");
      this.$router.push("/");
    },
  },
});
</script>

<style lang="css" scoped>
.container {
  width: 200px;
  text-align: center;
}
ion-content {
  --ion-background-color: #111d12;
}
</style>
