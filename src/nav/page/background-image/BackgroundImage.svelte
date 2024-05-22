<script lang="ts">
    import { backgroundImage, imagesColorScheme } from "./store";
    import Options from "./options/Options.svelte";
    import { colorScheme } from "../color-scheme/store";

    $: image = backgroundImage[$colorScheme];
</script>

<form>
    <select title="background image" bind:value={$image}>
        {#each imagesColorScheme[$colorScheme] as { value, label }}
            <option {value}>{label}</option>
        {/each}
    </select>
</form>

{#if $image !== ""}
    <Options />
{/if}
