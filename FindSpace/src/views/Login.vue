<template>
  <ion-page>
    <!-- <img src="@/assets/img/LoginImg.jpg" /> -->
    <img class="back_picture" :src="require('@/assets/img/LoginImg.jpg')" />
    <div class="login_div">
      <img class="mainIcon" :src="require('@/assets/icon/FindSpaceIcon.png')" />
      <div class="greenBar"></div>
      <div class="login_card">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione commodi voluptatem repudiandae sunt totam corrupti, doloribus architecto itaque repellendus quis corporis deserunt. A veniam beatae cum nisi doloremque nostrum repellendus.
      <ion-button @click="() => router.push('/tabs')" > helloo world </ion-button>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import // IonCard,
// IonPage,
// IonHeader,
// IonToolbar,
// IonTitle,
// IonContent,
// IonImg,
"@ionic/vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  // components: { IonCard },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {},
  // created() {
  //   const geolocation = navigator.geolocation;
  //   geolocation.getCurrentPosition((res) => {
  //     console.log(res.coords.latitude);
  //     console.log(res.coords.longitude);
  //     // go main page
  //     // this.$router.push('/tabs');
  //   });
  // }
};
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
  background-color: rgba(0, 0, 255, 0.349);
  min-width: 100%;
  height: 60%;
  margin-top: 20%;
  margin-bottom: 20%;
  padding-left: 16px;
  padding-right: 16px;
}
.login_card {
  /* position: absolute; */
  color: green;
  background-color: white;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  height: 100%;
}
.greenBar {
  /* position: absolute; */
  background-color: #4a4d3e;
  height: 18px;
  margin-top: 6%;
  min-width: 100%;
}
.mainIcon {
  /* position: absolute;
  margin-left: 43%;
  margin-right: 43%;
  max-height: 20%;
  max-width: 14%; */
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  max-width: 16%;
  align-items: center;
}
</style>
