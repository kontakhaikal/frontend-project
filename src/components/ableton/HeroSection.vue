<template>
  <section class="banner">
    <img
      class="banner-image"
      src="https://ableton-production.imgix.net/about/header.jpg?fit=crop&auto=format&fm=webp"
      alt="banner-image"
    />
    <p class="banner-text">Ableton</p>
  </section>
</template>

<style scoped lang="scss">
.banner {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  &-image {
    object-fit: cover;
    height: 32rem;
  }
  &-text {
    position: absolute;
    font-size: clamp(4rem, 14vw, 8rem);
    color: #fd5948;
  }
}

@media only screen and (min-width: 1024px) {
  .banner {
    margin-top: 4.5rem;
    padding: 0 7rem;
    &-image {
      height: 41rem;
    }
  }
}
</style>
