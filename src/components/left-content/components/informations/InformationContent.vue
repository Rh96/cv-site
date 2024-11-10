<script setup>
import { computed } from 'vue'
import * as solid from '@heroicons/vue/24/solid'

// Define props in the script setup format
const props = defineProps(['icon', 'content', 'subText'])

const resolvedIcon = computed(() => {
    return solid[props.icon] || null
})
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex gap-3">
            <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-slate-700 dark:text-slate-300">
                <component :is="resolvedIcon" class="h-5 w-5 stroke-1" />
            </div>
            <div class="font-medium">
                <div class="text-sm text-gray-900 dark:text-slate-100">{{ props.content }}</div>
                <div class="text-xs text-gray-400 dark:text-slate-400">{{ props.subText }}</div>
            </div>
        </div>
    </div>
</template>