<template>
  <ion-page>
    <div class="mainDiv">
      <img class="nearbyBanner" :src="require('@/assets/img/NearBy.png')" />
      <div class="searchBox">search box</div>
      <div class="spaceList">
        <div
          v-for="space in spaces"
          :key="space.workspaceid"
        >
          <spaceCard :space="space"></spaceCard>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  // IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
import spaceCard from "../components/spaceCard.vue";

export default defineComponent({
  name: "Tab2",
  components: {
    IonPage,
    spaceCard,
    // IonIcon,
  },
  beforeMount() {
    console.log("hello from tab 2");
    this.watchLocation();
    // this.getNearbySpaceList();
  },
  data() {
    return {
      searchWord: "",
      spaces: [],
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
        console.log(res);
        this.updateLocation(res);
        this.getNearbySpaceList();
      });
    },
    updateLocation(data: any) {
      this.location.lat = data.coords.latitude;
      this.location.long = data.coords.longitude;
      this.getNearbySpaceList();
    },
    getNearbySpaceList() {
      // axios.defaults.withCredentials = true;
      const userLat = 13.736281;
      const userLong = 100.53221;
      const endPointURL =
        "http://localhost:5678/homepage/recommWS?Lat=" +
        userLat +
        "&Long=" +
        userLong;
      return axios
        .get(endPointURL)
        .then((res) => {
          this.spaces = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
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
  background-color: aqua;
}
.spaceList {
  height: 80%;
  padding-top: 8px;
}
</style>
