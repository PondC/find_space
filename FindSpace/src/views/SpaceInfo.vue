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
          <!-- <img class="spacePic" src="https://picsum.photos/700/300" /> -->
          <img
            class="spacePic"
            :src="bannerPicture ? bannerPicture : loremPicsum"
          />
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
            <div class="onelineTopicText">Available seats</div>
            <div class="onelineInfo">
              {{ availableSeat }}
            </div>
          </div>
          <div class="multiLineSection">
            <div class="multiLineTopicText">Description</div>
            <div class="multiLineInfo">
              {{ space.ws_des }}
            </div>
          </div>
          <div class="multiLineSection">
            <div class="multiLineTopicText">Menu</div>
            <div class="multiLineInfo">
              <!-- <div v-for="menu in menus" :key="menu" class="menuList">
                <img :src="menu" />
              </div> -->
              <div v-if="menuJson.menu1">
                <img :src="menuJson.menu1" />
              </div>
              <div v-if="menuJson.menu2">
                <img :src="menuJson.menu2" />
              </div>
              <div v-if="menuJson.menu3">
                <img :src="menuJson.menu3" />
              </div>
            </div>
          </div>
          <div class="multiLineSection">
            <div class="multiLineTopicText">Operating Hours</div>
            <div class="multiLineInfo">
              <div>
                Monday : {{ operatingHR.mon ? operatingHR.mon : "Closed" }}
              </div>
              <div>
                Tuesday : {{ operatingHR.tue ? operatingHR.tue : "Closed" }}
              </div>
              <div>
                Wednesday : {{ operatingHR.wed ? operatingHR.wed : "Closed" }}
              </div>
              <div>
                Thursday : {{ operatingHR.thu ? operatingHR.thu : "Closed" }}
              </div>
              <div>
                Friday : {{ operatingHR.fri ? operatingHR.fri : "Closed" }}
              </div>
              <div>
                Saturday : {{ operatingHR.sat ? operatingHR.sat : "Closed" }}
              </div>
              <div>
                Sunday : {{ operatingHR.sun ? operatingHR.sun : "Closed" }}
              </div>
            </div>
          </div>
          <div class="onelineSection">
            <div class="onelineTopicText">Power Outlet</div>
            <div class="onelineInfo">{{ space.poweroutlet }}</div>
          </div>
          <div class="onelineSection">
            <div class="onelineTopicText">Wifi</div>
            <div class="onelineInfo">
              {{ space.wifi ? "Available" : "Unavailable " }}
            </div>
          </div>
          <!-- <div class="onelineSection">
            <div class="onelineTopicText">info</div>
          </div> -->
        </div>
      </div>
      <ion-button class="navigateButton" @click="goGoogleMap()">
        <a :href="googleMapLink" style="text-decoration:none; color: #4a4d3e">
          Navigate
        </a>
      </ion-button>
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
    this.checkFavorite();
    this.fetchEvery();
    // this.checkReload();
  },
  data() {
    return {
      googleMapLink: "",
      spaceName: "",
      spaceID: 0,
      space: [],
      pic: [],
      menuJson: {},
      menus: [""],
      operatingHR: {},
      ophr: [],
      availableSeat: 0,
      totalSeat: 0,
      crwdness: 0,
      favoriteList: [],
      personIcon1: "cPersonGreen.svg",
      personIcon2: "cPersonLight.svg",
      personIcon3: "cPersonOrange.svg",
      personIcon4: "cPersonRed.svg",
      heartIcon: "hollowHeart.svg",
      favorite: false,
      bannerPicture: "",
      loremPicsum: "https://picsum.photos/700/300",
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
          this.googleMapLink = res.data.ws_link;
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
          this.bannerPicture = res.data.photo1;
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
          this.menuJson = res.data;
          this.menus = [""];
          this.menus.pop();
          this.menus.push(res.data.menu1);
          this.menus.push(res.data.menu2);
          this.menus.push(res.data.menu3);
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
          this.operatingHR = res.data;
          console.log(this.ophr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCRWDNESS(spaceID: any) {
      const url = this.backendURL + "/wsdetail/crowdedness/" + spaceID;
      return axios
        .get(url)
        .then((res) => {
          // console.log("getCRWDNESS");
          // console.log(res);
          // console.log(res.data);
          // console.log("getCRWDNESS");
          this.crwdness = res.data.crowdednessstatus;
          this.availableSeat = res.data.totalseat - Number(res.data.ppl_in_ws);
          if (this.availableSeat < 0) {
            this.availableSeat = 0;
          }
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
    checkFavorite() {
      // const endPointURL = this.backendURL + "/admin/workspace";
      const endPointURL =
        "http://localhost:5678/users/favorite?email=" +
        window.localStorage.getItem("useremail");
      return axios
        .get(endPointURL)
        .then((res) => {
          console.log("favorite checking");
          // console.log(res);
          // console.log(res.data);
          this.favoriteList = res.data;
          this.favoriteList.map((e: any) => {
            console.log(e.workspaceid);
            if (this.spaceID === e.workspaceid) {
              this.favorite = true;
              this.heartIcon = "blackHeart.svg";
            }
          });
          if (!this.favorite) {
            this.heartIcon = "hollowHeart.svg";
          }
          console.log("favorite checking");
          // this.favSpaces = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editFavorite() {
      this.favorite = !this.favorite;
      if (this.favorite) {
        this.heartIcon = "blackHeart.svg";
        const url =
          this.backendURL +
          "/users/favorite?email=" +
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
        console.log("will add favorite");
      } else {
        this.heartIcon = "hollowHeart.svg";
        const url =
          this.backendURL +
          "/user/favorite?email=" +
          window.localStorage.getItem("useremail") +
          "&WorkspaceID=" +
          this.spaceID;
        console.log("url");
        console.log(url);
        axios
          .delete(url)
          .then((res) => {
            console.log("res");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
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
        this.checkFavorite();
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
  color: #969e78;
  height: 100%;
}
.header {
  display: flex;
  height: 48px;
  align-items: center;
}
.workspaceName {
  min-width: 72%;
  max-block-size: 72%;
  overflow: hidden;
  color: #969e78;
  font-size: 18px;
}
.icon {
  width: 48px;
  font-size: 24px;
  margin-left: 12px;
  margin-top: 8px;
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
  width: 100%;
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
  max-height: 56%;
  overflow: scroll;
}
.onelineSection {
  display: flex;
  margin-bottom: 16px;
  font-size: 18px;
  /* border-bottom-color: #4a4d3e;
  border-bottom-style: solid;
  border-bottom-width: 1px; */
}
.onelineTopicText {
  margin-left: 16px;
  /* background-color: aquamarine; */
  min-width: 63%;
  max-width: 63%;
}
.onelineInfo {
  /* background-color: #c1ffff; */
  min-width: 32%;
  max-width: 32%;
}
.multiLineSection {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 18px;
  /* border-bottom-color: #4a4d3e;
  border-bottom-style: solid;
  border-bottom-width: 1px; */
}
.multiLineTopicText {
  margin-left: 16px;
  margin-bottom: 8px;
  /* background-color: aquamarine; */
  min-width: 96%;
  max-width: 96%;
}
.multiLineInfo {
  /* background-color: #c1ffff; */
  min-width: 76%;
  max-width: 76%;
  margin-left: 24%;
  overflow: scroll;
  /* padding-left: 4px;
  padding-right: 4px; */
}
.navigateButton {
  --background: #da8a55;
  --border-radius: 100px;
  position: absolute;
  bottom: 4px;
  left: 32%;
}
.menuList {
  flex-direction: row;
}
</style>
