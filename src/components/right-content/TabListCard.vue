<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import HeroIcon from './components/HeroIcon.vue'
import ExperienceCard from './ExperienceCard.vue'
import EducationCard from './EducationCard.vue'
import ProjectsCard from './ProjectsCard.vue'

const menuList = [
    { name: 'menu.experience', icon: 'BriefcaseIcon' },
    { name: 'menu.education', icon: 'AcademicCapIcon' },
    { name: 'menu.project', icon: 'CodeBracketIcon' }
]

</script>

<template>
    <div class="w-full px-2 space-y-5 sm:px-0">
        <TabGroup>
            <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                <Tab
                    v-for="menuItem in menuList"
                    as="template"
                    :key="menuItem"
                    v-slot="{ selected }"
                >
                    <button
                        :class="[
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            'inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-gray-100 px-2 py-1.5 text-xs font-medium text-gray-400 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:border-night-700 dark:text-night-400 dark:hover:border-primary-500 dark:hover:bg-primary-500/20 dark:hover:text-primary-500',
                        selected
                            ? 'bg-white text-blue-700 shadow'
                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                        ]"
                    >
                        <HeroIcon :icon="menuItem.icon" class="hidden h-4 w-4 sm:block" />
                        <span>{{ $t(menuItem.name) }}</span>
                    </button>
                </Tab>
            </TabList>

            <TabPanels class="mt-2">
                <TabPanel>
                    <ExperienceCard />
                </TabPanel>

                <TabPanel>
                    <EducationCard />
                </TabPanel>

                <TabPanel>
                    <ProjectsCard />
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>