<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

const active = ref(false)

const navRef = ref<HTMLDivElement | null>(null)

const createHandleScroll = <T extends HTMLElement>(e: T) => {
  let lastScroll = 0
  return () => {
    const { top, bottom } = e.getBoundingClientRect()
    const currentScroll = scrollY
    if (scrollY < 320) {
      if (top <= 0 && scrollY >= bottom) {
        e.classList.add('nav-secondary--active')
        e.classList.remove('nav-secondary')
        e.style.transform = 'translate(0, 0)'
      } else {
        e.classList.add('nav-secondary')
        e.classList.remove('nav-secondary--active')
        e.style.transform = 'translate(0, 0)'
      }
    } else {
      if (currentScroll > lastScroll) {
        e.style.transform = 'translate(0, -5rem)'
      } else {
        e.style.transform = 'translate(0, 0)'
      }
    }
    lastScroll = currentScroll
  }
}

onMounted(() => {
  if (navRef.value != null) {
    document.addEventListener('scroll', createHandleScroll(navRef.value))
  }
})

onUnmounted(() => {
  if (navRef.value != null) {
    document.removeEventListener('scroll', createHandleScroll(navRef.value))
  }
})

watch(active, async (current) => {
  document.body.style.overflow = current ? 'hidden' : 'scroll'
})
</script>

