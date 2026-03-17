import { defineConfig } from 'vite'

export default defineConfig({
    base: '/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html',
                contact: 'contact.html',
                projects: 'projects.html',
                journey: 'journey.html',
                certificates: 'certificates.html',
                'certificates/hsk1': 'certificates/hsk1/index.html',
            },
        },
    },
})
