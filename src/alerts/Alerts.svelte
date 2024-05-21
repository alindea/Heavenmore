<script lang="ts">
    import { alerts } from "./store";
    let dialogEl: HTMLDialogElement;
    $: dialogEl?.showModal();
</script>

{#if $alerts.length}
    <dialog
        bind:this={dialogEl}
        role="presentation"
        on:click={(event) => {
            const rect = dialogEl.getBoundingClientRect();
            const isInDialog =
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width;
            if (!isInDialog) {
                alerts.set([]);
            }
        }}
    >
        {#each $alerts as item, i}
            <pre class:error={item.error}><button
                    type="button"
                    on:click={() =>
                        ($alerts = $alerts.filter((_, i1) => i !== i1))}
                    >&times;</button
                > {item.value}</pre>
        {/each}
    </dialog>
{/if}

<style>
    dialog {
        padding: 0 1em;
    }
    pre {
        white-space: break-spaces;
    }
    .error {
        color: var(--color-red-500);
    }
</style>
