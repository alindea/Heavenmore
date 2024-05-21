import { writable } from "svelte/store";

export const alerts = writable<{ error?: true, value: string }[]>([])

export const newAlerts = (...values: string[]) =>
    alerts.update(data => [...values.map(value => ({ value })), ...data])

export const newErrorAlert = (...values: string[]) =>
    alerts.update(data => [...values.map(value => <{ error?: true, value: string }>({ type: 'error', value })), ...data])
