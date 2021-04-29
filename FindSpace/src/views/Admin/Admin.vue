<template>
    <ion-page>
        <ion-content>
            <div id="admin_create" class="container">
                <ion-button href="/create" size="large" color="secondary">
                    CREATE
                </ion-button>
            </div>
            <div id="admin_modify" class="container">
                <ion-button href="/modify" size="large" color="tertiary">
                    MODIFY
                </ion-button>
               

            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { IonContent, IonPage} from '@ionic/vue';
    import { ellipse, square, triangle } from 'ionicons/icons';

    export default {
        name: 'Tabs',
        components: { IonContent,  IonPage },
        setup() {
            return {
                ellipse,
                square,
                triangle,
            }
        }
    }
</script>

<style lang="css" scoped>
.container{
  width: 100%;
  text-align: center;
}
ion-content{
    --ion-background-color:#111D12;
}
</style>