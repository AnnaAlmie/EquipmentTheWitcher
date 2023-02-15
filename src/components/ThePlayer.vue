<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Howl, Howler } from 'howler'
import 'vuetify/dist/vuetify.css'
import allSongs from '@/audio/songs';

let appearPlayer = ref<boolean>(false);
let volume = ref<number>(0.2);
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
        <div class="aside_nav">
            <v-switch hide-details inset></v-switch>
            <div class="player">
                <span>{{ `${trackIndex + 1} / ${allSongs.length}` }}</span>
                <mdicon name="skip-previous-circle" @click="prevTrack" />
                <mdicon name="play-circle" @click="playingTrack(true)" v-if="!isPlay" />
                <mdicon name="pause-circle" @click="playingTrack(false)" v-else />
                <mdicon name="skip-next-circle" @click="nextTrack" />
                <v-slider class="volume" v-model="volume" min="0" max="1" step="0.1" direction="vertical" show-ticks
                    color="white" thumb-color="white"></v-slider>
            </div>
            <a href="https://github.com/AnnaAlmie/EquipmentTheWhitcher/tree/dev" target="_blank"
                rel="noopener noreferrer" title="Code review / Перегляд коду">
                <mdicon name="folder-eye-outline" />
            </a>

        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.aside_nav {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 50%;
    transform: translate(-2px, -50%);
    background: var(--color-grey);
    padding: 10px;
    border: 1px solid var(--color-indigo);
    border-radius: 0 5px 5px 0;
    color: #fff;
    text-align: center;
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

.player {
    display: block;

    svg {
        display: block;
        width: 100%;
        height: 40px;
        transition: var(--default-transition);
        cursor: pointer;
        will-change: opacity;

        &:hover {
            opacity: .7;
        }
    }
}
</style>