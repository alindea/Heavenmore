<script lang="ts">
    import { backgroundImage, images } from "./store";
    import Options from "./options/Options.svelte";
    import { colorScheme } from "../color-scheme/store";

    let matchColorScheme: "light" | "dark" = "light";
    matchMedia("(prefers-color-scheme: dark)").addEventListener(
        "change",
        (e) => {
            matchColorScheme = e.matches ? "dark" : "light";
        },
    );

    $: scheme = $colorScheme === "auto" ? matchColorScheme : $colorScheme;

    $: image = backgroundImage[scheme];
</script>

<form>
    <select title="background image" bind:value={$image}>
        {#each images[scheme] as { value, label }}
            <option {value}>{label}</option>
        {/each}
    </select>
</form>

{#if $image !== ""}
    <Options />
{/if}
