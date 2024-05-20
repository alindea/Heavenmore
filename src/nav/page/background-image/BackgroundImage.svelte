<script>
    import { select, options } from "./store";
    import Options from "./options/Options.svelte";
</script>

<form>
    <select title="background image" bind:value={$select}>
        {#each options as { value, label }, i}
            <option {value}>{label}</option>
        {/each}
    </select>
</form>

{#if $select !== ""}
    <Options />
{/if}
