<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-list lines="full" class="ion-no-margin">
          <ion-list-header lines="full">
            <ion-label>
              <ion-item>
                <!-- can't use icon instead of texts    -->
                <ion-button href="/modify">
                  BACK
                </ion-button>

                <div class="mainIcon">
                  {{ wsname }}
                </div>
              </ion-item>
            </ion-label>
          </ion-list-header>

          <ion-item lines="none">
            <ion-label>Picture 1 link</ion-label>
            <ion-input
              :value="pic1"
              @input="pic1 = $event.target.value"
              placeholder={{pic1}} 
              name="pic1"
            ></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label>Picture 2 link</ion-label>
            <ion-input
              :value="pic2"
              @input="pic2 = $event.target.value"
              placeholder= {{pic2}} 
              name="pic2"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Picture 3 link</ion-label>
            <ion-input
              :value="pic3"
              @input="pic3 = $event.target.value"
              placeholder= {{pic3}} 
              name="pic3"
            ></ion-input>
          </ion-item>
        </ion-list>
        <!-- wait for crowdedness icons    -->
        <ion-item lines="none">
          <ion-label>Total Seats</ion-label>
          <ion-input
            :value="totalseat"
            @input="totalseat = $event.target.value"
            placeholder= {{totalseat}} 
            name="totalseat"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label>Description</ion-label>
          <ion-input
            :value="description"
            @input="description = $event.target.value"
            placeholder={{description}}
            name="description"
          ></ion-input>
        </ion-item>
        <ion-label>
          Menu
          <ion-item lines="none">
            <ion-label>Menu 1 link</ion-label>
            <ion-input
              :value="menu1"
              @input="menu1 = $event.target.value"
              placeholder={{menu1}}
              name="menu1"
            ></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label>Menu 2 link</ion-label>
            <ion-input
              :value="menu2"
              @input="menu2 = $event.target.value"
              placeholder= {{menu2}}
              name="menu2"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Menu 3 link</ion-label>
            <ion-input
              :value="menu3"
              @input="menu3 = $event.target.value"
              placeholder= {{menu3}}
              name="menu3"
            ></ion-input>
          </ion-item>
        </ion-label>
        <ion-label>
          Operating Hours
          <ion-item lines="none">
            <ion-label>Monday</ion-label>
            <ion-input
              :value="monday"
              @input="monday = $event.target.value"
              placeholder= {{monday}}
              name="monday"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Tuesday</ion-label>
            <ion-input
              :value="tuesday"
              @input="tuesday = $event.target.value"
              placeholder= {{tuesday}}
              name="tuesday"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Wednesday</ion-label>
            <ion-input
              :value="wednesday"
              @input="wednesday = $event.target.value"
              placeholder= {{wednesday}}
              name="wednesday"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Thursday</ion-label>
            <ion-input
              :value="thursday"
              @input="thursday = $event.target.value"
              placeholder= {{thursday}}
              name="thursday"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Friday</ion-label>
            <ion-input
              :value="friday"
              @input="friday = $event.target.value"
              placeholder={{friday}}
              name="friday"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Saturday</ion-label>
            <ion-input
              :value="saturday"
              @input="saturday = $event.target.value"
              placeholder={{saturday}}
              name="saturday"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Sunday</ion-label>
            <ion-input
              :value="sunday"
              @input="sunday = $event.target.value"
              placeholder={{sunday}}
              name="sunday"
            ></ion-input>
          </ion-item>
        </ion-label>
        <ion-item lines="none">
          <ion-label>PowerOutlets</ion-label>
          <ion-input
            :value="powerOut"
            @input="powerOut = $event.target.value"
            placeholder={{poweroutlet}}
            name="powerOut"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label>Wifi</ion-label>
          <ion-input
            :value="wifi"
            @input="wifi = $event.target.value"
            placeholder={{wifi}}
            name="wifi"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label>Latitude</ion-label>
          <ion-input
            :value="lat"
            @input="lat = $event.target.value"
            placeholder={{lat}}
            name="latitude"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label>Longitude</ion-label>
          <ion-input
            :value="long"
            @input="long = $event.target.value"
            placeholder={{long}}
            name="longitude"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label>Location Link</ion-label>
          <div name="textfieldBorder">
            <ion-input
              :value="locationLink"
              @input="locationLink = $event.target.value"
              placeholder={{locationlink}}
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
    this.workspaceID = this.$route.params.spaceID + "";
    console.log("hello before mount!");
    axios
      .get("http://localhost:5678/admin/workspace")
      .then((res: any) => {
          console.log(res.data);
          this.wsname = res.data.rows[this.workspaceID].wsname;
          this.description = res.data.rows[this.workspaceID].wsname;
          this.totalseat = res.data.rows[this.workspaceID].totalseat;
          this.poweroutlet = res.data.rows[this.workspaceID].poweroutlet;
          this.wifi = res.data.rows[this.workspaceID].wifi;
          this.lat = res.data.rows[this.workspaceID].ws_lat;
          this.long = res.data.rows[this.workspaceID].ws_long;
          this.locationLink = res.data.rows[this.workspaceID].ws_link;
      })
      .catch((err: any) => {
        console.log(err);
      });
      axios
          .get("http://localhost:5678/admin/ws_menu")
          .then((res: any) => {
              this.menu1 = res.data.rows[this.workspaceID].menu1;
              this.menu2 = res.data.rows[this.workspaceID].menu2;
              this.menu3 = res.data.rows[this.workspaceID].menu3;
          })
      axios
          .get("http://localhost:5678/admin/ws_photo")
          .then((res: any) => {
              console.log("success pic");
              this.pic1 = res.data.rows[this.workspaceID].pic1;
              this.pic2 = res.data.rows[this.workspaceID].pic2;
              this.pic3 = res.data.rows[this.workspaceID].pic3;
          })
      axios
          .get("http://localhost:5678/admin/ws_oh")
          .then((res: any) => {
              this.monday = res.data.rows[this.workspaceID].mon;
              this.tuesday = res.data.rows[this.workspaceID].tue;
              this.wednesday = res.data.rows[this.workspaceID].wed;
              this.thursday = res.data.rows[this.workspaceID].thu;
              this.friday = res.data.rows[this.workspaceID].fri;
              this.saturday = res.data.rows[this.workspaceID].sat;
              this.sunday = res.data.rows[this.workspaceID].sun;
          })
  },

  data() {
    return {
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
      axios.put(
        "http://localhost:5678/admin/workspace/WS_Des/2?ws_des=" +
          this.description
      );
      axios.put(
        "http://localhost:5678/admin/workspace/coordinate/2?" +
          "ws_lat=" +
          this.lat +
          "&ws_long=" +
          this.long
      );
      axios.put(
        "http://localhost:5678/admin/workspace/totalseats/2?" +
          "&totalseat=" +
          this.totalseat
      );
      axios.put(
        "http://localhost:5678/admin/workspace/wifi/2?wifi=" +
          "&ws_des=" +
          this.wifi
      );
      axios.put(
        "http://localhost:5678/admin/workspace/poweroutlets/2?poweroutlet=" +
          this.poweroutlet
      );
      axios.put("http://localhost:5678/admin/pic/photo1/2?photo1=" + this.pic1);
      axios.put("http://localhost:5678/admin/pic/photo2/2?photo2=" + this.pic2);
      axios.put("http://localhost:5678/admin/pic/photo3/2?photo3=" + this.pic3);
      axios.put("http://localhost:5678/admin/pic/menu1/2?menu1=" + this.menu1);
      axios.put("http://localhost:5678/admin/pic/menu2/2?menu2=" + this.menu2);
      axios.put("http://localhost:5678/admin/pic/menu3/2?menu3=" + this.menu3);
      axios.put("http://localhost:5678/admin/ophour/mon/2?mon=" + this.monday);
      axios.put("http://localhost:5678/admin/ophour/tue/2?tue=" + this.tuesday);
      axios.put(
        "http://localhost:5678/admin/ophour/wed/2?wed=" + this.wednesday
      );
      axios.put(
        "http://localhost:5678/admin/ophour/thu/2?thu=" + this.thursday
      );
      axios.put("http://localhost:5678/admin/ophour/fri/2?fri=" + this.friday);
      axios.put(
        "http://localhost:5678/admin/ophour/sat/2?sat=" + this.saturday
      );
      axios.put("http://localhost:5678/admin/ophour/sun/2?sun=" + this.sunday);
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
                .delete("http://localhost:5678/admin/workspace/137")
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
</style>
