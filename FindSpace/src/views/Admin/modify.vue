<template>
  <ion-page>
    <div>
      Hello wave
    </div>
    <div>
      your workspace id is {{ workspaceID }}
    </div>
    <div>
      thanks
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  //   IonHeader,
  //   IonToolbar,
  //   IonTitle,
  //   IonContent,
  //   IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modify",
  components: {
    // IonHeader,
    // IonToolbar,
    // IonTitle,
    // IonContent,
    IonPage,
    // IonButton,
  },
  beforeMount() {
    console.log(this.$route.params);
    this.workspaceID = this.$route.params.spaceID + "";
  },
  data() {
    return {
      workspaceID: "",
    };
  },
  methods: {
    reload() {
      window.location.reload();
    },
  },
});
</script>
