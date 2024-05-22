<script>
    import { colorScheme } from "../../../color-scheme/store";
    import { backgroundImage } from "../../store";
    import { imagesOpacity } from "./store";

    $: image = backgroundImage[$colorScheme];

    $: opacity = imagesOpacity[$colorScheme][$image];

    $: localStorage.setItem(
        `background image opacity ${$colorScheme} ${$image}`,
        $opacity.toString(),
    );
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
