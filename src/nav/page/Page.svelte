<script lang="ts">
    import BackgroundImage from "./background-image/BackgroundImage.svelte";
    import ColorScheme from "./color-scheme/ColorScheme.svelte";

    const options: {
        value: "" | "colors" | "background-image";
        label: string;
    }[] = [
        { value: "", label: "" },
        { value: "background-image", label: "Background image" },
        { value: "colors", label: "Colors" },
    ];

    let select =
        options.find((item) => item.value === localStorage.getItem("page"))
            ?.value || options[0]["value"];

    $: localStorage.setItem("page", select);
</script>

<form>
    <select title="page" bind:value={select}>
        {#each options as { value, label }}
            <option {value}>{label}</option>
        {/each}
    </select>
</form>
{#if select === "colors"}
    <ColorScheme />
{:else if select === "background-image"}
    <BackgroundImage />
{/if}
