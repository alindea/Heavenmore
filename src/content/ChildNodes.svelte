<script lang="ts">
    import Component from "./Component.svelte";
    import Loading from "../Loading.svelte";
    export let childNodes: NodeListOf<ChildNode>;

    export let hash: string;

    const getAttrs = (childNode: ChildNode) => {
        const attributes = (childNode as HTMLElement).attributes;
        const out: { [_: string]: string } = {};
        for (const attribute of attributes)
            out[attribute.name] = attribute.value || "true";
        return out;
    };

    const els: { [_: string]: HTMLElement } = {};
    $: els[hash]?.scrollIntoView();
</script>

{#if childNodes}
    {#each [...childNodes] as childNode}
        {#if childNode.nodeType === Node.ELEMENT_NODE}
            {@const attrs = getAttrs(childNode)}
            {#if ["H1", "H2", "H3", "H4", "H5", "H6"].includes(childNode.nodeName)}
                {@const id =
                    childNode.textContent
                        ?.trim()
                        .toLowerCase()
                        .replace(/\s+/g, "-") || ""}
                <svelte:element
                    this={childNode.nodeName}
                    {...attrs}
                    bind:this={els[id]}
                    {id}
                >
                    <svelte:self childNodes={childNode.childNodes} {hash} />
                    <a class="link-title" href="#{id}">#</a>
                </svelte:element>
            {:else if childNode.nodeName === "A"}
                <svelte:element this={childNode.nodeName} {...attrs}
                    ><svelte:self
                        childNodes={childNode.childNodes}
                        {hash}
                    /></svelte:element
                >
            {:else if childNode.nodeName === "IMG"}
                <svelte:element this={childNode.nodeName} {...attrs} />
            {:else}
                <svelte:element this={childNode.nodeName} {...attrs}>
                    <svelte:self childNodes={childNode.childNodes} {hash} />
                </svelte:element>
            {/if}
        {:else if childNode.nodeType === Node.TEXT_NODE}
            {childNode.textContent}
        {:else if childNode.nodeType === Node.COMMENT_NODE}
            {@const icons = childNode.nodeValue?.split("icon:")}
            {#if icons?.[1]}
                <Component name={icons[1]} />{" "}
            {/if}
            {@const component = childNode.nodeValue?.split("component:")}
            {#if component?.[1]}
                <Component name={component[1]} />{" "}
            {/if}
        {/if}
    {/each}
{:else}
    <Loading />
{/if}

<style>
    .link-title {
        text-decoration: none;
    }
</style>
