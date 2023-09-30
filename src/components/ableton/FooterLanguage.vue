<template>
  <section class="language">
    <p class="language-title">Language and Location</p>
    <div class="select-placeholder">
      <div>
        <select name="" id="">
          <option value="">English</option>
        </select>
      </div>
      <div>
        <select>
          <option value="">Indonesia</option>
        </select>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.language-title {
  font-size: clamp(1.25rem, 2vw, 1.35rem);
}
.select-placeholder {
  margin-top: 1ch;
  display: flex;
  gap: 0.5rem;
  div {
    position: relative;
    &::after {
      display: block;
      content: '';
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 6px solid black;
      top: 40%;
      right: 5%;
      position: absolute;
      z-index: 99;
      user-select: none;
      pointer-events: none;
    }
    select {
      width: 8rem;
      background-color: #efefef;
      padding: 0.5ch;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      font-size: clamp(0.8rem, 2vw, 0.95rem);
      font-family: 'Futura PT';
    }
  }
}
</style>
