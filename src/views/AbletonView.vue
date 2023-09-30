<script setup lang="ts">
import FifthImageSectionVue from '@/components/ableton/FifthImageSection.vue'
import FirstImageSection from '@/components/ableton/FirstImageSection.vue'
import FooterSection from '@/components/ableton/FooterSection.vue'
import FourthImageSection from '@/components/ableton/FourthImageSection.vue'
import HeroSection from '@/components/ableton/HeroSection.vue'
import NavBar from '@/components/ableton/NavBar.vue'
import SecondImageSection from '@/components/ableton/SecondImageSection.vue'
import TextSection from '@/components/ableton/TextSection.vue'
import ThirdImageSection from '@/components/ableton/ThirdImageSection.vue'
import VideoSection from '@/components/ableton/VideoSection.vue'
</script>

<template>
  <header class="container">
    <NavBar />
  </header>
  <main class="container">
    <HeroSection />
    <TextSection>
      <p class="text-title">
        We make <span>Live</span>,<span>Push</span> and <span>Link</span> — unique software and
        hardware for music creation and performance. With these products, our community of users
        creates amazing things.
      </p>
      <p class="text-detail">
        Ableton was founded in 1999 and released the first version of Live in 2001. Our products are
        used by a community of dedicated musicians, sound designers, and artists from across the
        world.
      </p>
    </TextSection>
    <FirstImageSection />
    <TextSection>
      <p class="text-title">
        Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow,
        it’s incredibly rewarding.
      </p>
      <p class="text-detail">
        We feel the same way about making Ableton products. The driving force behind Ableton is our
        passion for what we make, and the people we make it for.
      </p>
    </TextSection>
    <VideoSection />
    <TextSection>
      <p class="text-title">
        We are more than 350 people from 30 different countries divided between our headquarters in
        Berlin and our offices in Los Angeles and Tokyo.
      </p>
      <p class="text-detail">
        Most of us are active musicians, producers, and DJs, and many of us use Live and Push every
        day. We come from a wide range of cultural and professional backgrounds. Some of us have
        PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the
        shared belief that each of us has the skills and knowledge to contribute to something big:
        helping to shape the future of music culture.
      </p>
    </TextSection>
    <SecondImageSection />
    <TextSection>
      <p class="text-title">
        We believe it takes focus to create truly outstanding instruments. We only work on a few
        products and we strive to make them great.
      </p>
      <p class="text-detail">
        Rather than having a one-size-fits-all process, we try to give our people what they need to
        work their magic and grow. We’ve learned that achieving the best results comes from building
        teams that are richly diverse, and thus able to explore problems from a wider set of
        perspectives. We don’t always agree with each other, but opinion and debate are valued and
        openly encouraged.
      </p>
    </TextSection>
    <ThirdImageSection />
    <TextSection>
      <p class="text-title">
        We’re passionate about what we do, but we’re equally passionate about improving who we are.
      </p>
      <p class="text-detail">
        We work hard to foster an environment where people can grow both personally and
        professionally, and we strive to create a wealth of opportunities to learn from and with
        each other.
      </p>
      <p class="text-detail">
        Alongside an internal training program, employees are actively supported in acquiring new
        knowledge and skills, and coached on applying these in their daily work. In addition,
        staff-organized development and music salons are a chance to discuss new technologies,
        production techniques and best practices.
      </p>
    </TextSection>
    <FourthImageSection />
    <TextSection>
      <p class="text-title">
        We want our employees to love it here. Since we’re looking for exceptional talent from
        around the world, we will do everything we can to make your transition as easy as possible.
      </p>
      <p class="text-detail">
        If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide
        you with free German or English lessons. Plus, working in Germany means you can expect
        comprehensive health insurance for you and your family, as well as generous maternity and
        paternity leave. Office hours are flexible, but it’s not all work; we have several company
        and team outings throughout the year as well as a variety of fun, informal small-group
        activities.
      </p>
    </TextSection>
    <FifthImageSectionVue />
  </main>
  <FooterSection />
</template>

<style>
:root {
  --yellow: #fbffa7;
  --sky: #b1c5ff;
  --orange: #ff764d;
  --purple: #d5b3ff;
  --green: #b6ffc0;
  --blue: #0000ff;
}
body {
  font-family: 'Futura PT';
  position: relative;
  display: flex;
  flex-direction: column;
}
.container {
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
}
header {
  position: relative;
}
</style>
