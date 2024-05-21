<script lang="ts">
    import { colorScheme, options } from "./store";
</script>

<form>
    <select title="color scheme" bind:value={$colorScheme}>
        {#each options as { value, label }}
            <option {value}>{label}</option>
        {/each}
    </select>
</form>
