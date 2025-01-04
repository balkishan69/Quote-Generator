const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const loadingElement = document.getElementById("loading");

async function fetchQuote() {
    try {
        loadingElement.style.display = "block";
        quoteElement.style.display = "none";
        authorElement.style.display = "none";

        // Fetch from your own backend API
        const response = await fetch('http://localhost:5000/api/quotes');  // Replace with your live URL if needed

        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }

        const data = await response.json();

        // Check if data is an array and has at least one quote
        if (Array.isArray(data) && data.length > 0) {
            // Randomly pick a quote from the list
            const randomQuote = data[Math.floor(Math.random() * data.length)];

            // Show the quote and author
            quoteElement.textContent = `"${randomQuote.text}"`;  // Ensure the property is 'text'
            authorElement.textContent = `- ${randomQuote.author}`;  // Ensure the property is 'author'
        } else {
            quoteElement.textContent = "No quotes available.";
            authorElement.textContent = "";
        }

        loadingElement.style.display = "none";
        quoteElement.style.display = "block";
        authorElement.style.display = "block";
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteElement.textContent = "Failed to load quote.";
        authorElement.textContent = "";
        loadingElement.style.display = "none";
        quoteElement.style.display = "block";
    }
}

fetchQuote();
