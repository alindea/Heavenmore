<script>
    import { backgroundImageOpacity } from "./store";
</script>

<form>
    <input
        on:input={(e) =>
            ($backgroundImageOpacity = +e.currentTarget.value / 100)}
        type="range"
        min="5"
        max="95"
        step="1"
        title="background image opacity"
        value={Math.round($backgroundImageOpacity * 100)}
    /><small>{Math.round($backgroundImageOpacity * 100)}%</small>
</form>
