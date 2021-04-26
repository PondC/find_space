<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ searchWord }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button @click="reload()">
        reload
      </ion-button>
    </ion-content>
    <!-- <div class="mainDiv">
      <img class="nearbyBanner" :src="require('@/assets/img/NearBy.png')" />
      <div class="searchBox">search box</div>
      <div class="spaceList">
        <div
          v-for="space in spaces"
          :key="space.workspaceid"
          @click="showSpaceInfo()"
        >
          {{ space.workspaceid }}
        </div>
      </div>
    </div> -->
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "SpaceInfo",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
  },
  beforeMount() {
    console.log("info");
    console.log(this.$route.params.spaceID);
    this.getSpaceInformation(this.$route.params.spaceID);
    this.ultraLoop();
  },
  data() {
    return {
      searchWord: "",
      // isAlive: false,
      space: [],
    };
  },
  methods: {
    reload() {
      window.location.reload();
    },
    getSpaceInformation(spaceID: any) {
      return axios
        .get("http://localhost:5678/workspace/" + spaceID)
        .then((res) => {
          console.log(res.data);
          this.space = res.data;
          console.log(this.space);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ultraLoop() {
      setTimeout(() => {
        if (this.searchWord === "hi") {
          this.searchWord = "hello";
        } else {
          this.searchWord = "hi";
        }
        this.ultraLoop();
      }, 2000);
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
