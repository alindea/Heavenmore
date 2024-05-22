<script lang="ts">
    import { colorSchemeHtmlTagAttr, options } from "./store";
</script>

<form>
    <select title="color scheme" bind:value={$colorSchemeHtmlTagAttr}>
        {#each options as { value, label }}
            <option {value}>{label}</option>
        {/each}
    </select>
</form>
