<script lang="ts">
    import Component from "../../../../../components/Component.svelte";
    import { colorScheme } from "../../../color-scheme/store";
    import { imagesColorScheme, backgroundImage } from "../../store";

    $: image = backgroundImage[$colorScheme];
</script>

<small
    ><a
        title="background image source"
        href={imagesColorScheme[$colorScheme].find(
            (item) => item.value === $image,
        )?.source || "/"}><Component name="Link icon" height="1em" /></a
    ></small
>
