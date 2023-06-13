// Add event listener to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
});

// Function to add a product to the cart
function addToCart(event) {
    const productCard = event.target.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('.price').textContent;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img src="logo.png" alt="${productName}">
        <span class="name">${productName}</span>
        <span class="price">${productPrice}</span>
        <button class="remove-btn">Remove</button>
    `;

    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.appendChild(cartItem);

    updateCartTotal();
}

// Add event listener to the "Remove" buttons in the cart
const removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach((button) => {
    button.addEventListener('click', removeFromCart);
});

// Function to remove a product from the cart
function removeFromCart(event) {
    const cartItem = event.target.closest('.cart-item');
    cartItem.remove();

    updateCartTotal();
}

// Function to update the total price in the cart
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach((item) => {
        const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
        total += price;
    });

    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `$${total.toFixed(2)}`;
}
