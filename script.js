
let cart = [];

let foodData = {
    "Urban Bites": [
        { name: "Cheese Burger", price: 140, emoji: "🍔" },
        { name: "Veg Pizza", price: 160, emoji: "🍕" },
        { name: "French Fries", price: 80, emoji: "🍟" },
        { name: "Pasta", price: 130, emoji: "🍝" },
        { name: "Sandwich", price: 100, emoji: "🥪" },
        { name: "Cold Drink", price: 60, emoji: "🥤" }
    ],

    "Tasty Corner": [
        { name: "Chicken Biryani", price: 180, emoji: "🍛" },
        { name: "Masala Dosa", price: 80, emoji: "🥞" },
        { name: "Idli Sambar", price: 60, emoji: "🍚" },
        { name: "Fried Rice", price: 130, emoji: "🍚" },
        { name: "Noodles", price: 120, emoji: "🍜" },
        { name: "Paneer Curry", price: 160, emoji: "🥘" }
    ]
};

function showFoods(restaurant) {
    document.getElementById("restaurants").style.display = "none";
    document.getElementById("foods").style.display = "block";
    document.getElementById("cart").style.display = "none";

    document.getElementById("restaurantName").innerText = restaurant;

    let list = "";

    foodData[restaurant].forEach(function(food) {
        list += `
            <div class="food">
                <span>${food.emoji}</span>
                <h3>${food.name}</h3>
                <p>₹${food.price}</p>

                <button onclick="addToCart('${food.name}', ${food.price})">
                    Add to Cart
                </button>
            </div>
        `;
    });

    document.getElementById("foodList").innerHTML = list;
}

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cartCount").innerText = cart.length;

    alert(name + " added to cart! 🛒");
}

function showCart() {
    document.getElementById("restaurants").style.display = "none";
    document.getElementById("foods").style.display = "none";
    document.getElementById("cart").style.display = "block";

    let items = "";

    if (cart.length == 0) {
        items = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(function(item) {
            items += `
                <div class="food">
                    <h3>🍽️ ${item.name}</h3>
                    <p>₹${item.price}</p>
                </div>
            `;
        });
    }

    document.getElementById("cartItems").innerHTML = items;
}

function buyNow() {
    if (cart.length == 0) {
        alert("Please add food to cart first!");
        return;
    }

    document.getElementById("message").innerText =
        "✅ Order Placed Successfully! 🎉";

    cart = [];

    document.getElementById("cartCount").innerText = 0;
}

function goHome() {
    document.getElementById("restaurants").style.display = "block";
    document.getElementById("foods").style.display = "none";
    document.getElementById("cart").style.display = "none";

    document.getElementById("message").innerText = "";
}
   