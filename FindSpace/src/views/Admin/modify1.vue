<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">

                <ion-list lines="full" class="ion-no-margin">
                    <ion-list-header lines="full">
                        <ion-label>
                            <ion-item>
                                <!-- can't use icon instead of texts    -->
                                <ion-button href="/modify">
                                    BACK
                                </ion-button>

                                <div class="mainIcon">
                                    <ion-input :value="workspaceName"
                                               @input="workspaceName = $event.target.value"
                                               placeholder="NAME"
                                               name="workspaceName"></ion-input>
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
                    <ion-input :value="totSeats"
                               @input="totSeats = $event.target.value"
                               placeholder="TotalSeats"
                               name="totSeats"></ion-input>
                </ion-item>
                <ion-item lines="none">
                    <ion-label>Description</ion-label>
                    <ion-input :value="description"
                               @input="description = $event.target.value"
                               placeholder="Description"
                               name="description"></ion-input>
                </ion-item>
                <ion-label>
          Menu
          <ion-item lines="none">
            <ion-label>Menu1</ion-label>
            <ion-input
              :value="menu1"
              @input="menu1 = $event.target.value"
              placeholder="mmenu1"
              name="menu1"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Tuesday</ion-label>
            <ion-input
              :value="menu2"
              @input="menu2 = $event.target.value"
              placeholder="menu2"
              name="menu2"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Wednesday</ion-label>
            <ion-input
              :value="menu3"
              @input="menu3 = $event.target.value"
              placeholder="menu3"
              name="menu3"
            ></ion-input>
          </ion-item>
        </ion-label>
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
                    <ion-input :value="powerOut"
                               @input="powerOut = $event.target.value"
                               placeholder="00:00 - 00:00"
                               name="powerOut"></ion-input>
                </ion-item>
                <ion-item lines="none">
                    <ion-label>Wifi</ion-label>
                    <ion-input :value="wifi"
                               @input="wifi = $event.target.value"
                               placeholder="Available"
                               name="wifi"></ion-input>
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
            </ion-header>
            <ion-fab vertical="bottom" horizontal="start" slot="fixed">
                <ion-button @click="() => onSubmit()">SAVE</ion-button>
            </ion-fab>
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-button @click="presentAlertConfirm()">DELETE</ion-button>
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

        data() {
            return {
                pic1: "",
                pic2: "",
                pic3: "",
                totSeats: "",
                description: "",
                monday: "",
                tuesday: "",
                wednesday: "",
                thursday: "",
                friday: "",
                saturday: "",
                sunday: "",
                powerOut: "",
                wifi: "",
                location: "",
                locationLink: "",
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
                console.log("TotalSeats = " + this.totSeats);
                console.log("Description = " + this.description);
                console.log("Monday = " + this.monday);
                console.log("Tuesday = " + this.tuesday);
                console.log("Wednesday = " + this.wednesday);
                console.log("Thursday = " + this.thursday);
                console.log("Friday = " + this.friday);
                console.log("Saturday = " + this.saturday);
                console.log("Sunday = " + this.sunday);
                console.log("PowerOutlets = " + this.powerOut);
                console.log("Wifi = " + this.wifi);
                console.log("Location = " + this.location);
                console.log("Location Link = " + this.locationLink);

                // Delete the thing above and do the authentication here

                //
                window.localStorage.setItem("pic1", this.pic1);
                window.localStorage.setItem("pic2", this.pic2);
                window.localStorage.setItem("pic3", this.pic3);
                window.localStorage.setItem("Total Seats", this.totSeats);
                window.localStorage.setItem("Description", this.description);
                window.localStorage.setItem("Monday: ", this.monday);
                window.localStorage.setItem("Tuesday: ", this.tuesday);
                window.localStorage.setItem("Wednesday: ", this.wednesday);
                window.localStorage.setItem("Thursday: ", this.thursday);
                window.localStorage.setItem("Friday: ", this.friday);
                window.localStorage.setItem("Saturday: ", this.saturday);
                window.localStorage.setItem("Sunday: ", this.sunday);
                window.localStorage.setItem("PowerOutlets: ", this.powerOut);
                window.localStorage.setItem("Wifi:", this.wifi);
                window.localStorage.setItem("location: ", this.location);
                window.localStorage.setItem("location Link: ", this.locationLink);

            },
            async presentAlertConfirm() {
              const alert = await alertController
                .create({
                  cssClass: 'my-custom-class',
                  header: 'Confirm!',
                  message: 'Are you sure you want to delete this location?',
                  buttons: [
                    {
                      text: 'YES',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: blah => {
                        console.log('Confirm Cancel:', blah)
                      },
                    },
                    {
                      text: 'NO',
                      handler: () => {
                        console.log('Confirm Okay')
                      },
                    },
                  ],
                });
              return alert.present();
            },
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
