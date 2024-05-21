import { writable } from "svelte/store";

const options: { value: string, label: string, source: string }[] = [
    { value: '', label: 'none', source: '' },
    { value: 'pexels-snapwire-37728.jpg', label: 'clouds', source: 'https://www.pexels.com/photo/cloudy-sky-37728/' },
    { value: 'flowers-3085457_1920.jpg', label: 'flowers', source: 'https://pixabay.com/photos/flowers-botany-outdoors-nature-3085457/' },
    { value: 'sun-3588618_1920.jpg', label: 'sun', source: 'https://pixabay.com/photos/sun-sky-blue-sunlight-sunbeam-3588618/' },
    { value: 'pexels-roman-odintsov-5668103.jpg', label: 'dawn', source: 'https://www.pexels.com/photo/photo-of-clouds-during-dawn-5668103/' },
    { value: 'glenn-carstens-peters-2E_dT65fyxo-unsplash.jpg', label: 'wheat', source: 'https://unsplash.com/photos/green-grass-at-daytime-2E_dT65fyxo' },
    { value: 'desert-1654439_1920.jpg', label: 'desert', source: 'https://pixabay.com/photos/desert-sand-dunes-landscape-1654439/' },
    { value: 'romello-williams-iiVuXgLEm6k-unsplash.jpg', label: 'ocean', source: 'https://unsplash.com/photos/blue-ocean-under-blue-cloudy-skies-iiVuXgLEm6k' },
    { value: 'flower-729514_1920.jpg', label: 'lily', source: 'https://pixabay.com/photos/flower-lily-lilium-candidum-729514/' },
]

export const images = {
    light: options,
    dark: options,
}

export const backgroundImage = {
    light: writable<string>(localStorage.getItem('background image light') || options[1].value),
    dark: writable<string>(localStorage.getItem('background image dark') || options[8].value)
}

backgroundImage.light.subscribe((value) => {
    localStorage.setItem('background image light', value)
})
backgroundImage.dark.subscribe((value) => {
    localStorage.setItem('background image dark', value)
})


