const products = [
    { id: 1, name: "iPhone 15", price: 79999, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Samsung Galaxy S23", price: 69999, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Sony Headphones", price: 9999, image: "https://via.placeholder.com/200" }
];

const productList = document.getElementById("product-list");
const cartBtn = document.getElementById("cart-btn");
let cartCount = 0;

function loadProducts() {
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
}

cartBtn.addEventListener("click", () => alert(`Items in Cart: ${cartCount}`));

window.onload = loadProducts;
