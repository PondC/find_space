<template>
  <ion-page>
    <ion-tabs>
      <!-- <ion-tab-bar class="mainBar" slot="bottom" > -->
      <ion-tab-bar class="mainBar">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <img
            class="mainIcon"
            :src="require('@/assets/icon/FindSpaceIcon.png')"
          />
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
        </ion-tab-button> 
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage } from "@ionic/vue";
import { ellipse, square, triangle } from "ionicons/icons";

export default {
  name: "Tabs",
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
    };
  },
};
</script>

<style lang="css" scoped>
.mainBar {
  --background: #d16110;
  --color: #10b4d1;
  --color-selected: green;
  max-height: 40px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.mainIcon {
  max-height: 36px;
  max-width: 36px;
}
</style>
