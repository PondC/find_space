<template>
  <ion-page>
    <div class="mainDiv">
      <img class="greenDeskPic" :src="require('@/assets/img/greenDesk.png')" />
      <img class="profilePic" :src="require('@/assets/img/realProfile.png')" />
      <div class="subDiv" v-if="panelMode === 'view'">
        <div style="font-weight: bold;">
          {{ userName }}
        </div>
        <div class="changeInfoDiv">
          <div>Username</div>
          <div>
            <ion-chip class="changeChip" @click="changeUserName()">
              <ion-label> Change Username </ion-label>
            </ion-chip>
          </div>
        </div>
        <div class="changeInfoDiv2">
          <div>
            Password
          </div>
          <div>
            <ion-chip class="changeChip" @click="changePassword()">
              <ion-label> Change Password </ion-label>
            </ion-chip>
          </div>
        </div>
        <div class="changeInfoDiv3">
          <div>
            Status
          </div>
          <div>
            <ion-chip
              class="changeChip2"
              @click="gotosubscribe()"
              href="/ggPay"
            >
              <ion-label> {{ subscribebutton }} </ion-label>
            </ion-chip>
          </div>
        </div>
        <div>
          <a
            @click="askToDelete()"
            style="text-decoration: underline; color: grey;"
          >
            Delete Account
          </a>
        </div>
        <ion-chip class="logOutChip" @click="logOut()">
          <ion-label> Log Out </ion-label>
        </ion-chip>
      </div>
      <div class="subDiv" v-if="panelMode === 'password'">
        <form @submit.prevent="onSubmit">
          <div class="textFieldBorder1">
            <ion-input
              :value="oldPass"
              @input="oldPass = $event.target.value"
              placeholder="Old password"
              name="oldPass"
              type="password"
            ></ion-input>
          </div>
          <div class="textFieldBorder">
            <ion-input
              :value="newPass"
              @input="newPass = $event.target.value"
              placeholder="New password"
              name="newPass"
              type="password"
            ></ion-input>
          </div>
          <div class="textFieldBorder">
            <ion-input
              :value="newPass2"
              @input="newPass2 = $event.target.value"
              placeholder="Confirm password"
              name="newPass2"
              type="password"
            ></ion-input>
          </div>
          <div>
            <ion-button class="continueButton" type="submit">
              Continue
            </ion-button>
          </div>
          <div>
            <a
              @click="panelMode = 'view'"
              style="text-decoration: underline; color: grey;"
            >
              Back
            </a>
          </div>
        </form>
      </div>
      <div class="subDiv" v-if="panelMode === 'username'">
        <form @submit.prevent="onSubmit">
          <div class="textFieldBorder">
            <ion-input
              :value="newUsername"
              @input="newUsername = $event.target.value"
              placeholder="New username"
              name="newUsername"
            ></ion-input>
          </div>
          <ion-button class="usernameBack" @click="panelMode = 'view'">
            Back
          </ion-button>
          <ion-button class="usernameContinue" type="submit">
            Continue
          </ion-button>
        </form>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonInput,
  IonButton,
  IonChip,
  IonLabel,
  // IonAlert,
  alertController,
} from "@ionic/vue";
import axios from "axios";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

// import DeleteAccountMessage from "../components/DeleteAccount.vue";
// import { Geolocation } from "@ionic-native/geolocation/ngx";

