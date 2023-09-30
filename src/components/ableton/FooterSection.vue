<script setup lang="ts">
import FooterCommunity from '@/components/ableton/FooterCommunity.vue'
import FooterEducation from '@/components/ableton/FooterEducation.vue'
import FooterLanguage from '@/components/ableton/FooterLanguage.vue'
import FooterMedia from '@/components/ableton/FooterMedia.vue'
import FooterNewsletter from '@/components/ableton/FooterNewsletter.vue'
import FooterEnd from './FooterEnd.vue'
</script>

<template>
  <footer class="container">
    <div class="footer-separator"></div>
    <p class="footer-title">Ableton</p>
    <div class="footer-section-placeholder">
      <FooterNewsletter style="grid-area: newsletter" />
      <FooterMedia style="grid-area: media" />
      <FooterEducation style="grid-area: education" />
      <FooterCommunity style="grid-area: community" />
      <FooterLanguage style="grid-area: language" />
      <FooterEnd style="grid-area: footer-end" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-separator {
  height: 2px;
  margin-top: 3rem;
  background-color: #efefef;
}
.footer-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  padding: 0 2rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
.footer-section-placeholder {
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  gap: 1rem;
}

@media only screen and (min-width: 1024px) {
  .footer-title {
    padding: 0 7rem;
    margin-top: 4rem;
    margin-bottom: 3rem;
  }
  .footer-section-placeholder {
    padding: 0 7rem;
    display: grid;
    row-gap: 4rem;
    column-gap: 3.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 'media education newsletter newsletter' 'community language language language' 'footer-end footer-end footer-end footer-end';
    section {
      height: min-content;
    }
  }
}
</style>
