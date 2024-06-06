document.addEventListener("DOMContentLoaded", function() {
    
    // Get the key from the URL (e.g., ?key=article1)
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("articleKey");
    const baseUrl = "https://sflightx.com/updates/article/";

    // Load the snippet into the specified <div>
    const articleDiv = document.querySelector(".article");
    const snippetFilename = `${baseUrl}${key}.html`; // Assuming filenames match keys

    fetch(snippetFilename)
    .then((response) => response.text())
    .then((html) => {
        // Create a temporary container to parse the child snippet
        const tempContainer = document.createElement("div");
        tempContainer.innerHTML = html;

        // Extract the child snippet's <head>
        const childHead = tempContainer.querySelector("head");

        // Replace the parent's <head> with the child's <head>
        document.head.innerHTML = childHead.innerHTML;

        // Append the remaining content to the parent's <body>
        articleDiv.innerHTML = tempContainer.querySelector("body").innerHTML;
    }).catch((error) => {
         articleDiv.innerHTML = "Error loading article.";
         console.log(error);
    });
});

