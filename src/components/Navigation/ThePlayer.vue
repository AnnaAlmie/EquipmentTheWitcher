<script setup lang="ts">
import { ref, watch } from 'vue';
import { Howl } from 'howler';
import allSongs from '@/audio/songs';

let volume = ref<number>(0.2);
let trackIndex = ref<number>(8);
let isPlay = ref<boolean>(false);

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
    <div class="player">
        <span>{{ `${trackIndex + 1} / ${allSongs.length}` }}</span>
        <mdicon name="skip-previous-circle" @click="prevTrack" />
        <mdicon name="play-circle" @click="playingTrack(true)" v-if="!isPlay" />
        <mdicon name="pause-circle" @click="playingTrack(false)" v-else />
        <mdicon name="skip-next-circle" @click="nextTrack" />
        <v-slider class="volume" v-model="volume" min="0" max="1" step="0.1" direction="vertical" show-ticks color="white"
            thumb-color="white"></v-slider>
    </div>
</template>


<style lang="scss">
@media screen and (max-width: 1059px) {
    .player {
        display: none;
    }
}

@media screen and (min-width: 1060px) {
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
}
</style>