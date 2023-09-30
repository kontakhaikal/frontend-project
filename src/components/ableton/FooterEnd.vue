<template>
  <section>
    <ul>
      <li><a href="">Contact Us</a></li>
      <li><a href="">Press Resources</a></li>
      <li><a href="">Legal Info</a></li>
      <li><a href="">Privacy Policy</a></li>
      <li><a href="">Cookie Settings</a></li>
      <li><a href="">Imprint</a></li>
    </ul>
    <div>
      <svg
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 45 21"
      >
        <path
          fill="currentColor"
          d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"
        ></path>
      </svg>
      <p>Made in Berlin</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75ch;
    li {
      font-size: 0.85rem;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    svg {
      width: 3rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
}

@media screen and (min-width: 1024px) {
  section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ul {
      flex-direction: row;
      gap: 1.25rem;
    }
    div {
      flex-direction: row-reverse;
    }
  }
}
</style>
