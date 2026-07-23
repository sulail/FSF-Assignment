const products = [
    {
        id: 1,
        name: "Laptop",
        price: 990,
        description: "Smooth performance for office work and online learning..",
        image: "images/electronics1.jpg",
    },
    {
        id: 2,
        name: "Computer",
        price: 120,
        description: "Powerful sound with deep bass.",
        image: "images/electronics2.jpg",
    },
    {
        id: 3,
        name: "Power Bank",
        price: 140,
        description: "High-capacity portable charging.",
        image: "images/electronics3.jpg",
    },
    {
        id: 4,
        name: "SmartWatch",
        price: 160,
        description: "Lightweight Bluetooth headphones with all-day comfort.",
        image: "images/electronics4.jpg",
    },
    {
        id: 5,
        name: " Bluetooth Speaker",
        price: 180,
        description: "Powerful sound with deep bass.",
        image: "images/electronics5.jpg",
    },
    {
        id: 6,
        name: "Headphones",
        price: 200,
        description: "Perfect for daily lifestyle.",
        image: "images/electronics6.jpg",
    },
    {
        id: 7,
        name: "Tablet",
        price: 220,
        description: "Stylish tablet with fast performance and ample storage.",
        image: "images/electronics7.jpg",
    },
    {
        id: 8,
        name: "AirPods",
        price: 240,
        description: "Luxury and performance.",
        image: "images/electronics8.jpg",
    },
    {
        id: 9,
        name: "Smart Home Camera",
        price: 240,
        description: "Luxury and performance.",
        image: "images/electronics9.jpg",
    },
    {
        id: 10,
        name: "Smart LED Desk Lamp",
        price: 240,
        description: "Adjustable brightness with touch control.",
        image: "images/electronics10.jpg",
    },{
        id: 11,
        name: "Mini Bluetooth Projector",
        price: 240,
        description: "Compact projector for home entertainment.",
        image: "images/electronics11.jpg",
    },{
        id: 12,
        name: "stars lamp",
        price: 240,
        description: "Luxury and performance.",
        image: "images/electronics12.jpg",
    },
];

let html = "";

let container = document.getElementById("products");
container.innerHTML = html;

for (let i = 0; i < products.length; i++) {
    html += `
    <div class="card ">

        <img src="${products[i].image}" alt="${products[i].name}">

        <div class="content">
            <p class="price">$${products[i].price}</p>

            <h3>${products[i].name}</h3>

            <p class="desc">
                ${products[i].description.slice(0, 60)}...
            </p>
   <div class="rating">
                ⭐⭐⭐⭐☆
            </div>

            <button>Order Now</button>
        </div>

    </div>
    `;
}

container.innerHTML = html;
