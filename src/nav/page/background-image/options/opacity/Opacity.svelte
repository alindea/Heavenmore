<script>
    import { opacity } from "./store";
</script>

<form>
    <input
        on:input={(e) => ($opacity = +e.currentTarget.value / 100)}
        type="range"
        min="5"
        max="95"
        step="1"
        title="background image opacity"
        value={Math.round($opacity * 100)}
    /><small>{Math.round($opacity * 100)}%</small>
</form>
