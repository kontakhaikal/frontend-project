<script setup lang="ts">
import { ref } from 'vue'

const played = ref(false)
</script>

<template>
  <section class="container">
    <div class="video">
      <div v-if="!played" class="thumbnail" @click="played = true">
        <img
          src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat=webp"
          alt=""
        />
        <button class="play">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 56">
            <polygon fill="currentColor" points="0 0 0 56 48 28 0 0"></polygon>
          </svg>
        </button>
      </div>
      <div>
        <iframe
          v-if="played"
          src="https://www.youtube.com/embed/9SbnhgjeyXA?si=AgFdkzRjsCyCkcev&autoplay=1&rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video {
  padding: 0 2rem;
  div {
    iframe {
      aspect-ratio: 16 / 9;
      width: 100%;
      object-fit: cover;
    }
  }
}
.thumbnail {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button.play {
    position: absolute;
    background-color: var(--blue);
    border-radius: 50%;
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    svg {
      width: 2rem;
      color: white;
      height: 2rem;
      transform: translate(6%, 0);
    }
  }
}
@media screen and (min-width: 1024px) {
  .video {
    padding: 0 21rem;
  }
}
</style>
