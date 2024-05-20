<script lang="ts">
    import { messages } from ".";
    let dialogEl: HTMLDialogElement;
    $: dialogEl?.showModal();
</script>

{#if $messages.length}
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
                messages.set([]);
            }
        }}
    >
        {#each $messages as item, i}
            <pre class:color-red={item.type === "error"}><button
                    type="button"
                    on:click={() =>
                        ($messages = $messages.filter((_, i1) => i !== i1))}
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
</style>
