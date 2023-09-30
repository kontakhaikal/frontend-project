<template>
  <section class="image-section">
    <div class="background-placeholder">
      <div></div>
    </div>
    <div class="image-placeholder">
      <div class="image-placeholder-right">
        <img src="https://ableton-production.imgix.net/about/photo-6-a.jpg?fit=crop" alt="" />
      </div>
      <div class="image-placeholder-left">
        <img src="https://ableton-production.imgix.net/about/photo-7.jpg?fit=crop" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.image-section {
  position: relative;
  height: 24rem;
}
.background-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 60%;
    height: 100%;
    background-color: var(--purple);
  }
}
.image-placeholder {
  position: absolute;
  top: 0;
  display: flex;
  height: 100%;
  width: 100%;
  padding-left: 2rem;
  &-right {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 70%;
      object-fit: cover;
      height: 45%;
    }
  }
  &-left {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      object-fit: cover;
      height: 70%;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .image-section {
    height: 40rem;
  }
  .image-placeholder {
    padding-left: 7rem;
  }
}
</style>
