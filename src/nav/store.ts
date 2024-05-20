import { writable } from "svelte/store";

export const startValues: { value: 'none' | 'page' | 'content', label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'page', label: 'Page' },
    { value: 'content', label: 'Content' },
]

export const start = writable<typeof startValues[number]['value']>(startValues[0].value)
