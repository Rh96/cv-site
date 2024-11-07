<script setup>
const skills = ['HTML', 'CSS', 'Javascript', 'JQuery', 'Bootsrap', 'Sass', 'Tailwindcss', 'Vue', 'React', 'C#', 'MS SQL Server', 'Git']
</script>

<template>
    <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
        <h2 class="mb-4 text-lg font-semibold dark:text-slate-50">{{ $t('skills') }}</h2>

        <div class="-m-2 flex flex-wrap">
            <span
                v-for="(skill, index) in skills"
                :key="index"
                class="badge m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white"
            >
                {{ skill }}
            </span>
        </div>
    </div>
</template>
