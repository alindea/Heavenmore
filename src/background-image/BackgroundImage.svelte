<script>
    import { opacity } from "../nav/page/background-image/options/opacity/store";
    import { select } from "../nav/page/background-image/store";
</script>

{#if $select !== ""}<div
        style="background-image:url('images/{$select}');opacity:{$opacity}"
    />{/if}

<style>
    div {
        z-index: -10;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        opacity: 0.5;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>
