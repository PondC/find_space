<template>
  <ion-page>
    <!-- <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button @click="reload()">
        reload
      </ion-button>
    </ion-content> -->
    <div class="mainDiv">
      <img class="nearbyBanner" :src="require('@/assets/img/NearBy.png')" />
      <div class="searchBox">search box</div>
      <div class="spaceList">
        <div
          v-for="space in spaces"
          :key="space.workspaceid"
          @click="showSpaceInfo(space.workspaceid)"
        >
          {{ space.workspaceid }}
          click me!!
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  // IonHeader,
  // IonToolbar,
  // IonTitle,
  // IonContent,
  // IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Tab2",
  components: {
    // IonHeader,
    // IonToolbar,
    // IonTitle,
    // IonContent,
    IonPage,
    // IonButton,
  },
  beforeMount() {
    console.log("hello from tab 2");
    this.getNearbySpaceList();
  },
  data() {
    return {
      searchWord: "",
      // isAlive: false,
      spaces: [],
    };
  },
  methods: {
    reload() {
      window.location.reload();
    },
    getNearbySpaceList() {
      // axios.defaults.withCredentials = true;
      const userLat = 13.736281;
      const userong = 100.53221;
      const endPointURL =
        "http://localhost:5678/homepage/recommWS?Lat=" +
        userLat +
        "&Long=" +
        userong;
      return axios
        .get(endPointURL)
        .then((res) => {
          console.log(res.data);
          this.spaces = res.data;
          console.log(this.spaces);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showSpaceInfo(id: number) {
      // console.log("this is id :" + id);
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
  height: 20%;
  background-color: green;
}
</style>
