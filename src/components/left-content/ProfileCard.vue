<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { 
    Popover,
    PopoverButton,
    PopoverPanel,
    Switch,
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { Cog8ToothIcon, ChevronUpDownIcon, CheckIcon } from '@heroicons/vue/24/solid'
import { setLocale } from '@/utils/languageHelper' // Import the global setLocale function
import { onMounted, ref } from 'vue'
import englishFlag from '@/assets/svg/english-us.svg'
import macedonianFlag from '@/assets/svg/macedonia.svg'
defineOptions({
    name: 'Profile',
})

// Variables
const isDarkMode = ref(false)
const socialLinks = [
    { id: 1, text: 'Linkedin', url: 'https://www.linkedin.com/in/rade-hrgovikj-032b28200' },
    { id: 2, text: 'Upwork', url: 'https://www.upwork.com/freelancers/~01f36af482c9488613?mp_source=share' },
]
const languages = [
    { id: 1, text: 'en', img_url: englishFlag },
    { id: 2, text: 'mk', img_url: macedonianFlag },
]
const selectedLanguage = ref('en')

// Hooks
onMounted(() => {
    selectedLanguage.value = localStorage.getItem('language') || 'en'
})

// Methods
function toggleDarkMode() {
  const element = document.getElementById('html-root')
  if (element.classList.contains('dark')) {
    element.classList.remove('dark')
  } else {
    element.classList.add('dark')
  }
}

function changeLanguage(lang) {
  setLocale(lang) // Change The Language
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
                    src="https://tecdn.b-cdn.net/img/new/avatars/3.webp"
                    class="mb-4 w-14 h-14 rounded-md"
                    alt="avatar"
                />
                <div>
                    <!-- Description -->
                    <div>
                        <h5 class="mb-2 text-xl font-medium leading-tight">Rade Hrgovikj</h5>
                        <p class="text-neutral-500 dark:text-neutral-400">Frontend Developer</p>
                    </div>
                    <!-- Social Links -->
                    <div class="inline-flex flex-wrap gap-1 mt-2">
                        <a
                            v-for="(linkProfile, index) in socialLinks"
                            :key="index"
                            :id="index"
                            :href="linkProfile.url"
                            target="_blank"
                            class="px-2 text-sm rounded-md border-2 dark:text-white"
                        >
                            {{ linkProfile.text }}
                        </a>
                    </div>
                </div>
            </div>
            <!-- Settings -->
            <Popover class="relative">
                <PopoverButton class="rounded-lg bg-gray-100 px-0.5 text-xs text-gray-400 focus:outline-none dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
                    <Cog8ToothIcon class="w-5 h-5" />
                </PopoverButton>

                <PopoverPanel class="absolute right-0 z-10 mt-1 w-[280px] max-w-xs transform">
                    <div class="rounded-lg shadow-lg">
                        <div class="bg-gray-50 py-4 px-5 dark:bg-slate-700">
                            <span class="text-sm font-medium text-gray-900 dark:text-slate-50">{{ $t('settings.title') }}</span>
                        </div>
                        <div class="grid gap-3 bg-white py-4 px-5 dark:bg-slate-600">
                            <div class="flex items-center justify-between rounded-lg transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50">
                                <div class="mr-4">
                                    <p class="text-sm font-medium text-gray-900 dark:text-slate-50">{{ $t('settings.theme') }}</p>
                                    <p class="text-sm text-gray-500 dark:text-slate-300">{{ $t('settings.dark_mode') }}</p>
                                </div>
                                <Switch
                                    v-model="isDarkMode"
                                    :class="isDarkMode ? 'bg-red-600' : 'bg-gray-200'"
                                    class="relative inline-flex h-6 w-11 items-center rounded-full"
                                    @click="toggleDarkMode"
                                >
                                    <span
                                        :class="isDarkMode ? 'translate-x-6' : 'translate-x-1'"
                                        class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                                    />
                                </Switch>
                            </div>
                            <div class="border-b border-dashed border-gray-200 dark:border-slate-500"></div>
                            <div class="relative">
                                <Listbox v-model="selectedLanguage">
                                    <ListboxLabel class="mb-1 block text-sm font-medium leading-5 text-gray-700 dark:text-slate-50">
                                        {{ $t('language') }}
                                    </ListboxLabel>
                                    <ListboxButton class="relative flex w-full cursor-default items-center gap-2 rounded-lg bg-gray-100 py-2 pl-2 pr-10 text-left text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 dark:bg-slate-500">
                                        <img
                                            :src="selectedLanguage == 'en' ? englishFlag : macedonianFlag"
                                            alt="country flag"
                                            class="h-7 w-7"
                                        />
                                        <span class="block truncate text-gray-500 dark:text-slate-200">
                                            {{ $t(`settings.${selectedLanguage}`) }}
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
                                                    'bg-gray-500/20 text-gray-500 dark:text-teal-500 ' :
                                                    'text-red-900 dark:text-slate-200',
                                                    'relative cursor-default select-none py-2 px-2.5',
                                                ]"
                                            >
                                                <img :src="language.img_url" alt="en-us" class="h-7 w-7">
                                                <span class="block truncate text-teal-500 dark:text-slate-200">
                                                    {{ $t(`settings.${language.text}`) }}
                                                </span>
                                                <span v-show="selected" class="absolute inset-y-0 right-4 flex items-center pl-3 text-teal-500">
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

<style>
</style>
