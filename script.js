const products = [
  { id: 1, name: "Shoes 👟", price: 2000 },
  { id: 2, name: "Watch ⌚", price: 1500 },
  { id: 3, name: "Headphones 🎧", price: 3000 },
  { id: 4, name: "Phone 📱", price: 10000 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  const container = document.getElementById("products");

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart 🛒</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("count").innerText = cart.length;
}

displayProducts();
updateCart();
