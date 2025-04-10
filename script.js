const products = [
  { id: 1, name: "Cool Widget", price: 19.99, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=220&h=160" },
  { id: 2, name: "Fancy Gadget", price: 29.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fit=crop&w=220&h=160" },
  { id: 3, name: "Simple Tool", price: 9.99, image: "https://images.unsplash.com/photo-1582845512747-e42001c356b6?fit=crop&w=220&h=160" },
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productList.appendChild(productDiv);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const cartItem = document.createElement("p");
    cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(cartItem);
  });
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total.toFixed(2);
}

const audio = document.getElementById("bg-music");
const toggleButton = document.getElementById("music-toggle");
toggleButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleButton.textContent = "Pause Music";
  } else {
    audio.pause();
    toggleButton.textContent = "Play Music";
  }
});

window.onload = displayProducts;