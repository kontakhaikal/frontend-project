<template>
  <section class="image-section">
    <div class="image-placeholder">
      <img
        src="https://ableton-production.imgix.net/about/photo-8.jpg?fit=crop&crop=right"
        alt=""
      />
    </div>
    <div class="text-placeholder">
      <div>
        <p>
          We’re really proud of the work we’ve done so far. But there’s so much more to come. If
          you’d like to be a part of it, please join us.
        </p>
        <a href="">See latest jobs</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.image-section {
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
}
.image-placeholder {
  img {
    object-fit: cover;
    height: 18rem;
  }
}

.text-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--sky);
  padding: 4rem 3rem;
  div {
    font-size: clamp(1rem, 5vw, 1.25rem);
    p {
      margin-bottom: 1rem;
    }
    a {
      color: var(--blue);
      &::after {
        content: '\00a0›';
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .image-section {
    flex-direction: row;
    padding: 0 7rem;
    height: 36rem;

    .image-placeholder {
      width: 50%;
      img {
        height: 100%;
      }
    }
    .text-placeholder {
      width: 50%;
      padding: 4rem 7rem;
      div {
        font-size: clamp(1.25rem, 5vw, 1.75rem);
        p {
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        a {
          font-size: clamp(1.25rem, 5vw, 1.6rem);
        }
      }
    }
  }
}
</style>
