<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Howl, Howler } from 'howler'

import allSongs from '@/audio/songs';

let volume = ref<number>(0.5);
let appearPlayer = ref<boolean>(false);

onMounted(() => {
    setTimeout(() => {
        appearPlayer.value = true
        console.log()
    }, 3000)
})

let sound = new Howl({
    src: allSongs,
    autoplay: false,
    loop: false,
    volume: volume.value,
    onend: function () {
        console.log('Finished!');
    }
});
function Play() {
    sound.play();
    console.log(sound)
}
function Pause() {
    sound.pause();
    console.log(sound)
}
// function updateVolume (volume) {
//     sound.volume(volume)
// }
</script>

<template>
    <Transition name="slide-fade">
        <div class="player" v-show="appearPlayer">
            <button @click="Play">play</button>
            <button @click="Pause">pause</button>
            <!-- <v-slider v-model="volume" @input="updateVolume(volume)" max="1" step="0.1"></v-slider> -->
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.player {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
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
        transform: translateX(-100%);
        opacity: 0;
    }
}
</style>