// Welcome Message
window.addEventListener("load", () => {
    alert("Welcome to AV Supermart!");
});

// Add to Cart
let cart = 0;

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        alert("Product added to cart!\nItems in cart: " + cart);
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
