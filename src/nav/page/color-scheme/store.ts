import { writable } from "svelte/store";

const lightColor = '#f5f5f5';
const darkColor = '#262626';

export const options: { value: 'auto' | 'light' | 'dark', label: string, colors: [string, string] }[] = [
    { label: 'auto', value: 'auto', colors: [darkColor, lightColor] },
    { label: 'light', value: 'light', colors: [lightColor, lightColor] },
    { label: 'dark', value: 'dark', colors: [darkColor, darkColor] },
];

const rootElementDataset = document.documentElement.dataset;

const lightMetaTag = document.querySelector(
    'meta[media="(prefers-color-scheme: light)"]'
) as HTMLMetaElement | null;
const darkMetaTag = document.querySelector(
    'meta[media="(prefers-color-scheme: dark)"]'
) as HTMLMetaElement | null;

export const colorScheme = writable<typeof options[number]['value']>(options[1].value, set => {
    const offline = localStorage.getItem('color scheme')
    if (!offline) return
    const value = options.find(item => item.value === offline)?.value
    if (!value) return
    set(value)
});

colorScheme.subscribe(value => {

    const colors = options.find(item => item.value === value)?.colors || [darkColor, lightColor]

    if (darkMetaTag) darkMetaTag.content = colors[0];
    if (lightMetaTag) lightMetaTag.content = colors[1];

    value === 'auto'
        ? delete rootElementDataset.color_scheme
        : rootElementDataset.color_scheme = value

    localStorage.setItem('color scheme', value);
})