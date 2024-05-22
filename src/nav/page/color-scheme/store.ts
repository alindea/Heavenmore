import { writable } from "svelte/store";

const lightColor = '#f5f5f5';
const darkColor = '#262626';

export const options: { value: 'auto' | 'light' | 'dark', label: string, colors: [string, string] }[] = [
    { label: 'auto', value: 'auto', colors: [darkColor, lightColor] },
    { label: 'light', value: 'light', colors: [lightColor, lightColor] },
    { label: 'dark', value: 'dark', colors: [darkColor, darkColor] },
];

const defaultValue = options[1].value

const rootElementDataset = document.documentElement.dataset;

const lightMetaTag = document.querySelector(
    'meta[media="(prefers-color-scheme: light)"]'
) as HTMLMetaElement | null;
const darkMetaTag = document.querySelector(
    'meta[media="(prefers-color-scheme: dark)"]'
) as HTMLMetaElement | null;

const matchColorSchemeDark = matchMedia("(prefers-color-scheme: dark)")

export const colorScheme = writable<'light' | 'dark'>(defaultValue !== 'auto' ? defaultValue : (matchColorSchemeDark.matches ? 'dark' : 'light'));

matchColorSchemeDark.addEventListener(
    "change",
    (e) => {
        const value = e.matches ? "dark" : "light";
        colorScheme.set(value)
    },
);

export const colorSchemeHtmlTagAttr = writable<typeof options[number]['value']>(defaultValue, set => {
    const offline = localStorage.getItem('color scheme')
    if (!offline) return
    const value = options.find(item => item.value === offline)?.value
    if (!value) return
    set(value)
});

colorSchemeHtmlTagAttr.subscribe(value => {

    const colors = options.find(item => item.value === value)?.colors || [darkColor, lightColor]

    if (darkMetaTag) darkMetaTag.content = colors[0];
    if (lightMetaTag) lightMetaTag.content = colors[1];


    if (value === 'auto') {
        delete rootElementDataset.color_scheme
        colorScheme.set((matchColorSchemeDark.matches ? 'dark' : 'light'))
    } else {
        rootElementDataset.color_scheme = value
        colorScheme.set(value)
    }

    localStorage.setItem('color scheme', value);
})
