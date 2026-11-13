let cartCount = 0;

// Add food items to cart
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;

        document.getElementById("cart-count").textContent = cartCount;

        document.getElementById("message").textContent =
            "Food item added to cart successfully!";
    });
});

// Filter food items by category
const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const category = button.getAttribute("data-category");

        document.querySelectorAll(".food-card").forEach(function(card) {

            if (category === "All" ||
                card.getAttribute("data-category") === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
    });
});