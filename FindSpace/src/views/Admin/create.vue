<template>
    <ion-page>
        <ion-content :fullscreen="true">
       

                <ion-list lines="full" class="ion-no-margin">
                    <ion-list-header lines="full">
                        <ion-label>
                            <ion-item>
                                <!-- can't use icon instead of texts    -->
                                <ion-button href="/admin">
                                    BACK
                                </ion-button>

                                <div class="mainIcon">
                                    <ion-input :value="wsname"
                                               @input="wsname = $event.target.value"
                                               placeholder="NAME"
                                               name="wsname"></ion-input>
                                </div>

                            </ion-item>
                        </ion-label>
                    </ion-list-header>

                    <ion-item lines="none">
                        <ion-label>Picture 1 link</ion-label>
                        <ion-input :value="pic1"
                                   @input="pic1 = $event.target.value"
                                   placeholder="picture 1 link"
                                   name="pic1"></ion-input>
                    </ion-item>

                    <ion-item lines="none">
                        <ion-label>Picture 2 link</ion-label>
                        <ion-input :value="pic2"
                                   @input="pic2 = $event.target.value"
                                   placeholder="picture 2 link"
                                   name="pic2"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Picture 3 link</ion-label>
                        <ion-input :value="pic3"
                                   @input="pic3 = $event.target.value"
                                   placeholder="picture 3 link"
                                   name="pic3"></ion-input>
                    </ion-item>
                </ion-list>
                <!-- wait for crowdedness icons    -->
                <ion-item lines="none">
                    <ion-label>Total Seats</ion-label>
                    <ion-input :value="totalseat"
                               @input="totalseat = $event.target.value"
                               placeholder="totalseat"
                               name="totalseat"></ion-input>
                </ion-item>
                <ion-item lines="none">
                    <ion-label>Description</ion-label>
                    <ion-input :value="wsdes"
                               @input="wsdes = $event.target.value"
                               placeholder="Description"
                               name="wsdes"></ion-input>
                </ion-item>
                <ion-label>
                    Operating Hours
                    <ion-item lines="none">
                        <ion-label>Monday</ion-label>
                        <ion-input :value="monday"
                                   @input="monday = $event.target.value"
                                   placeholder="00:00 - 00:00"
                                   name="monday"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label>Tuesday</ion-label>
                        <ion-input :value="tuesday"
                                   @input="tuesday = $event.target.value"
                                   placeholder="00:00 - 00:00"
                                   name="tuesday"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label>Wednesday</ion-label>
                        <ion-input :value="wednesday"
                                   @input="wednesday = $event.target.value"
                                   placeholder="00:00 - 00:00"
                                   name="wednesday"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label>Thursday</ion-label>
                        <ion-input :value="thursday"
                                   @input="thursday = $event.target.value"
                                   placeholder="00:00 - 00:00"
                                   name="thursday"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label>Friday</ion-label>
                        <ion-input :value="friday"
                                   @input="friday = $event.target.value"
                                   placeholder="00:00 - 00:00"
                                   name="friday"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label>Saturday</ion-label>
                        <ion-input :value="saturday"
                                   @input="saturday = $event.target.value"
                                   placeholder="00:00 - 00:00"
                                   name="saturday"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label>Sunday</ion-label>
                        <ion-input :value="sunday"
                                   @input="sunday = $event.target.value"
                                   placeholder="00:00 - 00:00"
                                   name="sunday"></ion-input>
                    </ion-item>
                </ion-label>

                <ion-item lines="none">
                    <ion-label>PowerOutlets</ion-label>
                    <ion-input :value="poweroutlet"
                               @input="poweroutlet = $event.target.value"
                               placeholder="XX"
                               name="poweroutlet"></ion-input>
                </ion-item>
                <ion-item lines="none">
                    <ion-label>Wifi</ion-label>
                    <ion-input :value="wifi"
                               @input="wifi = $event.target.value"
                               placeholder="True / False"
                               name="wifi"></ion-input>
                </ion-item>
                
                <ion-item lines="none">
                    <ion-label>Latitude</ion-label>
                    <ion-input :value="lat"
                               @input="lat = $event.target.value"
                               placeholder="latitude"
                               name="latitude"></ion-input>
                </ion-item>
                <ion-item lines="none">
                    <ion-label>Longitude</ion-label>
                    <ion-input :value="long"
                               @input="long = $event.target.value"
                               placeholder="longitude"
                               name="long"></ion-input>
                </ion-item>
                    
                <ion-item lines="none">
                    <ion-label>Location</ion-label>
                    <ion-input :value="location"
                               @input="location = $event.target.value"
                               placeholder="location"
                               name="location"></ion-input>
                </ion-item>
                <ion-item lines="none">
                    <ion-label>Location Link</ion-label>
                    <div name="textfieldBorder">
                        <ion-input :value="locationLink"
                                   @input="locationLink = $event.target.value"
                                   placeholder="location link"
                                   name="locationLink"></ion-input>
                    </div>
                </ion-item>

                <ion-item></ion-item>
            
        </ion-content>
        <form action="/workspace" method="post">
            <ion-fab vertical="bottom" horizontal="center" slot="fixed">
                <ion-button @click="() => onSubmit() ">CREATE</ion-button>
            </ion-fab>
        </form>
    </ion-page>
</template>



<script lang="ts">
            import {
                IonPage,
                //IonList,
                //IonHeader,
                //IonAlert,
                //IonToolbar,
                IonContent,
                // IonButton,
                //IonItemGroup,
                //IonBackButton,

            } from "@ionic/vue";
            //import { useRouter } from "vue-router";
    import { defineComponent } from "vue";
    import axios from "axios";
    export default defineComponent({
        name: "Tab2",
        components: {
            //IonHeader,
            //IonAlert,
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
                wifi: "",
                lat: "",
                long: "",
                location: "",
                locationLink: "",
            };
        },
        methods: {

            reload() {
                window.location.reload();
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
                console.log("Wifi = " + this.wifi);
                console.log("Lat = " + this.lat);
                console.log("Long = " + this.long);
                console.log("Location = " + this.location);
                console.log("Location Link = " + this.locationLink);

                // Delete the thing above and do the authentication here

                //
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
                console.log(endpointUrl);
               /* return axios.post(endpointUrl)
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
              
                axios.get("http://localhost:5678/admin/workspace")
                    .then((res: any) => {
                        console.log(res.data);
                        console.log(res.data.rows[1]);
                    })
                    .catch((err: any) => {
                        console.log(err);
                    });
            },
            created() {
                console.log("please wait");
                console.log(window.localStorage.getItem("pic1"));
                // go main page
                // this.$router.push('/tabs');
            }
        },
        clearLocal() {
            window.localStorage.removeItem("pic1");
            window.localStorage.removeItem("pic2");
            console.log(" cleared");
        },
        logLocal() {
            console.log("pic1 = " + window.localStorage.getItem("pic1"));
            console.log("pic2 = " + window.localStorage.getItem("pic2"));
        }
    })
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
