<template>
  <section class="community">
    <p class="community-title">Community</p>
    <ul class="community-list">
      <li class="community-list-item"><a href="">Find Ableton User Groups</a></li>
      <li class="community-list-item"><a href="">Find Certified Training</a></li>
      <li class="community-list-item"><a href="">Become a Certified Trainer</a></li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.community {
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
  .community {
    &-list {
      &-item {
        font-size: clamp(1rem, 5vw, 1.125rem);
      }
    }
  }
}
</style>
