const products = [
    {
        id: 1,
        name: "Kurta salwar",
        price: 990,
        description: "Premium quality product with modern design.",
        image: "images/cloth1.jpg",
    },
    {
        id: 2,
        name: "Kurta salwar",
        price: 120,
        description: "Stylish and durable product.",
        image: "images/cloth16.jpg",
    },
    {
        id: 3,
        name: "Frock",
        price: 140,
        description: "Best quality for everyday use.",
        image: "images/cloth2.jpg",
    },
    {
        id: 4,
        name: "Kurta salwar",
        price: 160,
        description: "Elegant design and comfort.",
        image: "images/cloth15.jpg",
    },
    {
        id: 5,
        name: "Frock",
        price: 180,
        description: "Modern premium collection.",
        image: "images/cloth3.jpg",
    },
    {
        id: 6,
        name: "Kurta salwar",
        price: 200,
        description: "Perfect for daily lifestyle.",
        image: "images/cloth14.jpg",
    },
    {
        id: 7,
        name: "Frock",
        price: 220,
        description: "High-quality craftsmanship.",
        image: "images/cloth4.jpg",
    },
    {
        id: 8,
        name: "Bomber Jacket",
        price: 240,
        description: "Luxury and performance.",
        image: "images/cloth13.jpg",
    },
    {
        id: 9,
        name: "Frock",
        price: 260,
        description: "Exclusive premium product.",
        image: "images/cloth5.jpg",
    },
    {
        id: 10,
        name: "Bomber Jacket",
        price: 280,
        description: "Beautiful and reliable.",
        image: "images/cloth12.jpg",
    },
    {
        id: 11,
        name: "Frock",
        price: 300,
        description: "Top-rated customer choice.",
        image: "images/cloth6.jpg",
    },
    {
        id: 12,
        name: "Pant shirt",
        price: 320,
        description: "Smart and stylish design.",
        image: "images/cloth11.jpg",
    },
    {
        id: 13,
        name: "Saree",
        price: 340,
        description: "Premium collection.",
        image: "images/cloth7.jpg",
    },
    {
        id: 14,
        name: "Pant shirt",
        price: 360,
        description: "Luxury quality guaranteed",
        image: "images/cloth10.jpg",
    },
    {
        id: 15,
        name: "Saree",
        price: 380,
        description: "Perfect modern choice.",
        image: "images/cloth8.jpg",
    },
    {
        id: 16,
        name: "Coat pant",
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
