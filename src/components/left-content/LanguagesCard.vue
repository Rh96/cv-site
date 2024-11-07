<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineOptions({
    name: 'Language',
})

// Import flag images
import englishFlag from '@/assets/svg/english-us.svg'
import macedonianFlag from '@/assets/svg/macedonia.svg'

// Variables
const languages = [
    { id: 1, title: 'settings.en', level: 'Conversational', icon: englishFlag },
    { id: 2, title: 'settings.mk', level: 'Native', icon: macedonianFlag },
]
</script>

<template>
    <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
        <h2 class="mb-4 text-lg font-semibold dark:text-slate-50">{{ $t('language') }}</h2>

        <!-- Languages list -->
        <div class="flex flex-wrap gap-2">
            <div
                v-for="language in languages"
                :key="language.id"
                class="flex items-center gap-2 rounded-lg min-w-[180px]"
            >
                <img
                    :src="language.icon"
                    alt="Avatar"
                    class="h-8 w-8"
                />
                <div class="font-medium">
                    <div class="text-xs text-gray-600 dark:text-slate-200">{{ $t(language.title) }}</div>
                    <div class="text-xs text-gray-400 dark:text-slate-400">{{ language.level }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
