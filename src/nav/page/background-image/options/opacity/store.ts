import { writable } from "svelte/store";

export const opacity = writable<number>(parseFloat(localStorage.getItem('background image opacity') || '0.5'))

opacity.subscribe((value) => {
    localStorage.setItem('background image opacity', value.toString())
})
