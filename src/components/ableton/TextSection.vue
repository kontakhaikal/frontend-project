<template>
  <div class="text">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.text {
  margin: 3rem auto;
  padding: 0 2rem;
  &-title {
    font-size: clamp(1.25rem, 2vw, 1.75rem);
    line-height: 1.5;
    margin-bottom: 1ch;
    span {
      color: var(--blue);
    }
  }
  &-detail {
    font-size: clamp(1.05rem, 3vw, 1.25rem);
    line-height: 1.5;
    margin-top: 1rem;
    font-weight: 300;
  }
}
@media only screen and (min-width: 1024px) {
  .text {
    margin: 8rem auto;
    padding: 0 21rem;
    &-title {
      font-size: clamp(1.25rem, 5vw, 1.75rem);
    }
    &-detail {
      font-size: clamp(1rem, 5vw, 1.25rem);
      line-height: 1.6;
      margin-top: 1ch;
    }
  }
}
</style>
