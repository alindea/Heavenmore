import { writable, type Writable } from "svelte/store";
import { imagesColorScheme } from "../../store";

export const imagesOpacity: { light: { [key: string]: Writable<number> }, dark: { [key: string]: Writable<number> } } = {
    light: {},
    dark: {},
}

imagesColorScheme.light.forEach(image => {
    if (image.opacity) imagesOpacity.light[image.value] = writable<number>(parseFloat(localStorage.getItem(`background image opacity light ${image.value}`) || '' + (image.opacity.light || 0)))
})

imagesColorScheme.dark.forEach(image => {
    if (image.opacity) imagesOpacity.dark[image.value] = writable<number>(parseFloat(localStorage.getItem(`background image opacity dark ${image.value}`) || '' + (image.opacity.dark || 0)))
})