<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> will be profile management </ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      
    </ion-content> -->
    <div class="mainDiv" v-if="authorize">
      hello
      <div>Your username: {{ userName }}</div>
      <div>Your password: {{ passWord }}</div>
      <div>Your Latitude: {{ location.lat }}</div>
      <div>Your Longtitude: {{ location.long }}</div>
      <div v-if="isAlive">I'm Alive!</div>
      <div>
        <ion-button @click="logOut()">
          Log out and forget
        </ion-button>
      </div>
    </div>
    <ion-button @click="toggle()">
      toggle
    </ion-button>
    <ion-button @click="reload()">
      reload
    </ion-button>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  // IonContent,
  IonButton,
} from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
// import { Geolocation } from "@ionic-native/geolocation/ngx";

export default defineComponent({
  name: "Tab3",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    // IonContent,
    IonPage,
    IonButton,
  },
  beforeMount() {
    // mounted() {
    console.log("hello before mount page 3!");
    const tempUserName = window.localStorage.getItem("username");
    const tempPassWord = window.localStorage.getItem("password");
    if (tempUserName && tempPassWord) {
      console.log("have information");
      this.authorize = true;
      this.userName = tempUserName;
      this.passWord = tempPassWord;
      if (window.localStorage.getItem("UserPageReloaded") === "no") {
        window.localStorage.setItem("UserPageReloaded", "yes");
        window.location.reload();
      }
      this.watchLocation();
    } else {
      console.log("no data!");
      this.authorize = false;
      this.$router.push("/");
    }
  },
  data() {
    return {
      userName: "",
      passWord: "",
      authorize: false,
      isAlive: false,
      location: {
        lat: 0,
        long: 0,
      },
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    watchLocation() {
      // let watch = this.geo.watchPosition();
      const geo = navigator.geolocation;
      geo.watchPosition((res) => {
        console.log("watching location....");
        console.log(res);
        this.updateLocation(res);
      });
    },
    updateLocation(data: any) {
      // console.log("updatingText");
      this.isAlive = !this.isAlive;
      this.location.lat = data.coords.latitude;
      this.location.long = data.coords.longitude;
    },
    logOut() {
      console.log("logout complete");
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("password");
      window.localStorage.setItem("LoginPageReloaded", "no");
      window.localStorage.setItem("UserPageReloaded", "no");
      window.localStorage.setItem("NearbyPageReloaded", "no");
      window.localStorage.setItem("MainPageReloaded", "no");
      console.log("username and password forgotten");
      this.$router.push("/");
    },
    toggle() {
      this.authorize = !this.authorize;
    },
    reload() {
      window.location.reload();
    },
  },
});
</script>
<style lang="css" scoped>
.mainDiv {
  background-color: white;
  color: black;
}
</style>
