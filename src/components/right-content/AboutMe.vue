<script setup>
import { RouterLink } from 'vue-router';
import HeroIcon from './components/HeroIcon.vue'

// Variables
const menuList = [
    { route: '/cv-site/', name: 'menu.experience', icon: 'BriefcaseIcon' },
    { route: '/education', name: 'menu.education', icon: 'AcademicCapIcon' },
    { route: '/projects', name: 'menu.project', icon: 'CodeBracketIcon' }
]

</script>

<template>
    <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
        <h2 class="mb-4 text-lg font-semibold dark:text-slate-50">
            {{ $t('about') }}
        </h2>

        <p class="mb-5 text-sm text-gray-600 dark:text-slate-200">
            {{ $t('resume') }}
        </p>

        <ul class="inline-flex space-x-2 font-semibold">
            <!-- Menu -->
            <li v-for="(menuItem, index) of menuList" :key="index">
                <router-link
                    :to="menuItem.route"
                    class="inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-gray-100 px-2 py-1.5 text-xs font-medium text-gray-400 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:border-night-700 dark:text-night-400 dark:hover:border-primary-500 dark:hover:bg-primary-500/20 dark:hover:text-primary-500"
                >
                    <HeroIcon :icon="menuItem.icon" class="hidden h-4 w-4 sm:block" />
                    <span>{{ $t(menuItem.name) }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style>
</style>
