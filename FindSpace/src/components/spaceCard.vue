<template>
  <IonCard
    style="max-width:96%;margin-left:2%;background-color:white;border-radius:8px"
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
      <div class="nameAndDistance">
        <div class="spaceName">
          {{ space.wsname }}
        </div>
        <div class="spaceDistance">
          {{ kmFromSpace }}
        </div>
      </div>
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
    </div>
    <div class="spaceFeed">
      {{ feedbackText }}
    </div>
  </IonCard>
</template>

<script lang="ts">
import {
  // IonButton,
  IonIcon,
  IonCard,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "spaceCard",
  components: {
    // IonButton,
    IonIcon,
    IonCard,
  },
  props: ["space"],
  beforeMount() {
    const spaceInfo = this.$props.space;
    this.createFeedBackMSG(spaceInfo);
    this.createDistanceMSG(spaceInfo);
    this.displayCrowdedNess(spaceInfo);
  },
  data() {
    return {
      personIcon1: "cPersonGreen.svg",
      personIcon2: "cPersonLight.svg",
      personIcon3: "cPersonOrange.svg",
      personIcon4: "cPersonRed.svg",
      feedbackText: "",
      kmFromSpace: "",
    };
  },
  methods: {
    showSpaceInfo(id: number) {
      // This one is for admin page
      // this.$router.push("/modify/" + id);

      // This one is for user page
      this.$router.push("/SpaceInfo/" + id);
    },
    createFeedBackMSG(spaceInfo: any) {
      if (spaceInfo.feedbackstatus) {
        this.feedbackText =
          new Date(spaceInfo.feedbacktime).toLocaleTimeString() + " No seats";
      } else {
        this.feedbackText =
          new Date(spaceInfo.feedbacktime).toLocaleTimeString() +
          " Seat(s) available";
      }
    },
    createDistanceMSG(spaceInfo: any) {
      this.kmFromSpace =
        Number((spaceInfo.distance + "").split(".")[0]) / 1000 + " Km";
    },
    displayCrowdedNess(spaceInfo: any) {
      if (spaceInfo.crowdednessstatus == 1) {
        console.log("green");
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPerson.svg";
        this.personIcon3 = "cPerson.svg";
        this.personIcon4 = "cPerson.svg";
      } else if (spaceInfo.crowdednessstatus == 2.4) {
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPersonLight.svg";
        this.personIcon3 = "cPerson.svg";
        this.personIcon4 = "cPerson.svg";
        console.log("light");
      } else if (spaceInfo.crowdednessstatus == 3.6) {
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPersonLight.svg";
        this.personIcon3 = "cPersonOrange.svg";
        this.personIcon4 = "cPerson.svg";
        console.log("orange");
      } else if (spaceInfo.crowdednessstatus == 5) {
        this.personIcon1 = "cPersonGreen.svg";
        this.personIcon2 = "cPersonLight.svg";
        this.personIcon3 = "cPersonOrange.svg";
        this.personIcon4 = "cPersonRed.svg";
        console.log("red");
      }
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
.spacePic {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 104px;
  overflow: hidden;
}
.spaceInfo {
  height: 48px;
  display: flex;
}
.spaceIcon {
  max-width: 48px;
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
.spaceCrowd {
  max-width: 36%;
  padding: 14px 0;
}
.spaceFeed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  height: 24px;
}
.personIcon {
  font-size: 24px;
}
</style>
