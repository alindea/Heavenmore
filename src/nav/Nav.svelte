<script lang="ts">
    import Page from "./page/Page.svelte";

    const options: { value: "" | "page" | "content"; label: string }[] = [
        { value: "", label: "" },
        { value: "page", label: "Page" },
        { value: "content", label: "Content" },
    ];

    let select =
        options.find((item) => item.value === localStorage.getItem("select"))
            ?.value || options[0].value;
    $: localStorage.setItem("select", select);
</script>

<nav>
    <Page />
</nav>
