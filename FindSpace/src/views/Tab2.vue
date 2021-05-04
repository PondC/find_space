<template>
  <ion-page>
    <div class="mainDiv" v-if="!showAds">
      <img class="nearbyBanner" :src="require('@/assets/img/NearBy.png')" />
      <div class="searchBox">
        <div class="textFieldBorder">
          <ion-input
            :value="searchWord"
            @input="searchWord = $event.target.value"
            @keyup="searching($event)"
            placeholder="Search"
            name="searchWord"
          ></ion-input>
        </div>
      </div>
      <div class="spaceList" v-if="!showSearch">
        <div
          v-for="space in spaces"
          :key="space.workspaceid"
          @click="toSpaceInfo(space.workspaceid)"
        >
          <spaceCard :space="space" :key="space"></spaceCard>
        </div>
      </div>
      <div class="spaceList" v-if="showSearch">
        <div
          v-for="space in searchSpace"
          :key="space.workspaceid"
          @click="toSpaceInfo(space.workspaceid)"
        >
          <searchingList
            :space="space"
            :userLat="location.lat"
            :userLong="location.long"
            :key="space"
          ></searchingList>
        </div>
      </div>
    </div>
    <video
      id="myVideo"
      width="320"
      height="176"
      v-if="showAds"
      class="ads"
      autoplay
    >
      <source
        src="https://cdn.kapwing.com/findspace_ads-y3C1I4uWnK.mp4"
        type="video/mp4"
      />
      <source src="mov_bbb.ogg" type="video/ogg" />
      Your browser does not support HTML5 video.
    </video>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonInput,
  alertController,
  // IonSearchbar,
  // IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
import spaceCard from "../components/spaceCard.vue";
import searchingList from "../components/searchingList.vue";

export default defineComponent({
  name: "Tab2",
  components: {
    IonPage,
    spaceCard,
    searchingList,
    IonInput,
    // IonSearchbar,
    // IonIcon,
  },
  beforeMount() {
    this.askForFeedback();
    this.watchLocation();
    this.getNearbySpaceList();
    this.updateList();
    this.getAllSpace();
  },
  data() {
    return {
      // backendURL: "http://localhost:5678",
      //backendURL: "http://192.168.1.118:5678",
      backendURL: "https://testcu-app.herokuapp.com",
      showAds: false,
      showSearch: false,
      searchWord: "",
      spaces: [],
      allSpaces: [],
      searchSpace: [""],
      location: {
        lat: 0,
        long: 0,
      },
    };
  },
  methods: {
    reload() {
      window.location.reload();
    },
    watchLocation() {
      const geo = navigator.geolocation;
      geo.watchPosition((res) => {
        console.log("watching location....");
        this.location.lat = res.coords.latitude;
        this.location.long = res.coords.longitude;
        this.updateLocation(res);
        this.getNearbySpaceList();
      });
    },
    updateLocation(data: any) {
      this.location.lat = data.coords.latitude;
      this.location.long = data.coords.longitude;
      this.getNearbySpaceList();
    },
    async askForFeedback() {
      const latestVisitedSpaceName = window.localStorage.getItem(
        "latestVisitedSpaceName"
      );
      const latestVisitedSpaceID = window.localStorage.getItem(
        "latestVisitedSpaceID"
      );
      if (latestVisitedSpaceName && latestVisitedSpaceID) {
        const today = new Date();
        const deleteAlert = await alertController.create({
          // cssClass: "alertCard",
          // header: "Alert",
          // subHeader: "Subtitle",
          message:
            "Are there any seat(s) at " + '"' + latestVisitedSpaceName + '" ?',
          buttons: [
            {
              text: "Yes",
              handler: () => {
                console.log("you pressed yes");
                const url =
                  this.backendURL +
                  "/gives_feedback/" +
                  latestVisitedSpaceID +
                  "?email=" +
                  window.localStorage.getItem("userEmail") +
                  "&feedbacktime=" +
                  today.toISOString() +
                  "&feedbackstatus=" +
                  true;
                axios
                  .put(url)
                  .then((res) => {
                    // console.log(res);
                    console.log(res.data);
                    // if (res.data === "OK") {
                    // }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              },
            },
            {
              text: "No",
              handler: () => {
                console.log("you pressed no");
                const url =
                  this.backendURL +
                  "/gives_feedback/" +
                  latestVisitedSpaceID +
                  "?email=" +
                  window.localStorage.getItem("userEmail") +
                  "&feedbacktime=" +
                  today.toISOString() +
                  "&feedbackstatus=" +
                  false;
                axios
                  .put(url)
                  .then((res) => {
                    // console.log(res);
                    console.log(res.data);
                    // if (res.data === "OK") {
                    // }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              },
            },
            {
              text: "I did not visited this space",
              handler: () => {
                console.log("didnt go");
              },
            },
          ],
        });
        await deleteAlert.present();
        await deleteAlert.onDidDismiss();
        window.localStorage.removeItem("latestVisitedSpaceName");
        window.localStorage.removeItem("latestVisitedSpaceID");
        window.localStorage.removeItem("givenFeedback");
      } else {
        console.log("no data!");
      }
    },
    getNearbySpaceList() {
      // axios.defaults.withCredentials = true;
      console.log("################################");
      const userLat = 13.73;
      const userLong = 100.53;
      const endPointURL =
        this.backendURL +
        "/homepage/recommWS?Lat=" +
        userLat +
        "&Long=" +
        userLong;
      return axios
        .get(endPointURL)
        .then((res) => {
          this.spaces = [];
          this.spaces = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toSpaceInfo(id: number) {
      this.searchWord = "";
      this.$router.push("/SpaceInfo/" + id);
    },
    updateList() {
      setTimeout(() => {
        // console.log("will update every 10 sec");
        this.getNearbySpaceList();
        this.updateList();
      }, 10000);
    },
    getAllSpace() {
      const endPointURL = this.backendURL + "/admin/workspace";
      return axios
        .get(endPointURL)
        .then((res) => {
          // console.log("thjis is all space");
          // console.log(res);
          // console.log(res.data.rows);
          this.allSpaces = [];
          this.allSpaces = res.data.rows;
          this.searchSpace = res.data.rows;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searching(event: any) {
      // console.log(event.keyCode);
      if (this.searchWord.length === 0) {
        this.showSearch = false;
      }
      if (event.keyCode === 13) {
        this.showSearch = true;
        this.makeAdsAppear(8000);
        if (this.searchSpace.length === 0) {
          this.searchSpace = this.allSpaces;
        }
        this.searchSpace = [];
        this.allSpaces.map((e: any) => {
          if (
            e.wsname.substring(0, this.searchWord.length) === this.searchWord
          ) {
            this.searchSpace.push(e);
          }
        });
        // console.log("this.searchSpace");
        // console.log(this.searchSpace);
      }

      // console.log(this.searchSpace);
      // this.searchSpace.map((e: any) => {
      //   console.log(e.wsname);
      // });
    },
    makeAdsAppear(time: number) {
      this.showAds = true;
      setTimeout(() => {
        this.showAds = false;
      }, time);
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
.nearbyBanner {
  width: 100%;
}
.searchBox {
  height: 10%;
  /* background-color: aqua; */
}
.spaceList {
  height: 80%;
  padding-top: 8px;
  overflow: scroll;
}
.textFieldBorder {
  border-bottom: #4a4d3e;
  color: #4a4d3e;
  border-width: thin;
  border-style: solid;
  border-radius: 24px;
}
.ads {
  position: absolute;
  height: auto;
  width: 100%;
}
</style>
