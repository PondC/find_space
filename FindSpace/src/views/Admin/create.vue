<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-list lines="full" class="ion-no-margin">
          <ion-list-header lines="full" class="orangeHeader">
            <ion-button href="/admin" color="danger">❮</ion-button>
            <div class="spaceName">
              <ion-input
                style="margin-left: 110px; font-weight: bold; font-size:25px;"
                :value="wsname"
                @input="wsname = $event.target.value"
                placeholder="NAME"
                name="wsname"
              ></ion-input>
            </div>
          </ion-list-header>
          <ion-item lines="none">
            <ion-label color="warning">Picture 1 link</ion-label>
            <ion-input
              :value="pic1"
              @input="pic1 = $event.target.value"
              placeholder="Enter picture 1 link"
              name="pic1"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label color="warning">Picture 2 link</ion-label>
            <ion-input
              :value="pic2"
              @input="pic2 = $event.target.value"
              placeholder="Enter picture 2 link"
              name="pic2"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="warning">Picture 3 link</ion-label>
            <ion-input
              :value="pic3"
              @input="pic3 = $event.target.value"
              placeholder="Enter picture 3 link"
              name="pic3"
            ></ion-input>
          </ion-item>
        </ion-list>
        <ion-item lines="none">
          <ion-icon
            style="margin-left: 150px;"
            class="personIcon"
            :src="require('@/assets/icon/cPerson.svg')"
          ></ion-icon>
          <ion-icon
            class="personIcon"
            :src="require('@/assets/icon/cPerson.svg')"
          ></ion-icon>
          <ion-icon
            class="personIcon"
            :src="require('@/assets/icon/cPerson.svg')"
          ></ion-icon>
          <ion-icon
            class="personIcon"
            :src="require('@/assets/icon/cPerson.svg')"
          ></ion-icon>
        </ion-item>

        <!-- wait for crowdedness icons    -->
        <ion-item lines="none">
          <ion-label color="warning">Total Seats</ion-label>
          <ion-input
            :value="totalseat"
            @input="totalseat = $event.target.value"
            placeholder="Enter total seats"
            name="totalseat"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Description</ion-label>
          <ion-input
            :value="wsdes"
            @input="wsdes = $event.target.value"
            placeholder="Enter description"
            name="wsdes"
          ></ion-input>
        </ion-item>
        <ion-label color="warning" style="margin-left: 15px;">
          Menu
          <ion-item lines="none">
            <ion-label color="warning">Menu1</ion-label>
            <ion-input
              :value="menu1"
              @input="menu1 = $event.target.value"
              placeholder="Add menu1"
              name="menu1"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label color="warning">Menu2</ion-label>
            <ion-input
              :value="menu2"
              @input="menu2 = $event.target.value"
              placeholder="Add menu2"
              name="menu2"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label color="warning">Menu3</ion-label>
            <ion-input
              :value="menu3"
              @input="menu3 = $event.target.value"
              placeholder="Add menu3"
              name="menu3"
            ></ion-input>
          </ion-item>
        </ion-label>
        <ion-label color="warning" style="margin-left: 15px;">
          Operating Hours
          <ion-item lines="none">
            <ion-label color="warning" style="margin-left: 100px;"
              >Monday</ion-label
            >
            <ion-input
              :value="monday"
              @input="monday = $event.target.value"
              placeholder="00:00 - 00:00"
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
              placeholder="00:00 - 00:00"
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
              placeholder="00:00 - 00:00"
              name="wednesday"
            ></ion-input>
          </ion-item>
        </ion-label>
        <ion-item lines="none">
          <ion-label color="warning" style="margin-left: 100px;"
            >Thursday</ion-label
          >
          <ion-input
            :value="thursday"
            @input="thursday = $event.target.value"
            placeholder="00:00 - 00:00"
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
            placeholder="00:00 - 00:00"
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
            placeholder="00:00 - 00:00"
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
            placeholder="00:00 - 00:00"
            name="sunday"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">PowerOutlets</ion-label>
          <ion-input
            :value="poweroutlet"
            @input="poweroutlet = $event.target.value"
            placeholder="Enter number"
            name="poweroutlet"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Wifi</ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-toolbar>
            <ion-segment value="all">
              <ion-segment-button class="btn" value="all" @click="wifiTrue()"
                >Available</ion-segment-button
              >
              <ion-segment-button class="btn" value="favorites" @click="wifiFalse()"
                >Not Available</ion-segment-button
              >
            </ion-segment>
          </ion-toolbar>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Latitude</ion-label>
          <ion-input
            :value="lat"
            @input="lat = $event.target.value"
            placeholder="Enter latitude"
            name="latitude"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Longitude</ion-label>
          <ion-input
            :value="long"
            @input="long = $event.target.value"
            placeholder="Enter longitude"
            name="long"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Location</ion-label>
          <ion-input
            :value="location"
            @input="location = $event.target.value"
            placeholder="Enter location"
            name="location"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label color="warning">Location Link</ion-label>
          <div name="textfieldBorder">
            <ion-input
              :value="locationLink"
              @input="locationLink = $event.target.value"
              placeholder="Enter location link"
              name="locationLink"
            ></ion-input>
          </div>
        </ion-item>
        <ion-item></ion-item>
      </ion-header>
    </ion-content>
    <form action="/workspace" method="post">
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-button @click="() => onSubmit()" color="tertiary" shape="round"
          >CREATE</ion-button
        >
      </ion-fab>
    </form>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  //IonList,
  IonHeader,
  //IonAlert,
  // IonToolbar,
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
    // IonAlert,
    //IonList,
    //IonToolbar,
    IonContent,
    IonPage,
    //IonItemGroup,
    //IonButton,
    //IonBackButton,
  },
  data() {
    return {
      wsname: "",
      pic1: "",
      pic2: "",
      pic3: "",
      menu1: "",
      menu2: "",
      menu3: "",
      totalseat: "",
      wsdes: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
      poweroutlet: "",
      wifi: "true",
      lat: "",
      long: "",
      location: "",
      locationLink: "",
        tempwifi: "",
        workspaceid: 0,
    };
  },
  methods: {
    reload() {
      window.location.reload();
      },
     wifiTrue() {
         window.localStorage.setItem('wifi', "true");
      },
     wifiFalse() {
         window.localStorage.setItem('wifi', "false");
      },
       insertWeak() {
          //window.localStorage.setItem("wsid", this.wsid);
          window.localStorage.setItem("Monday: ", this.monday);
          window.localStorage.setItem("Tuesday: ", this.tuesday);
          window.localStorage.setItem("Wednesday: ", this.wednesday);
          window.localStorage.setItem("Thursday: ", this.thursday);
          window.localStorage.setItem("Friday: ", this.friday);
          window.localStorage.setItem("Saturday: ", this.saturday);
          window.localStorage.setItem("Sunday: ", this.sunday);
          window.localStorage.setItem("pic1", this.pic1);
          window.localStorage.setItem("pic2", this.pic2);
          window.localStorage.setItem("pic3", this.pic3);
          window.localStorage.setItem("menu1", this.menu1);
            window.localStorage.setItem("menu2", this.menu2);
            window.localStorage.setItem("menu3", this.menu3);
        //wsid must not be serial for it to not need hardcode
           /*
        axios.post("http://localhost:5678/admin/pic?photo1=" + this.pic1 + "&photo2=" + this.pic2 + "&photo3=" + this.pic3 );
        axios.post("http://localhost:5678/admin/menu?menu1=" + this.menu1 + "&menu2=" + this.menu2 + "&menu3=" + this.menu3 );
        axios.post("http://localhost:5678/admin/ophour?mon=" + this.monday + "&tue=" + this.tuesday + "&wed=" + this.wednesday + "&thu=" + this.thursday + "&fri=" + this.friday + "&sat=" + this.saturday + "&sun=" + this.sunday );
     */
           axios.get("http://localhost:5678/admin/workspaceid?wsname=" + this.wsname + "&ws_des=" + this.wsdes + "&ws_lat=" + this.lat + "&ws_long=" + this.long + "&ws_link=" + this.locationLink + "&totalseat=" + this.totalseat + "&wifi=" + this.wifi + "&poweroutlet=" + this.poweroutlet)
               .then((res: any) => {
                   this.workspaceid = res.data.rows;
                   console.log(res.data.rows);
              })
           axios.put("http://localhost:5678/admin/pic/photo1/" + this.workspaceid + " ? photo1 = " + this.pic1);
          axios.put("http://localhost:5678/admin/pic/photo2/ " + this.workspaceid + "?photo2=" + this.pic2);
          axios.put("http://localhost:5678/admin/pic/photo3/ " + this.workspaceid + "?photo3=" + this.pic3);
          axios.put("http://localhost:5678/admin/pic/menu1/" + this.workspaceid + "?menu1=" + this.menu1);
          axios.put("http://localhost:5678/admin/pic/menu2/" + this.workspaceid + "?menu2=" + this.menu2);
          axios.put("http://localhost:5678/admin/pic/menu3/" + this.workspaceid + "?menu3=" + this.menu3);
          axios.put("http://localhost:5678/admin/ophour/mon/" + this.workspaceid + "?mon=" + this.monday);
          axios.put("http://localhost:5678/admin/ophour/tue/" + this.workspaceid + "?tue=" + this.tuesday);
          axios.put(
            "http://localhost:5678/admin/ophour/wed/" + this.workspaceid + "?wed=" + this.wednesday
          );
          axios.put(
            "http://localhost:5678/admin/ophour/thu/" + this.workspaceid + "?thu=" + this.thursday
          );
          axios.put("http://localhost:5678/admin/ophour/fri/" + this.workspaceid + "?fri=" + this.friday);
          axios.put(
            "http://localhost:5678/admin/ophour/sat/" + this.workspaceid + "?sat=" + this.saturday
          );
          axios.put("http://localhost:5678/admin/ophour/sun/" + this.workspaceid + "?sun=" + this.sunday);
     },
      onSubmit() {
      console.log("wsname = " + this.wsname);
      console.log("pic1 = " + this.pic1);
      console.log("pic2 = " + this.pic2);
      console.log("pic3 = " + this.pic3);
      console.log("TotalSeats = " + this.totalseat);
      console.log("Description = " + this.wsdes);
      console.log("Monday = " + this.monday);
      console.log("Tuesday = " + this.tuesday);
      console.log("Wednesday = " + this.wednesday);
      console.log("Thursday = " + this.thursday);
      console.log("Friday = " + this.friday);
      console.log("Saturday = " + this.saturday);
      console.log("Sunday = " + this.sunday);
      console.log("PowerOutlets = " + this.poweroutlet);
      console.log("Wifi = " + localStorage.getItem('wifi'));
      console.log("Location = " + this.location);
      console.log("Location Link = " + this.locationLink);

      // Delete the thing above and do the authentication here

          //
          this.wifi = "" + localStorage.getItem('wifi');
      window.localStorage.setItem("wsname", this.wsname);
      window.localStorage.setItem("pic1", this.pic1);
      window.localStorage.setItem("pic2", this.pic2);
      window.localStorage.setItem("pic3", this.pic3);
      window.localStorage.setItem("menu1", this.menu1);
      window.localStorage.setItem("menu2", this.menu2);
      window.localStorage.setItem("menu3", this.menu3);
      window.localStorage.setItem("Total Seats", this.totalseat);
      window.localStorage.setItem("Description", this.wsdes);
      window.localStorage.setItem("Monday: ", this.monday);
      window.localStorage.setItem("Tuesday: ", this.tuesday);
      window.localStorage.setItem("Wednesday: ", this.wednesday);
      window.localStorage.setItem("Thursday: ", this.thursday);
      window.localStorage.setItem("Friday: ", this.friday);
      window.localStorage.setItem("Saturday: ", this.saturday);
      window.localStorage.setItem("Sunday: ", this.sunday);
      window.localStorage.setItem("PowerOutlets: ", this.poweroutlet);
      //window.localStorage.setItem("Wifi:", localStorage.getItem('wifi'));
      window.localStorage.setItem("lat", this.lat);
      window.localStorage.setItem("long", this.long);
      window.localStorage.setItem("location: ", this.location);
      window.localStorage.setItem("location Link: ", this.locationLink);

      axios.post(
        "http://localhost:5678/admin/workspace?wsname=" +
          this.wsname +
          "&ws_des=" +
          this.wsdes +
          "&ws_lat=" +
          this.lat +
          "&ws_long=" +
          this.long +
          "&ws_link=" +
          this.locationLink +
          "&totalseat=" +
          this.totalseat +
          "&wifi=" +
          this.wifi +
          "&poweroutlet=" +
          this.poweroutlet
          );
          this.insertWeak();
      /*
        axios.get("http://localhost:5678/admin/workspace")
        .then((res) => {                //
                window.localStorage.setItem("wsname", this.wsname);
                window.localStorage.setItem("pic1", this.pic1);
                window.localStorage.setItem("pic2", this.pic2);
                window.localStorage.setItem("pic3", this.pic3);
                window.localStorage.setItem("Total Seats", this.totalseat);
                window.localStorage.setItem("Description", this.wsdes);
                window.localStorage.setItem("Monday: ", this.monday);
                window.localStorage.setItem("Tuesday: ", this.tuesday);
                window.localStorage.setItem("Wednesday: ", this.wednesday);
                window.localStorage.setItem("Thursday: ", this.thursday);
                window.localStorage.setItem("Friday: ", this.friday);
                window.localStorage.setItem("Saturday: ", this.saturday);
                window.localStorage.setItem("Sunday: ", this.sunday);
                window.localStorage.setItem("PowerOutlets: ", this.poweroutlet);
                window.localStorage.setItem("Wifi:", this.wifi);
                window.localStorage.setItem("Long: ", this.long);
                window.localStorage.setItem("lat:", this.lat);
                window.localStorage.setItem("location: ", this.location);
                window.localStorage.setItem("location Link: ", this.locationLink);

                const endpointUrl = "http://localhost:5678/admin/workspace?wsname=" + this.wsname + "&ws_des=" + this.wsdes + "&ws_lat=" + this.lat + "&ws_long=" + this.long + "&ws_link=" + this.locationLink + "&totalseat=" + this.totalseat + "&wifi=" + this.wifi + "&poweroutlet=" + this.poweroutlet;
                //const photos = "http://localhost:5678/admin/pic?photo1=" + this.pic1 + "&photo2=" + this.pic2 + "&photo3=" + this.pic3 + "/:WorkspaceID";
                //console.log(endpointUrl);
                axios.post(endpointUrl);
                /*axios.post(photos)
                    .then((res: any) => {
                        console.log(res.data);
                        console.log("success");
                    })
                    .catch((err: any) => {
                        console.log(err);
                        console.log("error");
                    });
                */

      //get data from db
      /*
                axios.get("http://localhost:5678/admin/workspace")
                    .then((res: any) => {
                        console.log(res.data);
                        console.log(res.data.rows[1]);
                    })
                    .catch((err: any) => {
                        console.log(err);
                    });*/
    },

    /*postworkspacePhoto() {

            },*/
    created() {
      console.log("please wait");
      console.log(window.localStorage.getItem("pic1"));
      // go main page
      // this.$router.push('/tabs');
    },
    //axios.post("http://localhost:5678/admin/pic?photo1=" + this.pic1 + "&photo2=" + this.pic2 + "&photo3=" + this.pic3 + "workspaceID=" + this.createdID);
    //axios.post("http://localhost:5678/admin/menu?menu1=" + this.menu1 + "&menu2=" + this.menu2 + "&menu3=" + this.menu3 + "workspaceID=" + this.createdID);
  },
  
  
  created() {
    console.log("please wait");
    console.log(window.localStorage.getItem("pic1"));
    // go main page
    // this.$router.push('/tabs');
  },
});
</script>
<style lang="css" scoped>
.spaceName {
  align-items: center;
  color: #ffffff;
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
.btn:active {
  background: #949f74;
}
</style>
