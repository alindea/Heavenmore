<script lang="ts">
    import { newErrorAlert } from "../alerts/store";
    import ChildNodes from "./ChildNodes.svelte";

    let hash = location.hash.substring(1);

    const parser = new DOMParser();

    fetch(
        "https://gist.githubusercontent.com/alindea/311ac18445902b1878b936bd5fa06946/raw/book.html?v=" +
            Date.now(),
    )
        .then((r) => r.text())
        .then((htmlString) => {
            childNodes = parser.parseFromString(htmlString, "text/html").body
                .childNodes;
        })
        .catch((err) => {
            newErrorAlert("Content: " + err.message);
            childNodes = parser.parseFromString(
                "<br/>Content not found",
                "text/html",
            ).body.childNodes;
        });

    let childNodes: NodeListOf<ChildNode>;
</script>

<main>
    <div>
        <h1><a href="/">The Book of Heavenmore</a></h1>
        <ChildNodes {hash} {childNodes} />
    </div>
</main>

<style>
    h1 {
        text-transform: uppercase;
        text-align: center;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
</style>
