<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Tab </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Tab 2</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-button @click="reload()">
                reload
            </ion-button>
            <ion-button href ="/modify1">
                to modify
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
    } from "@ionic/vue";

    export default {
        name: "Tab2",
        components: {
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage,
            IonButton,
        },
        methods: {
            reload() {
                window.location.reload();
            },
        },
    };
</script>
