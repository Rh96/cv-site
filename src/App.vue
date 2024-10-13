<script setup>
import { RouterView } from 'vue-router'
// Components
import Profile from './components/left-content/ProfileCard.vue'
import InformationsCard from './components/left-content/InformationsCard.vue'
import SkillsCard from './components/left-content/SkillsCard.vue'
import LanguagesCard from './components/left-content/LanguagesCard.vue'
import About from './components/right-content/AboutMe.vue'

</script>

<template>
  <!-- Main -->
  <div class="container mx-auto max-w-6xl px-4 py-4">
    <!-- Content -->
    <div class="gap-5 sm:grid lg:grid-cols-3">
      <!-- Left Content -->
      <div class="space-y-5">
        <Profile />
        <InformationsCard />
        <SkillsCard />
        <LanguagesCard />
      </div>
      <!-- Right Content -->
      <div class="mt-4 space-y-5 sm:mt-0 lg:col-span-2">
        <About />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>

</style>
