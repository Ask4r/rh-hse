<script setup lang="ts">

import {vOnClickOutside} from "@vueuse/components";


const video = ref();

const videoAspect = ref(16 / 9);

const isActive = ref(false);
const throttledActive = useThrottle(isActive, 200);


defineExpose({
  'show': showVideo,
});


function showVideo() {
  isActive.value = true;
  video.value.play();

  videoAspect.value = video.value.videoWidth
      / video.value.videoHeight;
}

function hideVideo() {
  video.value.pause();
  isActive.value = false;
}

</script>

<template>
  <teleport to="body">
    <transition name="video-transition">
      <div v-show="throttledActive" class="content">
        <container class="container">
          <video ref="video"
                 src="/videos/preview-video-rickroll.mp4"
                 controls
                 v-on-click-outside="hideVideo"
                 class="video">
          </video>
        </container>
      </div>
    </transition>
  </teleport>
</template>

<style scoped lang="scss">

.video-transition-enter-active,
.video-transition-leave-active {
  transition: opacity 350ms ease-out;
}

.video-transition-enter-from,
.video-transition-leave-to {
  opacity: 0;
}

.content {
  width: 100dvw;
  height: 100dvh;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: grid;
  place-items: center;
  background-color: transparentize(#0C111D, 0.7);
  background-image: linear-gradient(to bottom,
      transparentize(#0C111D, 0.5),
      #0C111D);

  z-index: 20000;
}

.container {
  justify-content: center;
}

.video {
  max-height: min(51.6rem, calc(100svh - 1.6rem));
  border-radius: var(--radius-md, 0.8rem);
  aspect-ratio: v-bind(videoAspect);
}

</style>