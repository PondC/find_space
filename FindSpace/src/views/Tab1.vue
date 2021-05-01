<template>
  <ion-page>
    
      <img class="nearbyBanner" :src="require('@/assets/img/FavSpace.png')" />
      <div class="searchBox">search box</div>
      <div class="spaceList">
        <div  v-for="space in spaces" :key="space.workspaceid">
          <spaceList :space="space"></spaceList>
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
import spaceList from "../components/spaceList.vue";

export default defineComponent({
  name: "Tab1",
  components: {
    IonPage,
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
        this.updateLocation(res);
        this.getFavoriteSpace();
      });
    },
    updateLocation(data: any) {
      this.location.lat = data.coords.latitude;
      this.location.long = data.coords.longitude;
      this.getFavoriteSpace();
    },
    // putSomething() {
    //   console.log("starting");
    //   axios
    //     .put("http://localhost:5678/admin/pic/photo3/2?photo3=Ai_Sus")
    //     .then((res) => {
    //       console.log("this is ther result");
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });

    //   console.log("finished");
    // },
    getFavoriteSpace() {
      const endPointURL = "http://localhost:5678/admin/workspace";
      // const endPointURL =
      //   "http://localhost:5678/homepage/recommWS?Lat=" +
      //   userLat +
      //   "&Long=" +
      //   userLong;
      return axios
        .get(endPointURL)
        .then((res) => {
          this.spaces = res.data.rows;
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
  overflow: scroll;
}
</style>
