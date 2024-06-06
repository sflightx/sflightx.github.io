document.addEventListener("DOMContentLoaded", function() {
    
    // Get the key from the URL (e.g., ?key=article1)
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("articleKey");
    const baseUrl = "../../../updates/article/";

    // Load the snippet into the specified <div>
    const articleDiv = document.querySelector(".article");
    const snippetFilename = `${baseUrl}${key}.html`; // Assuming filenames match keys

    fetch(snippetFilename)
        .then((response) => response.text())
        .then((html) => {
        articleDiv.innerHTML = html;
    }).catch((error) => {
        articleDiv.innerHTML = "Error loading article.";
    });
});

