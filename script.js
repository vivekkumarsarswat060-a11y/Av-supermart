let cart = [];

function addToCart(product) {
    cart++;
    document.getElementById("cart-count").innerText = cart;
    alert(product + " added to cart!");
}

const productsContainer = document.querySelector(".products");
const searchBox = document.getElementById("searchBox");

function displayProducts(list) {
    productsContainer.innerHTML += `
<div class="card">

    <span class="badge">⭐ Best Seller</span>

    <h3>${product.name}</h3>

    <p>${product.category}</p>

    <select>
        ${options}
    </select>

    <button onclick="addToCart('${product.name}')">
        🛒 Add to Cart
    </button>

</div>
`;
}
const adminProducts = JSON.parse(localStorage.getItem("products")) || [];

adminProducts.forEach(product => {
    products.push(product);
});
displayProducts(products);

searchBox.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
    );

    displayProducts(filtered);
});
function filterProducts(category){

    if(category==="All"){
        displayProducts(products);
        return;
    }

    const filtered = products.filter(product =>
        product.category === category
    );
document.getElementById("productCount").innerText =
"Available Products: " + products.length;
    displayProducts(filtered);
}
function topFunction(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function toggleTheme(){
    document.body.classList.toggle("dark-mode");
}
