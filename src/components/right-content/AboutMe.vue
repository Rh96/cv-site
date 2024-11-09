<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineOptions({
    name: 'About',
})
</script>

<template>
    <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
        <h2 class="mb-4 text-lg font-semibold dark:text-slate-50">
            {{ $t('about') }}
        </h2>

        <p class="mb-5 text-sm text-gray-600 dark:text-slate-200">
            {{ $t('resume') }}
        </p>
    </div>
</template>