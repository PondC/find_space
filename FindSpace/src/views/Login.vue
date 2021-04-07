<template>
  <ion-page>
    <!-- <img src="@/assets/img/LoginImg.jpg" /> -->
    <img class="back_picture" :src="require('@/assets/img/LoginImg.jpg')" />
    <div class="login_div">
      <img class="mainIcon" :src="require('@/assets/icon/FindSpaceIcon.png')" />
      <div class="greenBar"></div>
      <div class="login_card" v-if="showPanel">
        Welcome Back
        <div>
          <form @submit.prevent="onSubmit">
            <ion-label> UserName </ion-label>
            <ion-input
              :value="userName"
              @input="userName = $event.target.value"
              placeholder="Username"
              name="userName"
            ></ion-input>
            <ion-label> Password </ion-label>
            <ion-input
              :value="passWord"
              @input="passWord = $event.target.value"
              placeholder="Password"
              name="passWord"
            ></ion-input>
            <!-- <ion-button @click="() => router.push('/tabs')"> -->
            <ion-button type="submit">
              helloo world
            </ion-button>
            <ion-button @click="reload()">
              refresh
            </ion-button>
          </form>
          <ion-button @click="() => logLocal()">
            log local
          </ion-button>
          <ion-button @click="() => clearLocal()">
            clear all
          </ion-button>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<style lang="css" scoped>
.back_picture {
  /* background-image: url("https://i.imgur.com/BNlw2lj.jpg"); */
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}
.login_div {
  position: absolute;
  background-color: rgba(0, 0, 255, 0.349);
  min-width: 100%;
  height: 60%;
  margin-top: 20%;
  margin-bottom: 20%;
  padding-left: 16px;
  padding-right: 16px;
}
.login_card {
  /* position: absolute; */
  color: rgb(0, 139, 0);
  background-color: white;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  height: 100%;
}
.greenBar {
  /* position: absolute; */
  background-color: #4a4d3e;
  height: 18px;
  margin-top: 6%;
  min-width: 100%;
}
.mainIcon {
  /* position: absolute;
  margin-left: 43%;
  margin-right: 43%;
  max-height: 20%;
  max-width: 14%; */
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  max-width: 16%;
  align-items: center;
}
</style>

<script lang="ts">
import { IonInput, IonLabel, IonButton, IonPage } from "@ionic/vue";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  components: {
    IonPage,
    IonInput,
    IonLabel,
    IonButton,
  },
  beforeMount() {
    console.log("hello before mount!");
    const userName = window.localStorage.getItem("username");
    const passWord = window.localStorage.getItem("password");
    if (userName && passWord) {
      console.log("have information");
      console.log(userName);
      console.log(passWord);
      this.showPanel = false;
      if (window.localStorage.getItem("LoginPageReloaded") === "no") {
        window.localStorage.setItem("LoginPageReloaded", "yes");
        window.location.reload();
      }
      this.$router.push("/tabs");
    } else {
      console.log("no data!");
    }
  },
  data() {
    return {
      userName: "",
      passWord: "",
      showPanel: true,
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    onSubmit() {
      console.log("username = " + this.userName);
      console.log("password = " + this.passWord);
      // Delete the thing above and do the authentication here

      //
      window.localStorage.setItem("username", this.userName);
      window.localStorage.setItem("password", this.passWord);
      this.showPanel = false;
      this.$router.push("/tabs");
    },
    created() {
      console.log("please wait");
      console.log(window.localStorage.getItem("username"));
      const geolocation = navigator.geolocation;
      geolocation.getCurrentPosition((res) => {
        console.log("hereis your location");
        console.log(res.coords.latitude);
        console.log(res.coords.longitude);
        // go main page
        // this.$router.push('/tabs');
      });
    },
    clearLocal() {
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("password");
      console.log(" cleared");
    },
    logLocal() {
      console.log("username = " + window.localStorage.getItem("username"));
      console.log("password = " + window.localStorage.getItem("password"));
    },
    reload() {
      window.location.reload();
    },
  },
});
</script>
