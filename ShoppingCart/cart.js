// Array of product objects using ES6 features
const products = [
    { id: 1, name: "Magic Wand", price: 10.00, description: "Unleash your wizardry skills." },
    { id: 2, name: "Invisibility Cloak", price: 20.00, description: "Disappear in style!" },
    { id: 3, name: "Time Turner", price: 30.00, description: "Turn back time with a twist." }
];

let cart = [];

// DOMContentLoaded to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const cartList = document.getElementById('cartList');

    // Function to render products
    const renderProducts = () => {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name} - $${product.price}</h3>
                <p>${product.description}</p>
            `;
            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            addButton.addEventListener('click', () => addToCart(product.id));
            productDiv.appendChild(addButton);
            productList.appendChild(productDiv);
        });
        
    };

    // Function to add a product to the cart
    const addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        renderCart();
    };

    //adding total items in cart
    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    };

    // Function to render the cart
    const renderCart = () => {
        cartList.innerHTML = ''; // Clear the cart list
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.className = 'cartItem';
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(cartItem);
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeFromCart(item.id));
            cartItem.appendChild(removeButton);
        });
        const totalPrice = getTotalPrice();
        const totalDiv = document.createElement('div');
        totalDiv.className = 'total';
        totalDiv.innerHTML = `<p>Total Price: $${totalPrice}</p>`;
        cartList.appendChild(totalDiv);

    };

    //Removing Items
    const removeFromCart = (productId) => {
        const product = products.find(p => p.id === productId);
        const index = cart.indexOf(product);
        cart.splice(index, 1);
        renderCart();
    };

    renderProducts();
});