export default defineComponent({
  name: "Tab3",
  components: {
    IonChip,
    IonPage,
    IonInput,
    IonButton,
    IonLabel,
    // IonAlert,
    // DeleteAccountMessage,
  },
  beforeMount() {
    console.log("hello before mount page 3!");
    const tempUserName = window.localStorage.getItem("username");
    const tempPassWord = window.localStorage.getItem("password");
    //get email from login page
    const tempEmail = window.localStorage.getItem("useremail");
    console.log(tempEmail);
    //set subscribe button to subscribe as default

    if (tempUserName) {
      console.log("have information");
      this.userName = tempUserName;
      this.passWord = tempPassWord + "";
      this.email = tempEmail + "";
      if (window.localStorage.getItem("UserPageReloaded") === "no") {
        window.localStorage.setItem("UserPageReloaded", "yes");
        window.location.reload();
      }
    } else {
      console.log("no data!");
    }
    //use email to get status from premium table then set usertype to "premium" or "subscribe"
    axios.get(this.backendURL + "/premium/" + this.email).then((res: any) => {
      console.log(res);
      console.log("1" + JSON.stringify(res.data[0].premiumstatus));
      console.log("res 1:" + JSON.stringify(res.data[0].premiumstatus));
      this.premiumstatus = JSON.stringify(res.data[0].premiumstatus);
      console.log("premiumstatuse=" + this.premiumstatus);
      window.localStorage.setItem(
        "premiumstatus",
        JSON.stringify(res.data[0].premiumstatus)
      );
      //set subscribe button to premium
      console.log(res.data[0].premiumstatus == "premium");
      if (res.data[0].premiumstatus == "premium") {
        console.log("kuy");
        this.subscribebutton = "premium";
        console.log("subscribebutton=" + this.subscribebutton);
        console.log(JSON.stringify(res.data[0].utype));
        window.localStorage.setItem("subscribebutton", "premium");
      } else {
        console.log("subscribe");
        window.localStorage.setItem("subscribebutton", "subscribe");
      }
    });
    this.subscribebutton = "" + window.localStorage.getItem("subscribebutton");
  },
  data() {
    return {
      premiumstatus: "",
      email: "",
      subscribebutton: "",
      userName: "",
      newUsername: "",
      passWord: "",
      oldPass: "",
      newPass: "",
      newPass2: "",
      panelMode: "view",
      changeErrMsg: "",
      status: "regular",
      deletePopup: false,
      isAlive: false,
      location: {
        lat: 0,
        long: 0,
      },
      backendURL: "http://localhost:5678",
      // backendURL: "http://192.168.1.118:5678",
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
      if (this.panelMode === "password") {
        console.log("go change some password");
        console.log(this.newPass);
        console.log(this.newPass2);
        if (this.oldPass !== this.passWord) {
          this.changeErrMsg = "Current password does not match";
          console.log(this.changeErrMsg);
        } else {
          if (this.newPass === this.newPass2) {
            this.confirmChangePassword();
          } else {
            this.changeErrMsg = "The password does not match";
            console.log(this.changeErrMsg);
          }
        }
      } else if (this.panelMode === "username") {
        console.log("go change some username");
        console.log(this.newUsername);
        console.log("!window.localStorage.getItem(username)");
        console.log(window.localStorage.getItem("username"));
        console.log(!window.localStorage.getItem("username"));
        if (!window.localStorage.getItem("username")) {
          this.changeErrMsg = "No permission!";
          console.log(this.changeErrMsg);
        } else {
          this.confirmChangeUsername();
        }
      }
    },
    gotosubscribe() {
      console.log("go to subscribe");
      console.log(this.email);
      console.log(
        this.backendURL + "/premium/" + this.email + "?premiumstatus=premium"
      );
      //update usertype to premium when pressed
      axios.put(
        this.backendURL + "/premium/" + this.email + "?premiumstatus=premium"
      );
      //this.$router.push("/ggPay");
    },
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
    async askToDelete() {
      console.log(this.deletePopup);
      const deleteAlert = await alertController.create({
        // cssClass: "alertCard",
        // header: "Alert",
        // subHeader: "Subtitle",
        message: "Are you sure to delete account?",
        buttons: [
          {
            text: "Yes",
            handler: () => {
              console.log("you pressed yes");
              this.deleteAccount();
            },
          },
          {
            text: "No",
            handler: () => {
              console.log("you pressed no");
            },
          },
        ],
      });
      await deleteAlert.present();
      const { role } = await deleteAlert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    },
    deleteAccount() {
      // talk with backend
      this.logOut();
    },
    changePassword() {
      this.panelMode = "password";
    },
    changeUserName() {
      this.panelMode = "username";
    },
    confirmChangePassword() {
      // "http://localhost:5678/users/profileManage/changePassword?password=Ultimate8&password2=Ultimate8&email=helppls2@gmail.com"
      // console.log(window.localStorage.getItem("useremail"));
      const endpointURL =
        this.backendURL +
        "/users/profileManage/changePassword?password=" +
        this.newPass +
        "&password2=" +
        this.newPass2 +
        "&email=" +
        window.localStorage.getItem("useremail");
      axios
        .post(endpointURL)
        .then((res) => {
          console.log(res);
          window.localStorage.setItem("password", this.newPass);
          this.panelMode = "view";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    confirmChangeUsername() {
      // "http://localhost:5678/users/profileManage/changePassword?password=Ultimate8&password2=Ultimate8&email=helppls2@gmail.com"
      // console.log(window.localStorage.getItem("useremail"));
      // "/users/profileManage/changeUsername"
      const endpointURL =
        this.backendURL +
        "/users/profileManage/changeUsername?name=" +
        this.newUsername +
        "&email=" +
        window.localStorage.getItem("useremail");
      axios
        .post(endpointURL)
        .then((res) => {
          console.log(res);
          window.localStorage.setItem("username", this.newUsername);
          this.userName = this.newUsername;
          this.panelMode = "view";
        })
        .catch((err) => {
          console.log(err);
        });
    },

    reload() {
      window.location.reload();
    },
    sampleFunc() {
      console.log("works");
    },
  },
});
</script>
<style lang="css" scoped>
.mainDiv {
  background-color: #faf6f0;
  color: black;
  height: 100%;
}
.subDiv {
  margin-top: 10%;
  background-color: #faf6f0;
  text-align: center;
  color: #949f74;
  height: 100%;
  width: 92%;
  margin-left: 4%;
}
.changeInfoDiv {
  margin-top: 15%;
  color: #4a4d3e;
  border-bottom-color: rgb(146, 145, 145);
  border-width: 1px;
  border-bottom-style: solid;
  min-height: 40px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  /* vertical-align: middle; */
}
.changeInfoDiv2 {
  margin-top: 3%;
  color: #4a4d3e;
  border-bottom-color: rgb(146, 145, 145);
  border-width: 1px;
  border-bottom-style: solid;
  min-height: 40px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  /* vertical-align: middle; */
}
.changeInfoDiv3 {
  margin-top: 3%;
  margin-bottom: 10%;
  color: #4a4d3e;
  border-bottom-color: rgb(146, 145, 145);
  border-width: 1px;
  border-bottom-style: solid;
  min-height: 40px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  /* vertical-align: middle; */
}
.changeChip {
  background-color: #969e78;
  border-color: #4a4d3e;
  border-style: solid;
  border-width: 1px;
  color: #4a4d3e;
  margin-left: 60px;
  /* min-width: 100%; */
}
.changeChip2 {
  background-color: #969e78;

  border-color: #4a4d3e;
  border-style: solid;
  border-width: 1px;
  color: #4a4d3e;
  margin-left: 137px;
  /* min-width: 100%; */
}
.logOutChip {
  background-color: #da8a55;
  border-color: #4a4d3e;
  border-style: solid;
  border-width: 1px;
  color: #4a4d3e;
  margin-top: 48%;
  /* min-width: 100%; */
}

.greenDeskPic {
  min-width: 100%;
}
.profilePic {
  position: absolute;
  left: 50%;
  top: 13%;
  width: 80px;
  margin-left: -40px;
  border-radius: 999px;
}
.textFieldBorder1 {
  border-bottom: #4a4d3e;
  color: #4a4d3e;
  border-width: thin;
  border-style: solid;
  border-radius: 3px;
  margin-top: 20%;
}
.textFieldBorder {
  border-bottom: #4a4d3e;
  color: #4a4d3e;
  border-width: thin;
  border-style: solid;
  border-radius: 3px;
  margin-top: 10%;
}
.continueButton {
  --background: #da8a55;
  --border-radius: 100px;
  margin-top: 10%;
  margin-left: 35%;
  -ms-transform: translate(-50%);
  transform: translate(-50%);
}
.backButton {
  --background: #da8a55;
  --border-radius: 100px;
  margin-top: 12px;
  margin-bottom: 4px;
  margin-left: 25%;
  -ms-transform: translate(-50%);
  transform: translate(-50%);
}
.usernameContinue {
  --background: #da8a55;
  --border-radius: 100px;
  margin-top: 12px;
  margin-bottom: 4px;
  margin-left: 35%;
  -ms-transform: translate(-50%);
  transform: translate(-50%);
}
.usernameBack {
  --background: #da8a55;
  --border-radius: 100px;
  margin-top: 12px;
  margin-bottom: 4px;
  margin-left: 25%;
  -ms-transform: translate(-50%);
  transform: translate(-50%);
}
</style>
