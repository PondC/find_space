<template>
  <ion-page>
    <div class="background">
      <div class="header">
        <div class="icon" @click="backHome()">
          <ion-icon :src="require('@/assets/icon/backIcon.svg')"></ion-icon>
        </div>
        <div class="workspaceName">{{ space.wsname }}</div>
      </div>
      <div class="mainCard">
        <div class="spacePic">
          <img class="spacePic" src="https://picsum.photos/700/300" />
        </div>
        <div class="crowBar">
          <div class="spaceCrowd">
            <ion-icon
              class="personIcon"
              :src="require('@/assets/icon/' + personIcon1)"
            ></ion-icon>
            <ion-icon
              class="personIcon"
              :src="require('@/assets/icon/' + personIcon2)"
            ></ion-icon>
            <ion-icon
              class="personIcon"
              :src="require('@/assets/icon/' + personIcon3)"
            ></ion-icon>
            <ion-icon
              class="personIcon"
              :src="require('@/assets/icon/' + personIcon4)"
            ></ion-icon>
          </div>
          <div class="favoriteIcon">
            <ion-icon
              class="heartIcon"
              @click="editFavorite()"
              :src="require('@/assets/icon/' + heartIcon)"
            ></ion-icon>
          </div>
        </div>
        <div class="subSection">
          <div class="onelineSection">
            <div>Available seats</div>
            <div style="color: grey; margin-left:55%;">
              {{ availableSeat }}
            </div>
          </div>
          <div class="onelineSection">
            <div>Description</div>
            <div style="color: grey;">
              {{ space.ws_des + "Seattle-based coffee house chain known for its signature roasts, light bites and WiFi availability." }}
            </div>
          </div>
          <div class="onelineSection">
            <div>Menu</div>
          </div>
          <div class="onelineSection">
            <div>Operating Hours</div>
          </div>
          <div class="onelineSection">
            <div>Power Outlet</div>
            <div style="color: grey; margin-left: 61%">{{ space.poweroutlet }}</div>
          </div>
          <div class="onelineSection">
            <div>Wifi</div>
            <div style="color: grey; margin-left:62%">
              {{ space.wifi ? "Available" : "Unavailable " }}
            </div>
          </div>
          <div class="onelineSection">
            <div>info</div>
          </div>
        </div>
      </div>
      <ion-button class="navigateButton" @click="goGoogleMap()">
        <a
          href="https://www.w3schools.com"
          style="text-decoration:none; color: #4a4d3e"
        >
          Navigate
        </a>
      </ion-button>
      <!-- <video width="400" controls>
        <source :src="require('@/assets/video/sample.mp4')" type="video/mp4" />
        <source
          src="https://uploads.overwolf.com/owclient/discord/2020/07/23/f61f495a-8c69-4dde-ae32-2aff2d708fa9.mp4"
          type="video/mp4"
        />
      </video> -->
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonIcon,
  // IonHeader,
  // IonToolbar,
  // IonTitle,Î
  // IonContent,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "SpaceInfo",
  components: {
    // IonHeader,
    // IonToolbar,
    // IonTitle,
    // IonContent,
    IonPage,
    IonButton,
    IonIcon,
  },
  beforeMount() {
    console.log("THIS IS SPACE INFOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    this.spaceID = Number(this.$route.params.spaceID);
    this.getSpaceInformation(this.spaceID);
    this.getPic(this.spaceID);
    this.getMenu(this.spaceID);
    this.getOPHR(this.spaceID);
    this.getCRWDNESS(this.spaceID);
    this.fetchEvery();
    // this.checkReload();
  },
  data() {
    return {
      spaceName: "",
      spaceID: 0,
      space: [],
      pic: [],
      menu: [],
      ophr: [],
      availableSeat: 0,
      totalSeat: 0,
      crwdness: 0,
      personIcon1: "cPersonGreen.svg",
      personIcon2: "cPersonLight.svg",
      personIcon3: "cPersonOrange.svg",
      personIcon4: "cPersonRed.svg",
      heartIcon: "hollowHeart.svg",
      favorite: false,
      backendURL: "http://localhost:5678",
      // backendURL: "http://192.168.1.118:5678",
    };
  },
  methods: {
    // reload() {
    //   window.location.reload();
    // },
    checkReload() {
      console.log("checking reload");
      console.log("checking reload");
      setTimeout(() => {
        if (window.localStorage.getItem("spaceinforeloaded") === "no") {
          window.localStorage.setItem("spaceinforeloaded", "yes");
          console.log("gonna reload");
          window.location.reload();
        }
      }, 500);
    },
    backHome() {
      console.log("pressed back");
      window.localStorage.setItem("spaceinforeloaded", "no");
      this.$router.push("/tabs");
    },
    getSpaceInformation(spaceID: any) {
      const url = this.backendURL + "/wsdetail/workspace/" + spaceID;
      return axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          this.spaceName = res.data.wsname;
          this.space = res.data;
          this.totalSeat = res.data.totalseat;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPic(spaceID: any) {
      const url = this.backendURL + "/wsdetail/showpic/" + spaceID;
      return axios
        .get(url)
        .then((res) => {
          console.log("getPic");
          this.pic = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMenu(spaceID: any) {
      const url = this.backendURL + "/wsdetail/showmenu/" + spaceID;
      return axios
        .get(url)
        .then((res) => {
          console.log("getMenu");
          this.menu = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getOPHR(spaceID: any) {
      const url = this.backendURL + "/wsdetail/showophour/" + spaceID;
      return axios
        .get(url)
        .then((res) => {
          console.log("getOPHR");
          this.ophr = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCRWDNESS(spaceID: any) {
      console.log("getCRWDNESS");
      console.log("getCRWDNESS");
      const url = this.backendURL + "/wsdetail/crowdedness/" + spaceID;
      return axios
        .get(url)
        .then((res) => {
          console.log("getCRWDNESS");
          console.log(res);
          console.log(res.data);
          console.log("getCRWDNESS");
          this.crwdness = res.data.crowdednessstatus;
          this.availableSeat = res.data.totalseat - Number(res.data.ppl_in_ws);
          this.displayCrowdedNess(this.crwdness);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    displayCrowdedNess(crwdness: any) {
      if (crwdness == 1) {
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPerson.svg";
        this.personIcon3 = "cPerson.svg";
        this.personIcon4 = "cPerson.svg";
      } else if (crwdness == 2.4) {
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPersonLight.svg";
        this.personIcon3 = "cPerson.svg";
        this.personIcon4 = "cPerson.svg";
      } else if (crwdness == 3.6) {
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPersonLight.svg";
        this.personIcon3 = "cPersonOrange.svg";
        this.personIcon4 = "cPerson.svg";
      } else if (crwdness == 5) {
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPersonLight.svg";
        this.personIcon3 = "cPersonOrange.svg";
        this.personIcon4 = "cPersonRed.svg";
      }
    },
    editFavorite() {
      this.favorite = !this.favorite;
      if (this.favorite) {
        this.heartIcon = "blackHeart.svg";
        const url =
          this.backendURL +
          "/users/home?email=" +
          window.localStorage.getItem("useremail") +
          "&heart=" +
          this.spaceID;
        console.log("url");
        console.log(url);
        axios
          .post(url)
          .then((res) => {
            console.log("res");
            console.log(res);
            // if (res === "error") {

            // }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.heartIcon = "hollowHeart.svg";
      }
      console.log("new fav");
      console.log(this.favorite);
    },
    goGoogleMap() {
      window.localStorage.setItem("latestVisitedSpaceName", this.spaceName);
      window.localStorage.setItem("latestVisitedSpaceID", this.spaceID + "");
      window.localStorage.setItem("givenFeedback", "No");
    },
    fetchEvery() {
      setTimeout(() => {
        console.log("fetching");
        console.log(this.spaceID);
        this.getSpaceInformation(this.spaceID);
        this.getPic(this.spaceID);
        this.getMenu(this.spaceID);
        this.getOPHR(this.spaceID);
        this.getCRWDNESS(this.spaceID);
        this.fetchEvery();
      }, 5000);
    },
    // fetchSeatFromHardware() {
    //   setTimeout(() => {
    //     console.log("hardware pls");
    //     // if (this.searchWord === "hi") {
    //     //   this.searchWord = "hello";
    //     // } else {
    //     //   this.searchWord = "hi";
    //     // }
    //     this.fetchSeatFromHardware();
    //   }, 2000);
    // },
  },
});
</script>
<style lang="css" scoped>
.background {
  background-color: #faf6f0;
  color: #4a4d3e;
  height: 100%;
}
.header {
  display: flex;
  height: 48px;
}
.workspaceName {
  color: #949F74;
  margin-top: 12px;
  font-size: 120%;
}
.icon {
  width: 48px;
  font-size: 24px;
  margin-left: 12px;
  margin-top: 12px;
}
.mainCard {
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 100%;
}
.spacePic {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 160px;
}
.crowBar {
  display: flex;
  height: 48px;
}
.personIcon {
  font-size: 24px;
}
.spaceCrowd {
  max-width: 36%;
  margin-left: 34%;
  margin-top: 12px;
}
.favoriteIcon {
  margin-top: 12px;
  font-size: 24px;
  margin-left: 22%;
}
.subSection {
  /* background-color: rgb(91, 160, 137); */
  /* overflow: scroll; */
}
.onelineSection {
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  color: #949F74;
  border-bottom-color: #d2d3d0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.navigateButton {
  --background: #da8a55;
  --border-radius: 100px;
  position: absolute;
  margin-left: 35%;
  bottom: 16px;
}
</style>
