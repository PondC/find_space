<template>
  <ion-page>
    <div class="mainDiv">
      <img class="nearbyBanner" :src="require('@/assets/img/NearBy.png')" />
      <div class="searchBox">search box</div>
      <div class="spaceList">
        <div
          v-for="space in spaces"
          :key="space.workspaceid"
          @click="toSpaceInfo(space.workspaceid)"
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
  alertController,
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
    this.askForFeedback();
    this.watchLocation();
    this.getNearbySpaceList();
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
    async askForFeedback() {
      const latestVisitedSpaceName = window.localStorage.getItem(
        "latestVisitedSpaceName"
      );
      const latestVisitedSpaceID = window.localStorage.getItem(
        "latestVisitedSpaceID"
      );
      if (latestVisitedSpaceName && latestVisitedSpaceID) {
        console.log("Visited someplace before");
        console.log("gimme feedback!!!!");

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
              },
            },
            {
              text: "No",
              handler: () => {
                console.log("you pressed no");
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
    toSpaceInfo(id: number) {
      this.$router.push("/SpaceInfo/" + id);
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
