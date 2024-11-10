<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { LinkIcon } from '@heroicons/vue/24/solid'
// import PaginationTemplate from './components/PaginationTemplate.vue'
import waveOnTheWay from '@/assets/svg/wave_on_the_way.jpg'
import spaceMates from '@/assets/svg/spaceMates.jpg'
import globalGameJam2021 from '@/assets/svg/globalGameJam2021.png'
import unityEngineLogo from '@/assets/svg/unity-engine.svg'
import unityEngineWhiteLogo from '@/assets/svg/unity-engine-white.svg'

defineOptions({
    name: 'Projects',
})

// Variables
const isDarkMode = ref(false);
const projectsList = [
    {
        id: 1,
        name: 'menu.projects.project_1.title',
        description: 'menu.projects.project_1.description',
        logo: waveOnTheWay,
        link: 'https://v3.globalgamejam.org/2017/games/wave-way-wotw',
        gameEngine: {
            name: 'Unity Engine',
            icon: unityEngineLogo,
            icon2: unityEngineWhiteLogo,
        },
        achievement: true,
    },
    {
        id: 2,
        name: 'menu.projects.project_2.title',
        description: 'menu.projects.project_2.description',
        logo: spaceMates,
        link: 'https://v3.globalgamejam.org/2018/games/space-mates',
        gameEngine: {
            name: 'Unity Engine',
            icon: unityEngineLogo,
            icon2: unityEngineWhiteLogo,
        },
        achievement: false,
    },
    {
        id: 3,
        name: 'menu.projects.project_3.title',
        description: 'menu.projects.project_3.description',
        logo: globalGameJam2021,
        link: 'https://v3.globalgamejam.org/2021/games/ggj-2021-3',
        gameEngine: {
            name: 'Unity Engine',
            icon: unityEngineLogo,
            icon2: unityEngineWhiteLogo,
        },
        achievement: false,
    },
]
// let currentPage = ref(1)
// const itemsPerPage = 1

// function paginate(data, page, perPage) {
//     const start = (page - 1) * perPage
//     const end = page * perPage
//     return data.slice(start, end)
// }

// function updatedCurrentPage(updatedCurrentPageParam) {
//     currentPage.value = updatedCurrentPageParam
// }

// Hooks
onMounted(() => {
  const htmlRoot = document.getElementById('html-root')
  isDarkMode.value = htmlRoot.classList.contains('dark')

  // Observe for class changes on html-root
  const observer = new MutationObserver(() => {
    isDarkMode.value = htmlRoot.classList.contains('dark')
  })

  observer.observe(htmlRoot, { attributes: true, attributeFilter: ['class'] })

  // Cleanup on unmount
  onUnmounted(() => {
    observer.disconnect();
  })
});
</script>

<template>
    <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
        <h2 class="mb-5 text-lg font-semibold dark:text-slate-50">{{ $t('menu.projects.title') }}</h2>
        <div
            v-for="(project, index) in projectsList"
            :key="index"
            class="mb-5 flex items-start"
        >
            <img
                :src="project.logo"
                alt="project logo"
                class="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-slate-700"
            />

            <div class="ml-3 w-full space-y-5">
                <div class="flex justify-between">
                    <div class="space-y-1.5">
                        <div class="font-medium dark:text-slate-50">{{ $t(project.name) }}</div>
                        <div class="flex space-x-5 text-gray-400 dark:text-slate-400">
                            <div class="flex items-center gap-1 text-sm font-medium">
                                <img
                                    v-if="project.gameEngine.icon2"
                                    :src="isDarkMode ? project.gameEngine.icon2 : project.gameEngine.icon"
                                    class="h-4 w-4 shrink-0 stroke-2"
                                />
                                <img
                                    v-else
                                    :src="project.gameEngine.icon"
                                    class="h-4 w-4 shrink-0 stroke-2"
                                />
                                <span>{{ project.gameEngine.name }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="project.achievement" class="text-3xl">
                        🥉
                    </div>
                </div>
                <p class="text-sm text-gray-600 dark:text-slate-300">
                    {{ $t(project.description) }}
                </p>
                <a
                    :href="project.link"
                    class="inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-gray-100 px-2 py-1.5 text-xs font-medium text-gray-400 hover:border-sky-500 hover:bg-sky-500 hover:text-white dark:border-slate-700 dark:text-slate-400 dark:hover:border-sky-500 dark:hover:bg-sky-500/20 dark:hover:text-sky-500"
                    target="_blank"
                >
                    <LinkIcon class="h-4 w-4 shrink-0 stroke-2" />
                    <span>{{ $t('link') }}</span>
                </a>
            </div>
        </div>
        <!-- <PaginationTemplate
            :data="projectsList"
            :current-page="currentPage"
            :itemsPerPage="itemsPerPage"
            @updated-current-page="updatedCurrentPage"
        /> -->
    </div>
</template>