<template>
  <nav class="nav" :class="[active ? 'nav-primary--active' : 'nav-primary']">
    <div class="logo">
      <svg
        aria-hidden="true"
        focusable="false"
        :class="[active ? 'logo-image--active' : 'logo-image']"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 45 21"
      >
        <path
          fill="currentColor"
          d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"
        ></path>
      </svg>
    </div>
    <div class="menu" @click="active = !active">
      <button :class="[active ? 'menu-button--active' : 'menu-button']">
        <span class="menu-button-text">Menu</span>
        <div :class="[active ? 'menu-button-icon--active' : 'menu-button-icon']"></div>
      </button>

      <ul class="menu-list">
        <li class="menu-list-item"><a href="">Live</a></li>
        <li class="menu-list-item"><a href="">Push</a></li>
        <li class="menu-list-item"><a href="">Note</a></li>
        <li class="menu-list-item"><a href="">Link</a></li>
        <li class="menu-list-item"><a href="">Shop</a></li>
        <li class="menu-list-item"><a href="">Packs</a></li>
        <li class="menu-list-item"><a href="">Help</a></li>
        <li class="menu-list-item"><a href="">More</a></li>
      </ul>
    </div>
    <ul class="action-list">
      <li class="action-list-item"><a href="">Start Live for free</a></li>
      <li class="action-list-item"><a href="">Login of register</a></li>
    </ul>
  </nav>
  <div :class="['container', active ? 'menu-mobile--active' : 'menu-mobile']">
    <div class="menu-mobile-section">
      <ul class="menu-mobile-list">
        <li class="menu-mobile-item"><a href="">Live</a></li>
        <li class="menu-mobile-item"><a href="">Push</a></li>
        <li class="menu-mobile-item"><a href="">Note</a></li>
        <li class="menu-mobile-item"><a href="">Link</a></li>
        <li class="menu-mobile-item"><a href="">Shop</a></li>
        <li class="menu-mobile-item"><a href="">Packs</a></li>
        <li class="menu-mobile-item"><a href="">Help</a></li>
        <li class="menu-mobile-item"><a href="">Try Live for Free</a></li>
        <li class="menu-mobile-item--sm">
          <a href="">Log in or register</a>
        </li>
      </ul>
    </div>
    <div class="menu-mobile-section">
      <p class="menu-mobile-title">More on Ableton.com:</p>
      <ul class="menu-mobile-list">
        <li class="menu-mobile-item--sm"><a href="">Blog</a></li>
        <li class="menu-mobile-item--sm"><a href="">Ableton for Classroom</a></li>
        <li class="menu-mobile-item--sm">
          <a href="">Ableton for Colleges and Universities</a>
        </li>
        <li class="menu-mobile-item--sm"><a href="">Certified Training</a></li>
        <li class="menu-mobile-item--sm"><a href="">Jobs</a></li>
        <li class="menu-mobile-item--sm"><a href="">Apprenticeships</a></li>
      </ul>
    </div>
    <div class="menu-mobile-section">
      <p class="menu-mobile-title">More from Ableton:</p>
      <ul class="menu-mobile-list--row">
        <li>
          <ul class="menu-mobile-list">
            <li class="menu-mobile-item--sm"><a href="">Loop</a></li>
            <li class="menu-mobile-item--sm">
              <a href=""
                >Watch Talks, Performaces and Future from Ableton's Summit for Music Makers</a
              >
            </li>
          </ul>
        </li>
        <li>
          <ul class="menu-mobile-list">
            <li class="menu-mobile-item--sm"><a href="">Learning Music</a></li>
            <li class="menu-mobile-item--sm">
              <a href="">Learn the fundamentals of music making right in your browser</a>
            </li>
          </ul>
        </li>
        <li>
          <ul class="menu-mobile-list">
            <li class="menu-mobile-item--sm"><a href="">Learning Synths</a></li>
            <li class="menu-mobile-item--sm">
              <a href=""
                >Get Started with synthesis using a web-based synth and accompanying lessons</a
              >
            </li>
          </ul>
        </li>
        <li>
          <ul class="menu-mobile-list">
            <li class="menu-mobile-item--sm"><a> Making Music </a></li>
            <li class="menu-mobile-item--sm"><a> Some tips 74 Creative </a></li>
            <li class="menu-mobile-item--sm">
              <a href="">Strategies for Electronic Producers</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <nav ref="navRef" class="nav nav-secondary">
    <ul class="menu-list--row">
      <li class="menu-list-item--sm--active"><a href="">About</a></li>
      <li class="menu-list-item--sm"><a href="">Jobs</a></li>
      <li class="menu-list-item--sm"><a href="">Apprenticeships</a></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  position: relative;

  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.5rem 1.5rem;
  &-primary {
    display: flex;
    z-index: 99;
    &--active {
      @extend .nav-primary;
      background-color: blue;
    }
  }
  &-secondary {
    transition: all;
    position: absolute;
    overflow: hidden;
    padding: 1.25rem 1.5rem;
    z-index: 97;
    background-color: rgba(255, 255, 255, 0.9);
    transition: transform 0.5s;
    &--active {
      @extend .nav-secondary;
      top: 0;
      position: fixed;
      &--hide {
        transform: translate(0, 5rem);
      }
      &-show {
        transform: translate(0, 0);
      }
    }
  }
}
.action-list {
  display: none;
}
.logo {
  width: clamp(45px, 12vw + 1rem, 60px);
  margin-right: 2rem;
  &-image {
    &--active {
      color: white;
    }
  }
}
.menu {
  &-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &--active {
      @extend .menu-button;
      color: white;
    }
    &-icon {
      width: 0;
      height: 0;
      border-width: 5px;
      border-style: solid;
      border-color: transparent;
      border-top-color: #000;

      transform: translate(0, 6px);
      &--active {
        @extend .menu-button-icon;
        border-top-color: white;
        transform: rotate(-180deg) translate(0, 0);
      }
    }
  }
  &-mobile {
    overflow-y: scroll;
    padding: 6rem 2rem;
    z-index: 98;
    position: fixed;
    transition: all;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transform: translate(0, -100%);
    transition: transform 0.25s;
    background: var(--blue);
    &--active {
      @extend .menu-mobile;
      transform: translate(0, 0);
    }
    &-section {
      color: white;
      margin-bottom: 1rem;
    }
    &-title {
      margin-bottom: 0.5rem;
    }
    &-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      &--row {
        @extend .menu-mobile-list;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
    &-item {
      font-size: 1rem;
      color: white;
      &--sm {
        @extend .menu-mobile-item;
        font-size: 0.75rem;
      }
    }
  }
  &-list {
    display: none;
    &--row {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
    }
    &-item {
      font-size: 1.2rem;
      &--sm {
        font-size: clamp(1rem, 1vw, 1rem);
        &--active {
          @extend .menu-list-item--sm;
          color: var(--orange);
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .nav {
    &-primary {
      padding: 1.5rem 2.5rem;
      &--active {
        background-color: white;
      }
    }
    &-secondary {
      padding: 1.5rem 2.5rem;
    }
  }
  .action-list {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 2rem;
    font-size: 1.25rem;
    &-item:first-child {
      color: var(--blue);
    }
    &-item:last-child {
      font-size: 1rem;
    }
  }
  .menu {
    &-button {
      display: none;
    }
    &-mobile {
      display: none;
    }
    &-list {
      display: flex;
      gap: 1rem;
      &-item > a {
        text-decoration: none;
      }
      &-item:last-child {
        color: var(--orange);
        position: relative;
      }

      &-item:last-child > a::after {
        content: '';
        height: 2px;
        width: 0.75rem;
        display: block;
        background-color: currentColor;
        position: absolute;
        top: 55%;
        left: 130%;
        transform: translate(-50%, -50%);
      }

      &-item:last-child > a::before {
        content: '';
        height: 0.75rem;
        width: 2px;
        display: block;
        background-color: currentColor;
        position: absolute;
        top: 55%;
        left: 130%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .logo {
    &-image {
      &--active {
        color: black;
      }
    }
  }
}
</style>
