<template>
  <ion-page>
    <div class="mainDiv" v-if="!showAds">
      <img class="nearbyBanner" :src="require('@/assets/img/FavSpace.png')" />
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
      <div class="spaceList">
        <div v-for="space in favSpaces" :key="space.workspaceid">
          <spaceList
            :space="space"
            :userLat="location.lat"
            :userLong="location.long"
          ></spaceList>
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
  // IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
import spaceList from "../components/spaceList.vue";

export default defineComponent({
  name: "Tab1",
  components: {
    IonPage,
    IonInput,
    spaceList,
    // IonIcon,
  },
  beforeMount() {
    console.log("hello from tab 2");
    this.watchLocation();
    this.getFavoriteSpace();
  },
  data() {
    return {
      searchWord: "",
      backendURL: "http://localhost:5678",
      // backendURL: "https://testcu-app.herokuapp.com",
      // backendURL: "http://192.168.1.118:5678",
      favSpaces: [],
      showAds: false,
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
        this.updateLocation(res);
        this.getFavoriteSpace();
      });
    },
    updateLocation(data: any) {
      // this.location.lat = data.coords.latitude;
      // this.location.long = data.coords.longitude;
      this.location.lat = 13.736281;
      this.location.long = 100.53221;
      this.getFavoriteSpace();
    },
    getFavoriteSpace() {
      // const endPointURL = this.backendURL + "/admin/workspace";
      const endPointURL =
        "http://localhost:5678/users/favorite?email=" +
        window.localStorage.getItem("useremail");
      return axios
        .get(endPointURL)
        .then((res) => {
          this.favSpaces = res.data;
          console.log("this.favSpaces");
          console.log(this.favSpaces);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searching(event: any) {
      console.log(event.keyCode);
      // if (this.searchWord.length === 0) {
      //   this.showSearch = false;
      // }
      if (event.keyCode === 13) {
        // this.showSearch = true;
        this.makeAdsAppear(1000);
        // if (this.searchSpace.length === 0) {
        //   this.searchSpace = this.allSpaces;
        // }
        // this.searchSpace = [];
        // this.allSpaces.map((e: any) => {
        //   if (
        //     e.wsname.substring(0, this.searchWord.length) === this.searchWord
        //   ) {
        //     this.searchSpace.push(e);
        //   }
        // });
        // console.log("this.searchSpace");
        // console.log(this.searchSpace);
      }
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
