<template>
  <section class="image-section">
    <div class="background-placeholder">
      <div class="background-placeholder-left"></div>
      <div class="background-placeholder-right"></div>
    </div>
    <div class="image-placeholder">
      <div class="image-placeholder-left">
        <div>
          <img src="https://ableton-production.imgix.net/about/photo-3.jpg?fit=crop" alt="" />
        </div>
        <div>
          <img src="https://ableton-production.imgix.net/about/photo-4.jpg?fit=crop" alt="" />
        </div>
      </div>
      <div class="image-placeholder-right">
        <img src="https://ableton-production.imgix.net/about/photo-5.jpg?fit=crop" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.image-section {
  height: 24rem;
  display: flex;
  position: relative;
}

.background-placeholder {
  height: 100%;
  width: 100%;
  display: flex;
  &-left {
    width: 60%;
    height: 100%;
    background-color: var(--green);
  }
  &-right {
    width: 40%;
    height: 100%;
  }
}

.image-placeholder {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  padding: 0 2rem;
  &-left {
    width: 50%;
    div {
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        object-fit: cover;
        width: 80%;
        height: 70%;
      }
    }
  }
  &-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 100%;
      height: 60%;
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
