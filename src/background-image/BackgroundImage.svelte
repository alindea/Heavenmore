<script lang="ts">
    import { backgroundImageOpacity } from "../nav/page/background-image/options/opacity/store";
    import { backgroundImage } from "../nav/page/background-image/store";
    import { colorScheme } from "../nav/page/color-scheme/store";

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

{#if $image !== ""}<div
        style="background-image:url('images/{$image}');opacity:{$backgroundImageOpacity}"
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
