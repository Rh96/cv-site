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
            <TabList class="flex space-x-1 rounded-xl bg-gray-200 p-1 dark:bg-slate-700/30">
                <Tab
                    v-for="menuItem in menuList"
                    as="template"
                    :key="menuItem"
                    v-slot="{ selected }"
                >
                    <button
                        :class="[
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                            'inline-flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium',
                        selected
                            ? 'bg-gray-50 text-dark dark:bg-slate-700 dark:text-slate-300'
                            : 'hover:bg-gray-50 hover:text-dark dark:hover:bg-slate-700 dark:text-slate-300',
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