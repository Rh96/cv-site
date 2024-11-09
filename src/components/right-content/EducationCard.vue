<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import { ref } from 'vue'
import { CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid'
// import PaginationTemplate from './components/PaginationTemplate.vue'
import qinshiftLogo from '@/assets/svg/qinshift.jpg'

defineOptions({
    name: 'Education',
})

// Variables
const educationList = [
    { id: 1, name: 'Qinshift Academy', logo: qinshiftLogo, startDate: '2019', endDate: '2020', studyRole: 'Web Developer' },
]
const licensesList = [
    { id: 1, name: 'Web Developer', logo: qinshiftLogo, creditentalLink: 'https://qinshiftacademy.com/en/programming-academy/', issuedDate: '2020' },
]

// let currentPage = ref(1)
// const itemsPerPage = 3

// function paginate(data, page, perPage) {
//     const start = (page - 1) * perPage
//     const end = page * perPage
//     return data.slice(start, end)
// }

// function updatedCurrentPage(updatedCurrentPageParam) {
//     currentPage.value = updatedCurrentPageParam
// }
</script>

<template>
    <div class="space-y-5">
        <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
            <h2 class="mb-5 text-lg font-semibold dark:text-slate-50">{{ $t('education') }}</h2>
            <div
                v-for="(education, index) in educationList"
                :key="index"
                class="mb-5 flex items-start"
            >
                <img
                    :src="education.logo"
                    alt="education logo"
                    class="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-slate-700"
                >
                <div class="ml-3 w-full space-y-5">
                    <div class="items-start justify-between sm:flex">
                        <div class="mb-1 space-y-1.5">
                            <div class="font-medium dark:text-slate-50">
                                {{ education.name }}
                            </div>
                            <div class="flex space-x-5">
                                <div class="flex items-start gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
                                    <span class="max-w-sm">
                                        {{ education.studyRole }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="items-start space-y-2">
                            <div class="flex gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
                                <CalendarIcon class="h-4 w-4 shrink-0" />
                                <span>{{ education.startDate }} - {{ education.endDate }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="index != educationList.length - 1" class="border-b border-gray-200 dark:border-slate-600"></div>
                </div>
            </div>
        </div>

        <!-- Licenses and Certificates -->
        <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
            <h2 class="mb-5 text-lg font-semibold dark:text-slate-50">{{ $t('licenses') }}</h2>
            <div
                v-for="(license, index) in licensesList"
                :key="index"
                class="mb-5 flex items-start"
            >
                <img
                    :src="license.logo"
                    alt="license"
                    class="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-slate-700"
                />
                <div class="ml-3 w-full space-y-5">
                    <div class="items-start justify-between sm:flex">
                        <div class="mb-2 space-y-1.5 text-gray-400 dark:text-slate-400">
                            <div class="font-medium text-gray-900 dark:text-slate-50">{{ license.name }}</div>
                            <span class="text-sm font-medium">Issued Nov {{ license.issuedDate }}</span>
                        </div>
                        <a
                            :href="license.creditentalLink"
                            class="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-2 py-2 text-xs text-gray-400 hover:bg-gray-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700"
                            target="_blank"
                        >
                            <span>Credential</span>
                            <ArrowTopRightOnSquareIcon class="h-4 w-4 stroke-2" />
                        </a>
                    </div>
                    <div v-if="index != licensesList.length - 1" class="border-b border-gray-200 dark:border-slate-600"></div>
                </div>
            </div>
            <!-- <PaginationTemplate
                :data="educationList"
                :current-page="currentPage"
                :itemsPerPage="itemsPerPage"
                @updated-current-page="updatedCurrentPage"
            /> -->
        </div>
    </div>
</template>
