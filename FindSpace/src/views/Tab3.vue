<template>
  <ion-page>
    <div class="mainDiv">
      <img class="greenDeskPic" :src="require('@/assets/img/greenDesk.png')" />
      <img class="profilePic" :src="require('@/assets/img/profileDummy.png')" />
      <div class="subDiv">
        {{ userName }}
        <div class="changeInfoDiv">
          <div>Username</div>
          <div>
            <ion-chip class="changeChip">
              <ion-label> Change Username </ion-label>
            </ion-chip>
          </div>
        </div>
        <div class="changeInfoDiv">
          <div>
            Password
          </div>
          <div>
            <ion-chip class="changeChip">
              <ion-label> Change Password </ion-label>
            </ion-chip>
          </div>
        </div>
        <div class="changeInfoDiv">
          <div>
            Status
          </div>
          <div>
            <ion-chip class="changeChip">
              <ion-label> Subscribe </ion-label>
            </ion-chip>
          </div>
        </div>
        <a @click="askToDelete()">
          Delete Account
        </a>
        <!-- <div>Your Latitude: {{ location.lat }}</div>
        <div>Your Longtitude: {{ location.long }}</div> -->
        <!-- <div v-if="isAlive">I'm Alive!</div>
        <ion-button @click="reload()">
          reload
        </ion-button> -->
        <ion-chip class="logOutChip" @click="logOut()">
          <ion-label> Log Out </ion-label>
        </ion-chip>
        <!-- <DeleteAccountMessage v-if="deletePopup"> </DeleteAccountMessage> -->
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  // IonButton,
  IonChip,
  IonLabel,
  // IonAlert,
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
// import DeleteAccountMessage from "../components/DeleteAccount.vue";
// import { Geolocation } from "@ionic-native/geolocation/ngx";

export default defineComponent({
  name: "Tab3",
  components: {
    IonChip,
    IonPage,
    // IonButton,
    IonLabel,
    // IonAlert,
    // DeleteAccountMessage,
  },
  beforeMount() {
    console.log("hello before mount page 3!");
    const tempUserName = window.localStorage.getItem("username");
    const tempPassWord = window.localStorage.getItem("password");
    if (tempUserName && tempPassWord) {
      console.log("have information");
      // this.deletePopup = false;
      this.userName = tempUserName;
      this.passWord = tempPassWord;
      if (window.localStorage.getItem("UserPageReloaded") === "no") {
        window.localStorage.setItem("UserPageReloaded", "yes");
        window.location.reload();
      }
      this.watchLocation();
    } else {
      console.log("no data!");
      // this.deletePopup = false;
      this.$router.push("/");
    }
  },
  data() {
    return {
      userName: "",
      passWord: "",
      status: "regular",
      deletePopup: false,
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
    async askToDelete() {
      // this.deletePopup = !this.deletePopup;
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
  margin-top: 16%;
  background-color: #faf6f0;
  color: black;
  height: 100%;
  width: 92%;
  margin-left: 4%;
}
.changeInfoDiv {
  color: #4a4d3e;
  border-bottom-color: #4a4d3e;
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
  /* min-width: 100%; */
}
.logOutChip {
  background-color: #da8a55;
  border-color: #4a4d3e;
  border-style: solid;
  border-width: 1px;
  color: #4a4d3e;
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
</style>
