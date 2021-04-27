<template>
    <ion-page>
        <ion-content>
            <div id="admin_create">
                <ion-button href="/create">
                    CREATE
                </ion-button>
            </div>
            <div id="admin_modify">
                <ion-button href="/modify">
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

