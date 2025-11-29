import { defineConfig } from 'vite'

export default defineConfig({
    base: '/portfolio/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html',
                contact: 'contact.html',
                projects: 'projects.html',
                journey: 'journey.html',
            },
        },
    },
})
