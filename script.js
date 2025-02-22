const products = [
    { name: 'Product 1', price: 19.99 },
    { name: 'Product 2', price: 29.99 },
    { name: 'Product 3', price: 39.99 },
    { name: 'Product 4', price: 49.99 }
];

const searchButton = document.querySelector('.searchButton');
const searchInput = document.querySelector('.searchInput');
const productList = document.getElementById('product-list');

searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.toLowerCase();
    filterProducts(searchQuery);
});

function filterProducts(query) {
    productList.innerHTML = ''; // Clear the product list
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="img/p${product.name.split(' ')[1]}.jpg" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    } else {
        productList.innerHTML = '<p>No products found.</p>';
    }
}
/* Cart Modal */
        let cart = [];
        let total = 0;

        function addToCart(product, price) {
            cart.push({ product, price });
            total += price;
            updateCart();
            alert(product + " has been added to your cart.");
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            cartItems.innerHTML = ''; // Clear previous items
            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.product + " - $" + item.price.toFixed(2);
                cartItems.appendChild(li);
            });
            cartTotal.textContent = "$" + total.toFixed(2);
            document.getElementById('cart-modal').style.display = 'flex'; // Show cart
        }

        function closeCart() {
            document.getElementById('cart-modal').style.display = 'none'; // Hide cart
        }

        document.getElementById('cart-icon').addEventListener('click', updateCart);
