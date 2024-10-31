<script setup>
// import { ref } from 'vue'
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from '@heroicons/vue/24/solid'
// import PaginationTemplate from './components/PaginationTemplate.vue'
import playercoachLogo from '@/assets/svg/playercoach.png'

const experienceList = [
    { id: 1, jobPosition: 'Front-End Developer', companyName: 'PlayerCoach', companyLocation: 'Canada', jobType: 'remote', startJob: 'Oct 2021 - Current', companyAvatar: playercoachLogo, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }
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
        <h2 class="mb-4 text-lg font-semibold dark:text-slate-50">{{ $t('experience') }}</h2>
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
                            {{ job.jobPosition }}
                        </div>
                        <div class="space-y-1 sm:flex sm:space-x-5">
                            <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
                                <BriefcaseIcon class="h-4 w-4 shrink-0" />
                                <span>{{ job.companyName }}</span>
                            </div>
                            <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
                                <MapPinIcon class="h-4 w-4 shrink-0" />
                                <span>{{ job.companyLocation }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start justify-between space-y-1 sm:block sm:text-right">
                        <div class="order-last inline-flex items-center rounded-lg bg-primary-500/20 px-2 py-1 text-xs font-medium text-primary-500">
                            {{ job.jobType }}
                        </div>
                        <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
                            <CalendarIcon class="h-4 w-4 shrink-0" />
                            <span>{{ job.startJob }}</span>
                        </div>
                    </div>
                </div>
                <p class="text-sm text-gray-600 dark:text-slate-300">
                    {{ job.description }}
                </p>
                <div v-if="experienceList.length > 1" class="border-b border-dashed border-gray-200 dark:border-slate-600"></div>
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