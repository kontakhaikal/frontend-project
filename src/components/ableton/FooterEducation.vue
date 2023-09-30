<template>
  <section class="education">
    <p class="education-title">Education</p>
    <ul class="education-list">
      <li class="education-list-item"><a href="">Offers for students and teachers</a></li>
      <li class="education-list-item"><a href="">Ableton for the Classroom</a></li>
      <li class="education-list-item"><a href="">Ableton for Colleges and Universities</a></li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.education {
  &-title {
    font-size: clamp(1.25rem, 2vw, 1.35rem);
    margin-bottom: 0.5ch;
  }
  &-list {
    display: flex;
    flex-direction: column;
    gap: 1ch;
    &-item {
      font-weight: 300;
      font-size: clamp(1rem, 2vw, 1.25rem);
      a::after {
        content: '\00a0› ';
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .education {
    &-list {
      &-item {
        font-size: clamp(1rem, 5vw, 1.125rem);
      }
    }
  }
}
</style>
