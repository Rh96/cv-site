<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import { ref } from 'vue'
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from '@heroicons/vue/24/solid'
// import PaginationTemplate from './components/PaginationTemplate.vue'
import playercoachLogo from '@/assets/svg/playercoach.png'
import nativeTeamsLogo from '@/assets/svg/native-teams.svg'

defineOptions({
    name: 'Experience',
})

// Variables
const experienceList = [
    { id: 1, jobPosition: 'menu.experience.job_1.position', companyName: 'menu.experience.job_1.company_name', companyLocation: 'menu.experience.job_1.location', jobType: 'menu.experience.job_1.type', startJob: 'menu.experience.job_1.start_date', companyAvatar: playercoachLogo, description: 'menu.experience.job_1.description' },
    { id: 2, jobPosition: 'menu.experience.job_2.position', companyName: 'menu.experience.job_2.company_name', companyLocation: 'menu.experience.job_2.location', jobType: 'menu.experience.job_2.type', startJob: 'menu.experience.job_2.start_date', companyAvatar: nativeTeamsLogo, description: 'menu.experience.job_2.description' }
]

// let currentPage = ref(1)
// const itemsPerPage = 1

// function paginate(data, page, perPage) {
//   const start = (page - 1) * perPage
//   const end = page * perPage
//   return experienceList.slice(start, end) // Return paginated data
// }

// function updatedCurrentPage(updatedCurrentPageParam) {
//     currentPage.value = updatedCurrentPageParam
// }
</script>

<template>
    <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
        <h2 class="mb-4 text-lg font-semibold dark:text-slate-50">{{ $t('menu.experience.title') }}</h2>
        <div
            v-for="(job, index) in experienceList"
            :key="index"
            class="mb-5 flex items-start"
        >
            <img
                :src="job.companyAvatar"
                alt="company"
                class="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-slate-700 dark:bg-white"
            />
            <div class="ml-3 w-full space-y-5">
                <div class="justify-between sm:flex">
                    <div class="space-y-2">
                        <div class="font-medium dark:text-slate-50">
                            {{ $t(job.jobPosition) }}
                        </div>
                        <div class="space-y-1 sm:flex sm:space-x-5">
                            <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
                                <BriefcaseIcon class="h-4 w-4 shrink-0" />
                                <span>{{ $t(job.companyName) }}</span>
                            </div>
                            <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
                                <MapPinIcon class="h-4 w-4 shrink-0" />
                                <span>{{ $t(job.companyLocation) }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start justify-between space-y-1 sm:block sm:text-right">
                        <div class="order-last inline-flex items-center rounded-lg bg-sky-500/20 px-2 py-1 text-xs font-medium text-sky-500 capitalize">
                            {{ $t(job.jobType) }}
                        </div>
                        <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
                            <CalendarIcon class="h-4 w-4 shrink-0" />
                            <span>{{ $t(job.startJob) }}</span>
                        </div>
                    </div>
                </div>
                <p class="text-sm text-gray-600 dark:text-slate-200">
                    {{ $t(job.description) }}
                </p>
                <div v-if="index != experienceList.length - 1" class="border-b border-gray-200 dark:border-slate-600"></div>
            </div>
        </div>
        <!-- <PaginationTemplate
            :data="experienceList"
            :current-page="currentPage"
            :itemsPerPage="itemsPerPage"
            @updated-current-page="updatedCurrentPage"
        /> -->
    </div>
</template>

<style>
</style>