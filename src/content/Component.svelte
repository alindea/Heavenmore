<script lang="ts">
    const props = $$props as { [_: string]: string };

    const comp: any = {
        angel: {
            fun: () => import("./AngelSvg.svelte"),
            props: { height: props.height || ".85em" },
        },
        isochrone: {
            fun: () => import("./Isochrone.svelte"),
        },
    }[props.name || ""];
</script>

{#if comp?.fun}
    {#await comp.fun() then Module}
        <svelte:component this={Module.default} {...comp.props} />
    {:catch error}
        <pre>{error.message}</pre>
    {/await}
{:else}
    <pre>Component "{props.name}" not found</pre>
{/if}

<style>
    pre {
        color: var(--color-red-500);
        font-size: small;
    }
</style>
