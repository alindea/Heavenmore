import { writable } from "svelte/store";

const images: { value: string, label: string, source: string, opacity?: { light?: number, dark?: number } }[] = [
    { value: '', label: 'none', source: '' },
    { value: 'pexels-roman-odintsov-5668103.jpg', label: 'dawn', source: 'https://www.pexels.com/photo/photo-of-clouds-during-dawn-5668103/', opacity: { light: .25, dark: .6 } },
]

export const imagesColorScheme = {
    light: [
        ...images,
        { value: 'pexels-snapwire-37728.jpg', label: 'clouds', source: 'https://www.pexels.com/photo/cloudy-sky-37728/', opacity: { light: .2 } },
        { value: 'pexels-2091109.jpg', label: 'flowers', source: 'https://www.pexels.com/photo/shallow-focus-photo-of-white-flowers-2091109/', opacity: { light: .2 } },
    ],
    dark: [
        ...images,
        { value: 'flower-729514_1920.jpg', label: 'lily', source: 'https://pixabay.com/photos/flower-lily-lilium-candidum-729514/', opacity: { dark: .7 } },
        { value: 'starry-sky-2051448_1920.jpg', label: 'night', source: 'https://pixabay.com/photos/starry-sky-night-sky-stars-2051448/', opacity: { dark: .4 } },
    ],
}

export const backgroundImage = {
    light: writable<string>(imagesColorScheme.light[2].value, (set) => {
        const value = localStorage.getItem('background image light')
        if (typeof value === 'string') set(value)

    }),
    dark: writable<string>(imagesColorScheme.dark[2].value, (set) => {
        const value = localStorage.getItem('background image dark')
        if (typeof value === 'string') set(value)
    })
}

backgroundImage.light.subscribe((value) => {
    localStorage.setItem('background image light', value)
})
backgroundImage.dark.subscribe((value) => {
    localStorage.setItem('background image dark', value)
})
