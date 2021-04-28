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
          class="spaceCard"
          v-for="space in spaces"
          :key="space.workspaceid"
          @click="showSpaceInfo(space.workspaceid)"
        >
          <div class="spacePic">
            <!-- <img :src="require('@/assets/img/LoginImg.jpg')" /> -->
            <img src="https://picsum.photos/700/300" />
          </div>
          <div class="spaceInfo">
            <div class="spaceIcon">
              <img src="https://picsum.photos/100" />
            </div>
            <div class="spaceName">
              <div>
                {{ space.wsname }}
              </div>
              <div>
                {{ space.distance }}
              </div>
            </div>
            <div class="spaceCrowd">
              {{ space.crowdednessstatus }}
            </div>
            <div>
              croud
            </div>
          </div>
          <div class="spaceFeed">
            {{ space.feedbackstatus }}
          </div>
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
      // This one is for admin page
      this.$router.push("/modify/" + id);

      // This one is for user page
      // this.$router.push("/SpaceInfo/" + id);
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
  background-color: green;
}
.spaceCard {
  border-radius: 12px;
  background-color: white;
  max-width: 96%;
  height: 176px;
  margin-left: 2%;
}
.spacePic {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: rgb(0, 81, 255);
  height: 104px;
  overflow: hidden;
}
.spaceInfo {
  background-color: rgb(230, 103, 103);
  height: 48px;
  display: flex;
}
.spaceIcon {
  max-width: 48px;
}
.spaceName {
  max-width: 160px;
  background-color: rgb(110, 87, 116);
}
.spaceCrowd {
  max-width: 48px;
  background-color: rgb(117, 228, 222);
}
.spaceFeed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: rgb(205, 103, 230);
  height: 24px;
}
</style>
