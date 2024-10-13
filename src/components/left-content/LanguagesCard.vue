<script setup>
import englishFlag from '@/assets/svg/english-us.svg'
import macedonianFlag from '@/assets/svg/macedonia.svg'

</script>

<template>
    <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
        <h2 class="mb-4 text-lg font-semibold dark:text-slate-50">{{ $t('language') }}</h2>

        <div class="flex flex-wrap gap-2">
            <!-- English -->
            <div
                class="flex min-w-[180px] cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-4 py-2 hover:bg-gray-100 dark:border-night-700 dark:hover:bg-night-700">
                <img
                    :src="englishFlag"
                    alt="Avatar"
                    class="h-7 w-7 border-2 border-white shadow-sm dark:border-slate-700"
                />
                <div class="font-medium">
                    <div class="text-xs text-gray-600 dark:text-slate-200">{{ $t('settings.en') }}</div>
                    <div class="text-xs text-gray-400 dark:text-slate-400">Conversational</div>
                </div>
            </div>
            <!-- Macedonian -->
            <div
                class="flex min-w-[180px] cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-4 py-2 hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-700">
                <img
                    :src="macedonianFlag"
                    alt="Avatar"
                    class="h-7 w-7 border-2 border-white shadow-sm dark:border-slate-700"
                />
                <div class="font-medium">
                    <div class="text-xs text-gray-600 dark:text-slate-200">{{ $t('settings.mk') }}</div>
                    <div class="text-xs text-gray-400 dark:text-slate-400">Native</div>
                </div>
            </div>
        </div>
    </div>
</template>
