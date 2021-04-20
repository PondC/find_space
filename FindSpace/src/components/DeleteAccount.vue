<template>
  <ion-page>
    <div>
      Are you sure to delete your account?
      <button @click="cancelDelete()">
        No
      </button>
      <button @click="confirmDelete()">
        Yes
      </button>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  //   IonInput,
  // IonLabel,
  //   IonButton,
  IonPage,
  //   IonItem,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DeleteAccountMessage",
  components: {
    IonPage,
    // IonInput,
    // IonLabel,
    // IonButton,
    // IonItem,
  },
  beforeMount() {
    console.log("this is delete prompt");
  },
  data() {
    return {
      userName: "",
      passWord: "",
      showPanel: true,
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    cancelDelete() {
      console.log("will do nothing");
    },
    confirmDelete() {
      console.log("please wait to be deleted");
      console.log("call clear local here");
    },
    clearLocal() {
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("password");
      console.log(" cleared");
    },
    logLocal() {
      console.log("username = " + window.localStorage.getItem("username"));
      console.log("password = " + window.localStorage.getItem("password"));
    },
    reload() {
      window.location.reload();
    },
  },
});
</script>

<style lang="css" scoped>
.back_picture {
  /* background-image: url("https://i.imgur.com/BNlw2lj.jpg"); */
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}
.login_div {
  position: absolute;
  min-width: 100%;
  height: 60%;
  margin-top: 40%;
  margin-bottom: 20%;
  padding-left: 16px;
  padding-right: 16px;
}
.login_card {
  color: #4a4d3e;
  background-color: white;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  height: 90%;
  padding-top: 8%;
}
.sub_login_card {
  width: 80%;
  margin-left: 10%;
  margin-left: 10%;
  margin-right: 10%;
  /* background-color: #9da778; */
  align-items: center;
}
/* .sub_login_card_title {
  margin-left: 50%;
  margin-right: 50%;
} */
.greenBar {
  /* position: absolute; */
  background-color: #4a4d3e;
  height: 18px;
  margin-top: 6%;
  min-width: 100%;
}
.mainIcon {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  max-width: 16%;
  align-items: center;
}
.textFieldBorder {
  border-color: #4a4d3e;
  color: #4a4d3e;
  border-width: thin;
  border-style: solid;
  border-radius: 3px;
  margin-top: 10%;
}
</style>
