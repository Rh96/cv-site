<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from 'vue'
import { Popover, PopoverButton, PopoverPanel, Switch, Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { Cog8ToothIcon,  AdjustmentsHorizontalIcon, ChevronUpDownIcon, CheckIcon } from '@heroicons/vue/24/solid'

defineOptions({
    name: 'Profile',
})

// Import the global setLocale function
import { setLocale } from '@/utils/languageHelper'

// Images
import englishFlag from '@/assets/svg/english-us.svg'
import macedonianFlag from '@/assets/svg/macedonia.svg'
import profilePicture from '@/assets/svg/profil.jpg'

// Variables
const isDarkMode = ref(false)
const selectedLanguage = ref('en')
const socialLinks = [
    { id: 1, text: 'profile.social.linkedin', url: 'https://www.linkedin.com/in/rade-hrgovikj-032b28200' },
    { id: 2, text: 'profile.social.upwork', url: 'https://www.upwork.com/freelancers/~01f36af482c9488613?mp_source=share' },
]
const languages = [
    { id: 1, text: 'en', img_url: englishFlag },
    { id: 2, text: 'mk', img_url: macedonianFlag },
]

// Hooks
onMounted(() => {
    selectedLanguage.value = localStorage.getItem('language') || 'en'
    isDarkMode.value = document.getElementById('html-root').classList.contains('dark') ? true : false
})

// Methods
function toggleDarkMode() {
  const element = document.getElementById('html-root')
  if (element.classList.contains('dark')) {
    element.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    element.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}

// Change The Language
function changeLanguage(lang) {
  setLocale(lang)
  selectedLanguage.value = lang
}
</script>

<template>
    <!-- Content -->
    <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
        <div class="flex items-start justify-between">
            <div class="flex gap-3 items-start">
                <!-- Avatar -->
                <img
                    :src="profilePicture"
                    alt="avatar"
                    class="mb-4 w-14 h-14 rounded-md"
                />
                <div>
                    <!-- Description -->
                    <div>
                        <h5 class="mb-2 text-xl font-medium leading-tight dark:text-white">{{ $t('profile.name') }}</h5>
                        <p class="text-neutral-500 dark:text-neutral-400">{{ $t('profile.job_title') }}</p>
                    </div>
                    <!-- Social Links -->
                    <div class="inline-flex flex-wrap gap-1 mt-2">
                        <a
                            v-for="(linkProfile, index) in socialLinks"
                            :key="index"
                            :id="index"
                            :href="linkProfile.url"
                            target="_blank"
                            class="cursor-pointer rounded-lg border border-gray-100 px-2 py-0.5 text-xs font-medium text-gray-400 hover:bg-sky-500/20 hover:text-sky-500 dark:border-slate-600 dark:hover:bg-sky-500/20"
                        >
                            {{ $t(linkProfile.text) }}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Settings -->
            <Popover class="relative">
                <PopoverButton class="rounded-lg bg-gray-100 p-0.5 text-xs text-gray-400 focus:outline-none dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
                    <AdjustmentsHorizontalIcon class="w-5 h-5" />
                </PopoverButton>

                <PopoverPanel class="absolute right-0 z-10 mt-1 w-[280px] max-w-xs transform">
                    <div class="rounded-lg shadow-lg">
                        <div class="bg-gray-100 py-4 px-5 dark:bg-slate-700">
                            <span class="flex items-center gap-2">
                                <Cog8ToothIcon class="h-5 w-5 text-gray-500 dark:text-slate-200" />
                                <span class="text-sm font-medium text-gray-900 dark:text-slate-50">{{ $t('profile.settings.title') }}</span>
                            </span>
                        </div>

                        <!-- Dark Mode Option -->
                        <div class="grid gap-3 bg-white py-4 px-5 dark:bg-slate-600">
                            <div class="flex items-center justify-between rounded-lg transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-opacity-50">
                                <div class="mr-4">
                                    <p class="text-sm font-medium text-gray-900 dark:text-slate-50">{{ $t('profile.settings.theme') }}</p>
                                    <p class="text-sm text-gray-500 dark:text-slate-300">{{ $t('profile.settings.dark_mode') }}</p>
                                </div>
                                <Switch
                                    v-model="isDarkMode"
                                    :class="isDarkMode ? 'bg-sky-600' : 'bg-gray-200'"
                                    class="relative inline-flex h-6 w-11 items-center rounded-full"
                                    @click="toggleDarkMode"
                                >
                                    <span
                                        :class="isDarkMode ? 'translate-x-6' : 'translate-x-1'"
                                        class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                                    />
                                </Switch>
                            </div>
                            
                            <!-- Border between Dark Mode Option and Language Options -->
                            <div class="border-b border-gray-200 dark:border-slate-500"></div>
                            
                            <!-- Language Options -->
                            <div class="relative">
                                <Listbox v-model="selectedLanguage">
                                    <ListboxLabel class="mb-1 block text-sm font-medium leading-5 text-gray-700 dark:text-slate-50">
                                        {{ $t('language.title') }}
                                    </ListboxLabel>

                                    <ListboxButton class="relative flex w-full cursor-default items-center gap-2 rounded-lg bg-gray-100 py-2 pl-2 pr-10 text-left text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 dark:bg-slate-500">
                                        <img
                                            :src="selectedLanguage == 'en' ? englishFlag : macedonianFlag"
                                            alt="country flag"
                                            class="h-7 w-7"
                                        />
                                        <span class="block truncate text-black dark:text-slate-200">
                                            {{ $t(`profile.settings.${selectedLanguage}`) }}
                                        </span>
                                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon
                                                class="h-5 w-5 text-gray-400 dark:text-slate-300"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </ListboxButton>
                                    
                                    <ListboxOptions class="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-500">
                                        <ListboxOption
                                            v-for="language in languages"
                                            :key="language.id"
                                            :value="language.text"
                                            as="template"
                                            v-slot="{ active, selected }"    
                                            @click="changeLanguage(language.text)"
                                        >
                                            <li
                                                class="flex items-center gap-2"
                                                :class="[
                                                    active ?
                                                    'bg-gray-400/20 text-black dark:bg-slate-700/30' : '',
                                                    'relative cursor-default select-none py-2 px-2.5',
                                                ]"
                                            >
                                                <img :src="language.img_url" alt="en-us" class="h-7 w-7">
                                                <span class="block truncate dark:text-white">
                                                    {{ $t(`profile.settings.${language.text}`) }}
                                                </span>
                                                <span v-show="selected" class="absolute inset-y-0 right-4 flex items-center pl-3 text-sky-500">
                                                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            </li>
                                        </ListboxOption>
                                    </ListboxOptions>
                                </Listbox>
                            </div>
                        </div>
                    </div>
                </PopoverPanel>
            </Popover>
        </div>
    </div>
</template>
