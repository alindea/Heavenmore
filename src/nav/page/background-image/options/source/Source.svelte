<script lang="ts">
    import Component from "../../../../../components/Component.svelte";
    import { colorScheme } from "../../../color-scheme/store";
    import { images, backgroundImage } from "../../store";

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

<small
    ><a
        title="background image source"
        href={images[scheme].find((item) => item.value === $image)?.source ||
            "/"}><Component name="Link icon" height="1em" /></a
    ></small
>
