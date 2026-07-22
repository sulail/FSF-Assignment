const products = [
    {
        id: 1,
        name: "electronics 1",
        price: 990,
        description: "Premium quality product with modern design.",
        image: "images/electronics1.jpg",
    },
    {
        id: 2,
        name: "electronics 2",
        price: 120,
        description: "Stylish and durable product.",
        image: "images/electronics2.jpg",
    },
    {
        id: 3,
        name: "electronics 3",
        price: 140,
        description: "Best quality for everyday use.",
        image: "images/electronics3.jpg",
    },
    {
        id: 4,
        name: "electronics 4",
        price: 160,
        description: "Elegant design and comfort.",
        image: "images/electronics4.jpg",
    },
    {
        id: 5,
        name: "electronics 5",
        price: 180,
        description: "Modern premium collection.",
        image: "images/electronics5.jpg",
    },
    {
        id: 6,
        name: "electronics 6",
        price: 200,
        description: "Perfect for daily lifestyle.",
        image: "images/electronics6.jpg",
    },
    {
        id: 7,
        name: "electronics 7",
        price: 220,
        description: "High-quality craftsmanship.",
        image: "images/electronics7.jpg",
    },
    {
        id: 8,
        name: "electronics 8",
        price: 240,
        description: "Luxury and performance.",
        image: "images/electronics8.jpg",
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
