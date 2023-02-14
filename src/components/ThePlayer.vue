<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Howl, Howler } from 'howler'
import 'vuetify/dist/vuetify.css'
import allSongs from '@/audio/songs';

let appearPlayer = ref<boolean>(false);
let volume = ref<number>(0.3);
let trackIndex = ref<number>(5);
let isPlay = ref<boolean>(false);

onMounted(() => {
    setTimeout(() => {
        appearPlayer.value = true
    }, 300)
})

let howlProps = {
    autoplay: false,
    loop: false,
    volume: volume.value,
    onend: () => { nextTrack() }
}
let sound = new Howl({
    src: allSongs[trackIndex.value],
    ...howlProps

});

watch(volume,
    (volume) => {
        sound.volume(volume)
    }
)

function playingTrack(status: boolean) { // play
    isPlay.value = status;
    if (status) {
        sound.play()
    } else {
        sound.pause()
    }
}

function prevTrack() { // previous
    if (trackIndex.value === 0) {
        trackIndex.value = allSongs.length - 1;
    } else {
        trackIndex.value--;
    }
    newTrack()
}

function nextTrack() { // next
    if (trackIndex.value === allSongs.length - 1) {
        trackIndex.value = 0;
    } else {
        trackIndex.value++;
    }
    newTrack()
}

function newTrack() { // new
    sound.stop();

    sound = new Howl({
        src: allSongs[trackIndex.value],
        ...howlProps
    })

    playingTrack(true);
}
</script>

<template>
    <Transition name="slide-fade" v-show="appearPlayer">
        <div class="player">
            <div>{{ `${trackIndex + 1} / ${allSongs.length}` }}</div>
            <v-btn @click="prevTrack">p</v-btn>
            <v-btn @click="playingTrack(true)" v-if="!isPlay">y</v-btn>
            <v-btn @click="playingTrack(false)" v-else>s</v-btn>
            <v-btn @click="nextTrack">n</v-btn>
            <v-slider class="volume" v-model="volume" min="0" max="1" step="0.1" direction="vertical"
                show-ticks></v-slider>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.player {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 50%;
    transform: translate(-2px, -50%);
    background: var(--color-grey);
    padding: 10px;
    border: 2px solid var(--color-orange);
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