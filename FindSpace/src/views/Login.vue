<template>
  <ion-page>
    <!-- <img src="@/assets/img/LoginImg.jpg" /> -->
    <img class="back_picture" :src="require('@/assets/img/LoginImg.jpg')" />
    <div class="login_div">
      <img class="mainIcon" :src="require('@/assets/icon/FindSpaceIcon.png')" />
      <div class="greenBar"></div>
      <div class="login_card" v-if="loginMode">
        <div class="sub_login_card">
          <div class="ion-text-center">
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
            <div class="textFieldBorder1">
              <ion-input
                :value="password"
                @input="password = $event.target.value"
                placeholder="Password"
                name="password"
                type="password"
              ></ion-input>
            </div>
            <!-- </ion-item> -->
            <!-- <ion-button @click="() => router.push('/tabs')"> -->
            <ion-row>
              <div class="container">
                <a
                  @click="reload()"
                  style="text-decoration: underline; color: grey;"
                >
                  Forget password
                </a>
              </div>
            </ion-row>
            <div class="container">
              <ion-button type="submit" shape="round" color="secondary">
                Continue
              </ion-button>
            </div>
            <ion-row>
              <div class="container">
                <a
                  @click="registerMode()"
                  style="text-decoration: underline; color: grey;"
                >
                  sign up
                </a>
              </div>
            </ion-row>
          </form>
        </div>
      </div>
      <!-- I'm too lazy to create new page -->
      <div class="registerCard" v-if="!loginMode">
        <div class="sub_register_card">
          <div class="titleText">
            <div style="margin-left: 20%">
              Sign Up
            </div>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="textFieldBorder3">
              <ion-input
                :value="newEmail"
                @input="newEmail = $event.target.value"
                placeholder="E-mail"
                name="newEmail"
              ></ion-input>
            </div>
            <div class="textFieldBorder2">
              <ion-input
                :value="newUsername"
                @input="newUsername = $event.target.value"
                placeholder="Username"
                name="newUsername"
              ></ion-input>
            </div>
            <div class="textFieldBorder2">
              <ion-input
                :value="newPassword"
                @input="newPassword = $event.target.value"
                placeholder="Password"
                name="newPassword"
                type="password"
              ></ion-input>
            </div>
            <div class="textFieldBorder2">
              <ion-input
                :value="confirmNewPassword"
                @input="confirmNewPassword = $event.target.value"
                placeholder="Confirm password"
                name="confirmNewPassword"
                type="password"
              ></ion-input>
            </div>
            <ion-button class="continueButton" type="submit">
              Continue
            </ion-button>
          </form>
          <a
            style="margin-left: 40%;text-decoration:underline; color:grey;"
            @click="registerMode()"
          >
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
  IonRow,
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
    IonRow,
    //alertController,
    // IonItem,
  },
  beforeMount() {
    console.log("hello before mount!");
    const userName = window.localStorage.getItem("username");
    const userEmail = window.localStorage.getItem("useremail");
    const passWord = window.localStorage.getItem("password");
    if (userName && passWord && userEmail) {
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
      // backendURL: "http://localhost:5678",
      backendURL: "https://find-space-app.herokuapp.com",
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
        console.log("userEmail = " + this.email);
        console.log("password = " + this.password);
        const endPointURL =
          this.backendURL +
          "/users/login?email=" +
          this.email +
          "&password=" +
          this.password;
        axios
          .post(endPointURL)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            console.log(res.data[0]);
            if (res.data == "Password incorrect") {
              this.loginError(res.data);
            } else if (res.data == "Try again later") {
              this.loginError(res.data);
            } else if (res.data == "No user found") {
              this.loginError(res.data);
            } else {
              window.localStorage.setItem("useremail", this.email);
              window.localStorage.setItem("username", res.data[0].uname);
              window.localStorage.setItem("password", this.password);
              if (
                this.email === "jommy346@gmail.com" ||
                this.email === "Jommy346@gmail.com"
              ) {
                this.$router.push("/admin");
              } else {
                this.$router.push("/tabs");
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log(this.newUsername);
        console.log(this.newEmail);
        console.log(this.newPassword);
        console.log(this.confirmNewPassword);
        if (this.newPassword.length < 6 || this.confirmNewPassword.length < 6) {
          this.loginError("Password must be 6 characters or more");
        }
        if (this.newPassword !== this.confirmNewPassword) {
          this.loginError("Password do not match");
        } else {
          const createAccountURL =
            this.backendURL +
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
            .then((res) => {
              console.log("create success");
              // console.log(res);
              if (res.data === "Account Created") {
                this.loginMode = true;
                console.log("here");
              } else {
                this.loginError(res.data);
              }
            })
            .catch((err) => {
              console.log("u fkd up");
              console.log(err);
              this.loginError(err);
            });
        }
      }
    },
    async loginError(msg: string) {
      const errorAlert = await alertController.create({
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
      await errorAlert.present();
      await errorAlert.onDidDismiss();
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
.textFieldBorder1 {
  border-bottom: #4a4d3e;
  color: #4a4d3e;
  border-width: thin;
  border-style: solid;
  border-radius: 3px;
  margin-top: 10%;
  margin-bottom: 10%;
}
.textFieldBorder2 {
  border-bottom: #4a4d3e;
  color: #4a4d3e;
  border-width: thin;
  border-style: solid;
  border-radius: 3px;
  margin-top: 3%;
}
.textFieldBorder3 {
  border-bottom: #4a4d3e;
  color: #4a4d3e;
  border-width: thin;
  border-style: solid;
  border-radius: 3px;
  margin-top: 5%;
}

.container {
  width: 100%;
  text-align: center;
}

.continueButton {
  --background: #da8a55;
  --border-radius: 100px;
  margin-top: 5%;
  margin-bottom: 4px;
  margin-left: 24%;
}
.titleText {
  color: #4a4d3e;
  margin-left: 16%;
  font-size: 24px;
}
</style>
