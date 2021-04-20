<template>
  <ion-page>
    <!-- <img src="@/assets/img/LoginImg.jpg" /> -->
    <img class="back_picture" :src="require('@/assets/img/LoginImg.jpg')" />
    <div class="login_div">
      <img class="mainIcon" :src="require('@/assets/icon/FindSpaceIcon.png')" />
      <div class="greenBar"></div>
      <div class="login_card" v-if="showPanel">
        <div class="sub_login_card">
          <div>
            Welcome Back
          </div>
          <form @submit.prevent="onSubmit">
            <div class="textFieldBorder">
              <ion-input
                :value="userName"
                @input="userName = $event.target.value"
                placeholder="Username"
                name="userName"
              ></ion-input>
            </div>

            <!-- <ion-item class="textFieldBorder"> -->
            <div class="textFieldBorder">
              <ion-input
                :value="passWord"
                @input="passWord = $event.target.value"
                placeholder="Password"
                name="passWord"
              ></ion-input>
            </div>
            <!-- </ion-item> -->
            <!-- <ion-button @click="() => router.push('/tabs')"> -->
            <a @click="reload()">
              Forget password
            </a>
            <ion-button type="submit">
              Continue
            </ion-button>
            <a @click="reload()">
              sign up
            </a>
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

<script lang="ts">
import {
  IonInput,
  // IonLabel,
  IonButton,
  IonPage,
  // IonItem,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  components: {
    IonPage,
    IonInput,
    // IonLabel,
    IonButton,
    // IonItem,
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
  min-width: 100%;
  height: 60%;
  margin-top: 40%;
  margin-bottom: 20%;
  padding-left: 16px;
  padding-right: 16px;
}
.login_card {
  color: #4a4d3e;
  background-color: white;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  height: 90%;
  padding-top: 8%;
}
.sub_login_card {
  width: 80%;
  margin-left: 10%;
  margin-left: 10%;
  margin-right: 10%;
  /* background-color: #9da778; */
  align-items: center;
}
/* .sub_login_card_title {
  margin-left: 50%;
  margin-right: 50%;
} */
.greenBar {
  /* position: absolute; */
  background-color: #4a4d3e;
  height: 18px;
  margin-top: 6%;
  min-width: 100%;
}
.mainIcon {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  max-width: 16%;
  align-items: center;
}
.textFieldBorder {
  border-bottom: #4a4d3e;
  color: #4a4d3e;
  border-width: thin;
  border-style: solid;
  border-radius: 3px;
  margin-top: 10%;
}
</style>
