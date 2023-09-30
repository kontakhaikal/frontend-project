<template>
  <section class="newsletter">
    <p class="newsletter-title">Sign up to our newsletter</p>
    <p class="newsletter-detail">
      Enter your email address to stay up to date with the latest offers, tutorials, downloads,
      surveys, and more.
    </p>
    <form class="newsletter-form">
      <input class="newsletter-form-input" type="text" placeholder="Email Address" />
      <button class="newsletter-form-button" type="submit">Sign up</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.newsletter {
  &-title {
    font-size: clamp(1.25rem, 2vw, 1.35rem);
    margin-bottom: 1ch;
  }
  &-detail {
    font-weight: 300;
    margin-bottom: 0.5ch;
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
  &-form {
    width: 100%;
    display: flex;
    margin-top: 1ch;
    &-input {
      width: 100%;
      max-width: 30rem;
      height: 2rem;
      background-color: #efefef;
      padding-left: 1ch;
    }
    &-button {
      width: 100%;
      max-width: 5rem;
      height: 2rem;
      background-color: var(--blue);
      color: white;
    }
  }
}

@media screen and (min-width: 1024px) {
  .newsletter {
    &-detail {
      font-size: clamp(1rem, 5vw, 1.125rem);
    }
  }
}
</style>
