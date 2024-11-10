<script setup>
import { computed } from 'vue'
import * as solid from '@heroicons/vue/24/solid'

// Define the props in the script setup format
const props = defineProps(['icon'])

// eslint-disable-next-line vue/no-dupe-keys
const resolvedIcon = computed(() => {
  return solid[props.icon] || null
})
</script>

<template>
    <component :is="resolvedIcon" class="h-6 w-6 text-gray-500" />
</template>
  
<style>

</style>
  