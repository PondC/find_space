<template>
  <div class="mainList" @click="showSpaceInfo(space.workspaceid)">
    <div class="spaceInfo">
      <div class="spaceIcon">
        <!-- <img src="https://picsum.photos/100" /> -->
        <img :src="iconPic ? iconPic : loremPicsum" />
      </div>
      <div class="nameAndDistance">
        <div class="spaceName">
          {{ space.wsname }}
        </div>
        <div class="spaceDistance">
          {{ kmFromSpace }}
        </div>
      </div>
      <!-- <div class="spaceCrowd">
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
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import // IonButton,
//   IonIcon,
//   IonCard,
"@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "searchingList",
  components: {
    // IonButton,
    // IonIcon,
    // IonCard,
  },
  props: ["space", "userLat", "userLong"],
  beforeMount() {
    const spaceInfo = this.$props.space;
    // this.createFeedBackMSG(spaceInfo);
    this.createDistanceMSG(spaceInfo);
    // this.displayCrowdedNess(spaceInfo);
  },
  data() {
    return {
      kmFromSpace: "",
      loremPicsum: "https://picsum.photos/100",
      // backendURL: "http://localhost:5678",
      backendURL: "https://find-space-app.herokuapp.com",
      iconPic: "",
    };
  },
  methods: {
    showSpaceInfo(id: number) {
      // This one is for admin page
      //   this.$router.push("/modify/" + id);
      console.log(id);
      // This one is for user page
      // this.$router.push("/SpaceInfo/" + id);
    },
    createDistanceMSG(spaceInfo: any) {
      const wsLat = spaceInfo.ws_lat;
      console.log("wsLat");
      console.log(wsLat);
      const wsLong = spaceInfo.ws_long;
      console.log("wsLong");
      console.log(wsLong);
      console.log(this.$props.userLat);
      console.log(this.$props.userLong);
      const R = 6378.137;
      const dLat =
        (this.$props.userLat * Math.PI) / 180 - (wsLat * Math.PI) / 180;
      const dLon =
        (this.$props.userLong * Math.PI) / 180 - (wsLong * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((wsLat * Math.PI) / 180) *
          Math.cos((this.$props.userLat * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c;
      const distanceInM = d * 1000;
      this.kmFromSpace =
        Number((distanceInM + "").split(".")[0]) / 1000 + " Km";
    },
    getPic(spaceID: any) {
      const url = this.backendURL + "/wsdetail/showpic/" + spaceID;
      return axios
        .get(url)
        .then((res) => {
          this.iconPic = res.data.photo2;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
<style lang="css" scoped>
.spaceList {
  height: 80%;
  padding-top: 8px;
}
.spaceCard {
  border-radius: 12px;
  background-color: white;
  max-width: 96%;
  height: 176px;
  margin-left: 2%;
}
.spaceInfo {
  height: 48px;
  display: flex;
}
.spaceIcon {
  max-width: 48px;
  border-radius: 100px;
  overflow: hidden;
}
.nameAndDistance {
  padding-left: 4px;
  max-width: 144px;
  display: flex;
  flex-direction: column;
}
.spaceName {
  overflow: hidden;
  height: 50%;
  color: #4a4d3e;
}
.spaceDistance {
  overflow: hidden;
  height: 50%;
  color: #4a4d3e;
}
.personIcon {
  font-size: 24px;
}
.mainList {
  max-width: 96%;
  margin-left: 2%;
  margin-top: 8px;
  padding-bottom: 8px;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: #4a4d3e;
}
</style>
