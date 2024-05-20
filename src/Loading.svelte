<script lang="ts">
    export let inline = false;
</script>

<svelte:element this={inline ? "span" : "div"} class="loading"
    >{#if !inline}Loading{/if}</svelte:element
>

<style>
    .loading::after {
        content: "...";
        animation: loadingDots 1s linear 800ms infinite;
    }

    div {
        overflow: hidden;
        opacity: 0;
        animation: loadingDelay 100ms linear 800ms forwards;
        text-align: center;
    }

    @keyframes loadingDelay {
        from {
            opacity: 0;
        }

        to {
            opacity: 100%;
        }
    }

    @keyframes loadingDots {
        0%,
        20% {
            content: "...";
        }

        40% {
            content: "\0a0\0a0\0a0";
        }

        60% {
            content: ".\0a0\0a0";
        }

        80%,
        100% {
            content: "..\0a0";
        }
    }
</style>
