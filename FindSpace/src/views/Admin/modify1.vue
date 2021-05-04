<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-list lines="full" class="ion-no-margin">
          <ion-list-header lines="full" class="orangeHeader">
            <ion-label>
              <!-- can't use icon instead of texts    -->
              <ion-button href="/modify">
                <ion-icon
                  class="personIcon"
                  :src="require('@/assets/icon/back.svg')"
                >
                </ion-icon>
              </ion-button>

              <div class="mainIcon">

              </div>
            </ion-label>
          </ion-list-header>

          <ion-item lines="none">
            <ion-label color="warning">Picture 1 link</ion-label>
            <ion-input
              :value="pic1"
              @input="pic1 = $event.target.value"
              placeholder="insert new information here"
              name="pic1"
            ></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label color="warning">Picture 2 link</ion-label>
            <ion-input
              :value="pic2"
              @input="pic2 = $event.target.value"
              placeholder="insert new information here"
              name="pic2"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="warning">Picture 3 link</ion-label>
            <ion-input
              :value="pic3"
              @input="pic3 = $event.target.value"
              placeholder="insert new information here"
              name="pic3"
            ></ion-input>
          </ion-item>
        </ion-list>
        <ion-item lines="none">
          <ion-icon
            style="margin-left: 150px;"
            class="personIcon"
            :src="require('@/assets/icon/cPersonGreen.svg')"
          ></ion-icon>
          <ion-icon
            class="personIcon"
            :src="require('@/assets/icon/cPersonLight.svg')"
          ></ion-icon>
          <ion-icon
            class="personIcon"
            :src="require('@/assets/icon/cPersonOrange.svg')"
          ></ion-icon>
          <ion-icon
            class="personIcon"
            :src="require('@/assets/icon/cPersonRed.svg')"
          ></ion-icon>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Total Seats</ion-label>
          <ion-input
            :value="totalseat"
            @input="totalseat = $event.target.value"
            placeholder="insert new information here"
            name="totalseat"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Description</ion-label>
          <ion-input
            :value="description"
            @input="description = $event.target.value"
            placeholder="insert new information here"
            name="description"
          ></ion-input>
        </ion-item>
        <ion-label color="warning" style="margin-left: 15px;">
          Menu
          <ion-item lines="none">
            <ion-label color="warning">Menu 1</ion-label>
            <ion-input
              :value="menu1"
              @input="menu1 = $event.target.value"
              placeholder="insert new information here"
              name="menu1"
            ></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label color="warning">Menu 2</ion-label>
            <ion-input
              :value="menu2"
              @input="menu2 = $event.target.value"
              placeholder="insert new information here"
              name="menu2"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label color="warning">Menu 3</ion-label>
            <ion-input
              :value="menu3"
              @input="menu3 = $event.target.value"
              placeholder="insert new information here"
              name="menu3"
            ></ion-input>
          </ion-item>
        </ion-label>
        <ion-label color="warning" style="margin-left: 15px;">
          Operating Hours
        </ion-label>
        <ion-item lines="none">
          <ion-label color="warning" style="margin-left: 100px;"
            >Monday</ion-label
          >
          <ion-input
            :value="monday"
            @input="monday = $event.target.value"
            placeholder="insert new information here"
            name="monday"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning" style="margin-left: 100px;"
            >Tuesday</ion-label
          >
          <ion-input
            :value="tuesday"
            @input="tuesday = $event.target.value"
            placeholder="insert new information here"
            name="tuesday"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning" style="margin-left: 100px;"
            >Wednesday</ion-label
          >
          <ion-input
            :value="wednesday"
            @input="wednesday = $event.target.value"
            placeholder="insert new information here"
            name="wednesday"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning" style="margin-left: 100px;"
            >Thursday</ion-label
          >
          <ion-input
            :value="thursday"
            @input="thursday = $event.target.value"
            placeholder="insert new information here"
            name="thursday"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning" style="margin-left: 100px;"
            >Friday</ion-label
          >
          <ion-input
            :value="friday"
            @input="friday = $event.target.value"
            placeholder="insert new information here"
            name="friday"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning" style="margin-left: 100px;"
            >Saturday</ion-label
          >
          <ion-input
            :value="saturday"
            @input="saturday = $event.target.value"
            placeholder="insert new information here"
            name="saturday"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning" style="margin-left: 100px;"
            >Sunday</ion-label
          >
          <ion-input
            :value="sunday"
            @input="sunday = $event.target.value"
            placeholder="insert new information here"
            name="sunday"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">PowerOutlets</ion-label>
          <ion-input
            :value="powerOut"
            @input="powerOut = $event.target.value"
            placeholder="insert new information here"
            name="powerOut"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
            <ion-toolbar>
                <ion-segment value="all">
                    <ion-segment-button class="btn" value="all" @click="wifiTrue()">Available</ion-segment-button>
                    <ion-segment-button class="btn" value="favorites" @click="wifiFalse()">Not Available</ion-segment-button>
                </ion-segment>
            </ion-toolbar>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Latitude</ion-label>
          <ion-input
            :value="lat"
            @input="lat = $event.target.value"
            placeholder="insert new information here"
            name="latitude"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Longitude</ion-label>
          <ion-input
            :value="long"
            @input="long = $event.target.value"
            placeholder="insert new information here"
            name="longitude"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Location Link</ion-label>
          <div name="textfieldBorder">
            <ion-input
              :value="locationLink"
              @input="locationLink = $event.target.value"
              placeholder="insert new information here"
              name="locationLink"
            ></ion-input>
          </div>
        </ion-item>

        <ion-item></ion-item>
      </ion-header>
      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-button @click="() => onSubmit()">SAVE</ion-button>
      </ion-fab>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-button @click="presentAlertConfirm()"> DELETE</ion-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  //IonList,
  IonHeader,
  alertController,
  //IonToolbar,
  IonContent,
  // IonButton,
  //IonItemGroup,
  //IonBackButton,
} from "@ionic/vue";
//import { useRouter } from "vue-router";
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Tab2",
  components: {
    IonHeader,

    //IonList,
    //IonToolbar,
    IonContent,
    IonPage,
    //IonItemGroup,
    //IonButton,
    //IonBackButton,
  },
  beforeMount() {
    console.log(this.$route.params.spaceID);
      this.workspaceID = "" + this.$route.params.spaceID;
      window.localStorage.setItem("workspaceID", "" + this.workspaceID);
    console.log("hello before mount!");
  },

  data() {
    return {
      // backendURL: "http://localhost:5678",
      backendURL: "https://find-space-app.herokuapp.com",
      wsname: "",
      workspaceID: "",
      pic1: "",
      pic2: "",
      pic3: "",
      menu1: "",
      menu2: "",
      menu3: "",
      totalseat: "",
      description: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
      poweroutlet: "",
      wifi: "",
      lat: "",
      long: "",
      location: "",
      locationLink: "",
      workspacename: "",
    };
  },
    methods: {
      wifiTrue() {
          this.wifi = "true";
          console.log(this.wifi);
          window.localStorage.setItem('wifi', this.wifi);
          console.log("" + window.localStorage.getItem("wifi"));
      },
      wifiFalse() {
          this.wifi = "false";
          console.log(this.wifi);
          window.localStorage.setItem('wifi', this.wifi);
          console.log("" + window.localStorage.getItem("wifi"));
      },
    reload() {
      window.location.reload();
    },
    onSubmit() {
      console.log("pic1 = " + this.pic1);
      console.log("pic2 = " + this.pic2);
      console.log("pic3 = " + this.pic3);
      console.log("TotalSeats = " + this.totalseat);
      console.log("Description = " + this.description);
      console.log("Monday = " + this.monday);
      console.log("Tuesday = " + this.tuesday);
      console.log("Wednesday = " + this.wednesday);
      console.log("Thursday = " + this.thursday);
      console.log("Friday = " + this.friday);
      console.log("Saturday = " + this.saturday);
      console.log("Sunday = " + this.sunday);
      console.log("PowerOutlets = " + this.poweroutlet);
      console.log("Wifi = " + this.wifi);
      console.log("Location = " + this.location);
      console.log("Location Link = " + this.locationLink);

      // Delete the thing above and do the authentication here

      //
      window.localStorage.setItem("pic1", this.pic1);
      window.localStorage.setItem("pic2", this.pic2);
      window.localStorage.setItem("pic3", this.pic3);
      window.localStorage.setItem("menu1", this.menu1);
      window.localStorage.setItem("menu2", this.menu2);
      window.localStorage.setItem("menu3", this.menu3);
      window.localStorage.setItem("Total Seats", this.totalseat);
      window.localStorage.setItem("Description", this.description);
      window.localStorage.setItem("Monday: ", this.monday);
      window.localStorage.setItem("Tuesday: ", this.tuesday);
      window.localStorage.setItem("Wednesday: ", this.wednesday);
      window.localStorage.setItem("Thursday: ", this.thursday);
      window.localStorage.setItem("Friday: ", this.friday);
      window.localStorage.setItem("Saturday: ", this.saturday);
      window.localStorage.setItem("Sunday: ", this.sunday);
      window.localStorage.setItem("PowerOutlets: ", this.poweroutlet);
      window.localStorage.setItem("Wifi:", this.wifi);
      window.localStorage.setItem("lat", this.lat);
      window.localStorage.setItem("long", this.long);
      window.localStorage.setItem("location: ", this.location);
      window.localStorage.setItem("location Link: ", this.locationLink);
      /*
                this.ophours.pop();
                this.ophours.push(this.monday);
                this.ophours.push(this.tuesday);
                this.ophours.push(this.wednesday);
                this.ophours.push(this.thursday);
                this.ophours.push(this.friday);
                this.ophours.push(this.saturday);
                this.ophours.push(this.sunday);
                
                console.log(this.ophours);*/
      /*
                console.log('kuy');
                 console.log("this.ophours");
                console.log(this.ophours);
                this.ophours.map((ophour) => {
                    console.log("ophours=" + ophour);
                });*/
        if (this.description != "") {
            axios.put(
                this.backendURL +
                "/admin/workspace/WS_Des/" +
                this.workspaceID +
                "?ws_des=" +
                this.description
            );
        }
        if (this.lat != "" || this.long != "") {
            axios.put(
                this.backendURL +
                "/admin/workspace/coordinate/" +
                this.workspaceID +
                " ? " +
                "ws_lat=" +
                this.lat +
                "&ws_long=" +
                this.long
            );
        }
        if (this.totalseat != "") {
            axios.put(
                this.backendURL +
                "/admin/workspace/totalseats/" +
                this.workspaceID +
                "?" +
                "&totalseat=" +
                this.totalseat
            );
        }
        if (this.wifi != "null") {
            axios.put(
                this.backendURL +
                "/admin/workspace/wifi/" +
                this.workspaceID +
                "?wifi=" +
                "&ws_des=" +
                this.wifi
            );
        }
        if (this.poweroutlet != "") {
            axios.put(
                this.backendURL +
                "/admin/workspace/poweroutlets/" +
                this.workspaceID +
                "?poweroutlet=" +
                this.poweroutlet
            );
        }
        if (this.pic1 != "") {
            axios.put(
                this.backendURL +
                "/admin/pic/photo1/" +
                this.workspaceID +
                "?photo1=" +
                this.pic1
            );
        }
        if (this.pic2 != "") {
            axios.put(
                this.backendURL +
                "/admin/pic/photo2/" +
                this.workspaceID +
                "?photo2=" +
                this.pic2
            );
        }
        if (this.pic3 != "") {
            axios.put(
                this.backendURL +
                "/admin/pic/photo3/" +
                this.workspaceID +
                "?photo3=" +
                this.pic3
            );
        }
        if (this.menu1 != "") {
            axios.put(
                this.backendURL +
                "/admin/pic/menu1/" +
                this.workspaceID +
                "?menu1=" +
                this.menu1
            );
        }
        if (this.menu2 != "") {
            axios.put(
                this.backendURL +
                "/admin/pic/menu2/" +
                this.workspaceID +
                "?menu2=" +
                this.menu2
            );
        }
        if (this.menu3 != "") {
            axios.put(
                this.backendURL +
                "/admin/pic/menu3/" +
                this.workspaceID +
                "?menu3=" +
                this.menu3
            );
        }
        if (this.monday != "") {
            axios.put(
                this.backendURL +
                "/admin/ophour/mon/" +
                this.workspaceID +
                "?mon=" +
                this.monday
            );
        }
        if (this.tuesday != "") {
            axios.put(
                this.backendURL +
                "/admin/ophour/tue/" +
                this.workspaceID +
                "?tue=" +
                this.tuesday
            );
        }
        if (this.wednesday != "") {
            axios.put(
                this.backendURL +
                "/admin/ophour/wed/" +
                this.workspaceID +
                "?wed=" +
                this.wednesday
            );
        }
        if (this.thursday != "") {
            axios.put(
                this.backendURL +
                "/admin/ophour/thu/" +
                this.workspaceID +
                "?thu=" +
                this.thursday
            );
        }
        if (this.friday != "") {
            axios.put(
                this.backendURL +
                "/admin/ophour/fri/" +
                this.workspaceID +
                "?fri=" +
                this.friday
            );
        }
        if (this.saturday != "") {
            axios.put(
                this.backendURL +
                "/admin/ophour/sat/" +
                this.workspaceID +
                "?sat=" +
                this.saturday
            );
        }
        if (this.sunday != "") {
            axios.put(
                this.backendURL +
                "/admin/ophour/sun/" +
                this.workspaceID +
                "?sun=" +
                this.sunday
            );
        }
    },
    /*
            deleteSpace() {
                axios.delete("http://localhost:5678/admin/workspace/8").then((res) => {
                    console.log(res);
            })
            .catch((err) => {
            console.log(err);
          }
            },
            */
    async presentAlertConfirm() {
      //axios.delete("http://localhost:5678/admin/workspace/10");
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Confirm!",
        message: "Are you sure you want to delete this location?",
        buttons: [
          {
            text: "YES",
            role: "Confirm",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm Okay:");
              axios
                .delete(this.backendURL + "/admin/workspace/137")
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            },
          },
          {
            text: "NO",
            handler: () => {
              console.log("Confirm Cancel");
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>

<style lang="css" scoped>
.mainIcon {
  align-items: end;
}

.textFieldBorder {
  border-bottom: #4a4d3e;
  color: #4a4d3e;
  border-width: thin;
  border-style: solid;
  border-radius: 3px;
  margin-top: 10%;
}
.orangeHeader {
  background-color: #e05900;
}
</style>
