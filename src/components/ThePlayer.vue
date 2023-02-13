<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Howl, Howler } from 'howler'
import 'vuetify/dist/vuetify.css'
import allSongs from '@/audio/songs';


let appearPlayer = ref<boolean>(false);
let volume = ref<number>(0.5);
let trackIndex = ref<number>(5);
let isPlay = ref<boolean>(false);

onMounted(() => {
    setTimeout(() => {
        appearPlayer.value = true
    }, 300)
})

let sound = new Howl({
    src: allSongs[trackIndex.value],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onplay: function (id) {

        isPlay.value = true
    },
    onpause: function (id) {
        console.log(id)
        isPlay.value = false
    },
    onend: function () {
        sound.stop()

        trackIndex.value++
        sound.play()
    }
});

watch(volume,
    (volume) => {
        sound.volume(volume)
    }
)

function next() {
    sound.stop()

    trackIndex.value++
    sound.play()
    console.log(trackIndex.value, sound)
}
</script>

<template>
    <Transition name="slide-fade" v-show="appearPlayer">
        <div class="player">
            <v-btn>prev</v-btn>
            <v-btn @click="sound.play()" v-if="!isPlay">play</v-btn>
            <v-btn @click="sound.pause()" v-else>pause</v-btn>
            <v-btn @click="next">next</v-btn>
            <v-slider v-model="volume" direction="vertical" show-ticks min="0" max="1" step="0.1"
                class="volume"></v-slider>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.player {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    background: grey;
    padding: 10px;
    border-radius: 0 5px 5px 0;

    button {
        display: block;
    }

}

// transitions 
.slide-fade- {
    &enter-active {
        transition: all 0.3s ease-out;
    }

    &leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    &enter-from,
    &leave-to {
        transform: translate(-100%, -50%);
        opacity: 0;
    }
}
</style>

<style lang="scss">
.volume.v-slider.v-input--vertical .v-input__control {
    min-height: 150px;
}
</style>