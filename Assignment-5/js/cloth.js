const products = [
    {
        id: 1,
        name: "cloth1",
        price: 990,
        description: "Premium quality product with modern design.",
        image: "images/cloth1.jpg",
    },
    {
        id: 2,
        name: "cloth2",
        price: 120,
        description: "Stylish and durable product.",
        image: "images/cloth16.jpg",
    },
    {
        id: 3,
        name: "cloth3",
        price: 140,
        description: "Best quality for everyday use.",
        image: "images/cloth2.jpg",
    },
    {
        id: 4,
        name: "cloth4",
        price: 160,
        description: "Elegant design and comfort.",
        image: "images/cloth15.jpg",
    },
    {
        id: 5,
        name: "cloth5",
        price: 180,
        description: "Modern premium collection.",
        image: "images/cloth3.jpg",
    },
    {
        id: 6,
        name: "cloth6",
        price: 200,
        description: "Perfect for daily lifestyle.",
        image: "images/cloth14.jpg",
    },
    {
        id: 7,
        name: "cloth7",
        price: 220,
        description: "High-quality craftsmanship.",
        image: "images/cloth4.jpg",
    },
    {
        id: 8,
        name: "cloth8",
        price: 240,
        description: "Luxury and performance.",
        image: "images/cloth13.jpg",
    },
    {
        id: 9,
        name: "cloth9",
        price: 260,
        description: "Exclusive premium product.",
        image: "images/cloth5.jpg",
    },
    {
        id: 10,
        name: "cloth10",
        price: 280,
        description: "Beautiful and reliable.",
        image: "images/cloth12.jpg",
    },
    {
        id: 11,
        name: "cloth11",
        price: 300,
        description: "Top-rated customer choice.",
        image: "images/cloth6.jpg",
    },
    {
        id: 12,
        name: "cloth12",
        price: 320,
        description: "Smart and stylish design.",
        image: "images/cloth11.jpg",
    },
    {
        id: 13,
        name: "cloth13",
        price: 340,
        description: "Premium collection.",
        image: "images/cloth7.jpg",
    },
    {
        id: 14,
        name: "cloth14",
        price: 360,
        description: "Luxury quality guaranteed",
        image: "images/cloth10.jpg",
    },
    {
        id: 15,
        name: "cloth15",
        price: 380,
        description: "Perfect modern choice.",
        image: "images/cloth8.jpg",
    },
    {
        id: 16,
        name: "cloth16",
        price: 400,
        description: "Exclusive latest edition.",
        image: "images/cloth9.jpg",
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
