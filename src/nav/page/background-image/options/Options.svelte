<script lang="ts">
    import Opacity from "./opacity/Opacity.svelte";
    import Source from "./source/Source.svelte";

    const options: { value: string; label: string }[] = [
        { value: "", label: "" },
        { value: "opacity", label: "Opacity" },
        { value: "source", label: "Source" },
    ];

    let option =
        options.find(
            (item) =>
                item.value === localStorage.getItem("background image options"),
        )?.value || options[0].value;
    $: localStorage.setItem("background image options", option);
</script>

<select bind:value={option} title="image options">
    {#each options as { value, label }}
        <option {value}>{label}</option>
    {/each}
</select>

{#if option === "opacity"}
    <Opacity />
{:else if option === "source"}
    <Source />
{/if}
