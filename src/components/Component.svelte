<script lang="ts">
    const props = $$props as { [_: string]: string };

    const comp: any = {
        "Angel icon": {
            fun: () => import("./svg/AngelSvg.svelte"),
            props: { height: props.height || ".85em" },
        },
        "Link icon": {
            fun: () => import("./svg/LinkSvg.svelte"),
            props: { height: props.height || ".65em" },
        },
        "Tautochrone curve": {
            fun: () => import("./TautochroneCurve.svelte"),
        },
        "The multiplication table game": {
            fun: () => import("./TheMultiplicationTableGame.svelte"),
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
