<script setup>
import Profile from './components/left-content/ProfileCard.vue'
import InformationsCard from './components/left-content/InformationsCard.vue'
import SkillsCard from './components/left-content/SkillsCard.vue'
import LanguagesCard from './components/left-content/LanguagesCard.vue'
import About from './components/right-content/AboutMe.vue'
import TabListCard from './components/right-content/TabListCard.vue'

// Load dark mode on page load based on user preference or OS setting
function loadDarkMode() {
  const element = document.getElementById('html-root');
  
  // Determine if dark mode should be enabled
  const darkMode = localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  if (darkMode) {
    element.classList.add('dark')
  } else {
    element.classList.remove('dark')
  }
}
loadDarkMode()

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
        <!-- <RouterView /> -->
        <TabListCard />
      </div>
    </div>
  </div>
</template>
