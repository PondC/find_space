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
            <div style="color: red;">
              {{ availableSeat }}
            </div>
          </div>
          <div class="onelineSection">
            <div>Description</div>
            <div style="color: red;">
              {{ space.ws_des + " some dummy text" }}
            </div>
          </div>
          <div class="onelineSection">
            <div>Menu</div>
            <div>info</div>
          </div>
          <div class="onelineSection">
            <div>Operating Hours</div>
            <div>info</div>
          </div>
          <div class="onelineSection">
            <div>Power Outlet</div>
            <div style="color: red;">{{ space.poweroutlet }}</div>
          </div>
          <div class="onelineSection">
            <div>Wifi</div>
            <div style="color: red;">
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
    console.log("info");
    console.log(this.$route.params);
    console.log("info");
    this.spaceID = Number(this.$route.params.spaceID);
    this.getSpaceInformation(this.spaceID);
    this.getPic(this.spaceID);
    this.getMenu(this.spaceID);
    this.getOPHR(this.spaceID);
    this.getCRWDNESS(this.spaceID);
    // this.ultraLoop();
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
      crwdness: 0,
      personIcon1: "cPersonGreen.svg",
      personIcon2: "cPersonLight.svg",
      personIcon3: "cPersonOrange.svg",
      personIcon4: "cPersonRed.svg",
      heartIcon: "hollowHeart.svg",
      favorite: false,
      backendEndpoint: "http://localhost:5678",
    };
  },
  methods: {
    reload() {
      window.location.reload();
    },
    backHome() {
      this.$router.push("/tabs");
    },
    getSpaceInformation(spaceID: any) {
      const url = this.backendEndpoint + "/wsdetail/workspace/" + spaceID;
      return axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          this.spaceName = res.data.wsname;
          this.space = res.data;
          const ppleInSpace = 1; // have top get this from hardware
          this.availableSeat = res.data.totalseat - ppleInSpace;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPic(spaceID: any) {
      const url = this.backendEndpoint + "/wsdetail/showpic/" + spaceID;
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
      const url = this.backendEndpoint + "/wsdetail/showmenu/" + spaceID;
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
      const url = this.backendEndpoint + "/wsdetail/showophour/" + spaceID;
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
      const url = this.backendEndpoint + "/wsdetail/crowdedness/" + spaceID;
      return axios
        .get(url)
        .then((res) => {
          console.log("getCRWDNESS");
          this.crwdness = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    displayCrowdedNess(spaceInfo: any) {
      if (spaceInfo.crowdednessstatus == 1) {
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPerson.svg";
        this.personIcon3 = "cPerson.svg";
        this.personIcon4 = "cPerson.svg";
      } else if (spaceInfo.crowdednessstatus == 2.4) {
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPersonLight.svg";
        this.personIcon3 = "cPerson.svg";
        this.personIcon4 = "cPerson.svg";
      } else if (spaceInfo.crowdednessstatus == 3.6) {
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPersonLight.svg";
        this.personIcon3 = "cPersonOrange.svg";
        this.personIcon4 = "cPerson.svg";
      } else if (spaceInfo.crowdednessstatus == 5) {
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
    fetchSeatFromHardware() {
      setTimeout(() => {
        console.log("hardware pls");
        // if (this.searchWord === "hi") {
        //   this.searchWord = "hello";
        // } else {
        //   this.searchWord = "hi";
        // }
        this.fetchSeatFromHardware();
      }, 2000);
    },
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
  color: #4a4d3e;
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
  background-color: rgb(91, 160, 137);
  /* overflow: scroll; */
}
.onelineSection {
  display: flex;
  margin-bottom: 4px;
  font-size: 22px;
  border-bottom-color: #4a4d3e;
  border-bottom-style: solid;
}
.navigateButton {
  --background: #da8a55;
  --border-radius: 100px;
  position: absolute;
  bottom: 16px;
}
</style>
