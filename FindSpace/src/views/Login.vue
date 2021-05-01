

<template>
  <ion-page>
    <!-- <img src="@/assets/img/LoginImg.jpg" /> -->
    <img class="back_picture" :src="require('@/assets/img/LoginImg.jpg')" />
    <div class="login_div">
      <img class="mainIcon" :src="require('@/assets/icon/FindSpaceIcon.png')" />
      <div class="greenBar"></div>
      <div class="login_card" v-if="loginMode">
        <div class="sub_login_card">
          <div class = "ion-text-center">
            Welcome Back!
          </div>
          <form @submit.prevent="onSubmit">
            <div class="textFieldBorder">
              <ion-input
                :value="email"
                @input="email = $event.target.value"
                placeholder="E-mail"
                name="email"
              ></ion-input>
            </div>
            <div class="textFieldBorder">
              <ion-input
                :value="password"
                @input="password = $event.target.value"
                placeholder="Password"
                name="password"
              ></ion-input>
            </div>
            <!-- </ion-item> -->
            <!-- <ion-button @click="() => router.push('/tabs')"> -->
            <ion-row>
            <div class = "container">
            <a @click="reload()" style="text-decoration: underline; color: grey;">
              Forget password
            </a>
            </div>
            </ion-row>
             <div class = "container">
            <ion-button type="submit" shape=round color="secondary">
              Continue
            </ion-button>
            </div>
            <ion-row>
              <div class = "container">
            <a @click="reload()" style="text-decoration: underline; color: grey;">
              sign up
            </a>
            </div>
            </ion-row>
          </form>
          <ion-button @click="() => logLocal()">
            log local
          </ion-button>
          <ion-button @click="() => clearLocal()">
            clear all
          </ion-button> -->
        </div>
      </div>
      <!-- I'm too lazy to create new page -->
      <div class="registerCard" v-if="!loginMode">
        <div class="sub_register_card">
          <div class="titleText">
            <div style="margin-left: 20%">
              register
            </div>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="textFieldBorder">
              <ion-input
                :value="newEmail"
                @input="newEmail = $event.target.value"
                placeholder="E-mail"
                name="newEmail"
              ></ion-input>
            </div>
            <div class="textFieldBorder">
              <ion-input
                :value="newUsername"
                @input="newUsername = $event.target.value"
                placeholder="Username"
                name="newUsername"
              ></ion-input>
            </div>
            <div class="textFieldBorder">
              <ion-input
                :value="newPassword"
                @input="newPassword = $event.target.value"
                placeholder="Password"
                name="newPassword"
              ></ion-input>
            </div>
            <div class="textFieldBorder">
              <ion-input
                :value="confirmNewPassword"
                @input="confirmNewPassword = $event.target.value"
                placeholder="Confirm password"
                name="confirmNewPassword"
              ></ion-input>
            </div>
            <ion-button class="continueButton" type="submit">
              Continue
            </ion-button>
          </form>
          <a style="margin-left: 40%;" @click="registerMode()">
            back
          </a>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  IonInput,
  IonButton,
  IonPage,
  alertController,
  // IonItem,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Login",
  components: {
    IonPage,
    IonInput,
    IonButton,
    alertController,
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
      email: "",
      password: "",
      loginMode: true,
      newEmail: "",
      newUsername: "",
      newPassword: "",
      confirmNewPassword: "",
      backendEndpoint: "http://localhost:5678",
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
      if (this.loginMode) {
        console.log("username = " + this.email);
        console.log("password = " + this.password);
        // Delete the thing above and do the authentication here
        const endPointURL =
          this.backendEndpoint +
          "/users/login?email=" +
          this.email +
          "&password=" +
          this.password;
        axios
          .post(endPointURL)
          .then((res) => {
            if (res.data == "matched") {
              window.localStorage.setItem("username", this.email);
              // window.localStorage.setItem("password", this.password);
              this.$router.push("/tabs");
            } else {
              this.loginError(res.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
        //
      } else {
        console.log(this.newUsername);
        console.log(this.newEmail);
        console.log(this.newPassword);
        console.log(this.confirmNewPassword);
        const createAccountURL =
          this.backendEndpoint +
          "/users/register?name=" +
          this.newUsername +
          "&email=" +
          this.newEmail +
          "&password=" +
          this.newPassword +
          "&password2=" +
          this.confirmNewPassword;
        axios
          .post(createAccountURL)
          .then(() => {
            console.log("create success");
          })
          .catch((err) => {
            console.log("u fkd up");
            console.log(err);
          });
      }
    },
    async loginError(msg: string) {
      const deleteAlert = await alertController.create({
        message: "Error: " + msg,
        buttons: [
          {
            text: "ok",
            handler: () => {
              console.log("try again");
            },
          },
        ],
      });
      await deleteAlert.present();
      await deleteAlert.onDidDismiss();
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
    registerMode() {
      console.log("hello");
      this.loginMode = !this.loginMode;
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
  height: 64%;
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
.registerCard {
  color: #4a4d3e;
  background-color: white;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  height: 90%;
  padding-top: 8%;
}
.sub_register_card {
  width: 80%;
  margin-left: 10%;
  margin-left: 10%;
  margin-right: 10%;
  /* background-color: #9da778; */
  align-items: center;
}
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
.container{
  width: 100%;
  text-align: center;
}

.continueButton {
  --background: #da8a55;
  --border-radius: 100px;
  margin-top: 12px;
  margin-bottom: 4px;
  margin-left: 24%;
}
.titleText {
  color: #4a4d3e;
  margin-left: 16%;
  font-size: 24px;
}
</style>
