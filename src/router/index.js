import { createRouter, createWebHistory } from 'vue-router'

const route = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/cv-site/',
            name: 'experience',
            component: () => import('../components/right-content/ExperienceCard.vue')
        },
        { 
            path: '/education',
            name: 'education',
            component: () => import('../components/right-content/EducationCard.vue')
        },
        { 
            path: '/projects',
            name: 'project',
            component: () => import('../components/right-content/ProjectsCard.vue')
        },
    ]
})

export default route