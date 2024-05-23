<script lang="ts">
    import Component from "../components/Component.svelte";
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

    const parseJson = (string: string) => {
        if (!string) return {};
        try {
            return JSON.parse(string);
        } catch (err) {
            return {};
        }
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
                    <a class="link-title" href="#{id}">#</a>
                    <svelte:self childNodes={childNode.childNodes} {hash} />
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
            {#each (childNode.textContent || "").split(/\((.*?);\)/g) as part, index}
                {#if index % 2}
                    {@const [name, props] = part.split(/({.*})/)}
                    <Component {name} {...parseJson(props)} />{" "}
                {:else}
                    {part}
                {/if}
            {/each}
        {:else if childNode.nodeType === Node.COMMENT_NODE}
            {@html "<!--" + childNode.nodeValue + "-->"}
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
