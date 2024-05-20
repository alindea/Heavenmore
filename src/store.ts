import { writable } from "svelte/store";

type text = {
    text: string;
    tag?: never;
    children?: never;
    href?: never;
}
type inline =
    | {
        text?: never;
        tag: 'b' | 'i';
        children: (text | inline)[]
        href?: never;
    }
    | {
        text?: never;
        tag: 'a';
        children: (text | inline)[]
        href: string
    }
type block = {
    text?: never;
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
    children: (text | inline)[]
    href?: never;
}
export type item =
    | text
    | inline
    | block

export const data = writable<item[]>([
    { tag: 'p', children: [{ text: 'Let there be a website.' }] },
    { tag: 'p', children: [{ text: 'When you press anywhere on the webpage a menu will appear.' }] },
], (set) => {
    const offlineData = localStorage.getItem('data')
    if (offlineData) set(JSON.parse(offlineData))
});