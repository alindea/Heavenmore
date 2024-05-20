import { writable } from "svelte/store";

export const pageValues: { value: 'colors' | 'background-image', label: string }[] = [
    { value: 'background-image', label: 'Background image' },
    { value: 'colors', label: 'Colors' },
]

export const page = writable<typeof pageValues[number]['value']>(pageValues[0]['value'])
