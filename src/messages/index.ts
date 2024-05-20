import { writable } from "svelte/store";

export const messages = writable<{ type?: 'message' | 'error', value: string }[]>([])

export const newMessage = (...values: string[]) =>
    messages.update(data => [...values.map(value => ({ value })), ...data])

export const newError = (...values: string[]) =>
    messages.update(data => [...values.map(value => <{ type: 'error', value: string }>({ type: 'error', value })), ...data])
