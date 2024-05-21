import { writable } from "svelte/store";

export const backgroundImageOpacity = writable<number>(parseFloat(localStorage.getItem('background image opacity') || '0.5'))

backgroundImageOpacity.subscribe((value) => {
    localStorage.setItem('background image opacity', value.toString())
})
