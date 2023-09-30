<template>
  <section class="image-section">
    <img
      loading="lazy"
      src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?fit=crop&auto=format&fm=webp"
      alt=""
    />
  </section>
</template>

<style scoped lang="scss">
.image-section {
  padding: 0 2rem;
  img {
    object-fit: cover;
  }
}

@media only screen and (min-width: 1024px) {
  .image-section {
    padding: 0 7rem;
  }
}
</style>
