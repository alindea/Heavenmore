<script lang="ts">
    import ChildNodes from "./ChildNodes.svelte";

    let hash = location.hash.substring(1);

    const parser = new DOMParser();

    const url =
        localStorage.getItem("url") ||
        "https://gist.githubusercontent.com/alindea/311ac18445902b1878b936bd5fa06946/raw/book.html";

    fetch(url + "?v=" + Date.now())
        .then((r) => r.text())
        .then((htmlString) => {
            childNodes = parser.parseFromString(htmlString, "text/html").body
                .childNodes;
        })
        .catch((err) => {
            childNodes = parser.parseFromString(
                "<br/>" + err.message,
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
