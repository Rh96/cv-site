<script setup>
import { computed, ref } from 'vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid'

const props = defineProps(['data', 'currentPage', 'itemsPerPage'])
const emit = defineEmits(['updated-current-page'])

const tempData = ref(props.data)
const tempCurrentPage = ref(props.currentPage)
const itemsPerPage = ref(props.itemsPerPage)

function nextPage() {
  const totalPages = Math.ceil(tempData.value.length / itemsPerPage.value)
  if (tempCurrentPage.value < totalPages) {
    tempCurrentPage.value++
    emit('updated-current-page', tempCurrentPage.value)
  }
}

function prevPage() {
  if (tempCurrentPage.value > 1) {
    tempCurrentPage.value--
    emit('updated-current-page', tempCurrentPage.value)
  }
}

const totalPages = computed(() => Math.ceil(tempData.value.length / itemsPerPage.value))
</script>

<template>
  <nav class="flex justify-end gap-2 items-center">
    <button class="border p-0.5 rounded-lg text-sm">
      <ChevronLeftIcon class="stroke-gray-400 h-5 w-5" />
    </button>

    <button class="border p-0.5 rounded-lg text-sm">
      {{ currentPage }}
    </button>
    <button class="border p-0.5 rounded-lg text-sm">
      <ChevronRightIcon class="stroke-gray-200 h-5 w-5" />
    </button>
  </nav>
</template>
