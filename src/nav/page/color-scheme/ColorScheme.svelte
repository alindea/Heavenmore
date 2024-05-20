<script lang="ts">
    import { selectColorScheme, options } from "./store";
</script>

<form>
    <select title="color scheme" bind:value={$selectColorScheme}>
        {#each options as { value, label }}
            <option {value}>{label}</option>
        {/each}
    </select>
</form>
