const products = [
    { id: 1, name: "iPhone 15", price: 79999, image: "https://powermaccenter.com/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-US_3295c924-7c21-417d-870c-32bee7f1e310.jpg?v=1695861436&width=823" },
    { id: 2, name: "Samsung Galaxy S23", price: 69999, image: "https://sm.pcmag.com/t/pcmag_me/photo/default/s23-ultra-18_n5vf.1920.jpg" },
    { id: 3, name: "Sony Headphones", price: 9999, image: "https://www.bing.com/th/id/OIP.QRKVvy3OugyohiXulElgmwHaHa?w=195&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" }
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
