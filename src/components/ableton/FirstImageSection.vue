<template>
  <section class="image-section">
    <div class="background-placeholder">
      <div class="background-placeholder-left"></div>
      <div class="background-placeholder-right"></div>
    </div>
    <div class="image-placeholder">
      <div class="image-placeholder-left">
        <img src="https://ableton-production.imgix.net/about/photo-1.jpg?fit=crop" />
      </div>
      <div class="image-placeholder-right">
        <img src="https://ableton-production.imgix.net/about/photo-2.jpg?fit=crop" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.image-section {
  height: 20rem;
  position: relative;
}

.background-placeholder {
  height: 100%;
  display: flex;
  width: 100%;
  &-left {
    width: 40%;
    height: 100%;
  }
  &-right {
    width: 60%;
    height: 100%;
    background-color: var(--yellow);
  }
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  &-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    img {
      width: 100%;
      height: 70%;
      object-fit: cover;
    }
  }
  &-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    img {
      width: 75%;
      height: 50%;
      object-fit: cover;
    }
  }
}

@media only screen and (min-width: 680px) {
  .image-section {
    height: 32rem;
  }
}

@media only screen and (min-width: 1024px) {
  .image-section {
    height: 48rem;
  }
  .image-placeholder {
    padding: 0 7rem;
  }
}
</style>
