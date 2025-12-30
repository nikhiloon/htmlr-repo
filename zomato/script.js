// Search Button Functionality
document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search-box button");
    const searchInput = document.querySelector(".search-box input");

    searchBtn.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for "${query}"...`);
            // You can replace this with actual search logic or redirect
        } else {
            alert("Please enter a restaurant, cuisine, or dish.");
        }
    });
});

// Hover Animation for Food Icons
const icons = document.querySelectorAll(".food-icons span");
icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.3)";
        icon.style.transition = "transform 0.3s ease";
    });

    icon.addEventListener("mouseout", () => {
        icon.style.transform = "scale(1)";
    });
});

// Highlight Restaurant Card on Hover
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.style.boxShadow = "0px 8px 20px rgba(0,0,0,0.3)";
        card.style.transform = "translateY(-5px)";
        card.style.transition = "all 0.3s ease";
    });

    card.addEventListener("mouseout", () => {
        card.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.1)";
        card.style.transform = "translateY(0)";
    });
});