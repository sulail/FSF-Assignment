const products = [
    {
        id: 1,
        name: "Coat shoes",
        price: 990,
        description: "Classic brown shoes adding elegance to any formal outfit.remium quality product with modern design.",
        image: "images/shoes1.jpg",
    },
    {
        id: 2,
        name: "Heels",
        price: 120,
        description: "Elegant heels with a stylish pearl design, perfect for weddings, parties, and formal events.",
        image: "images/shoes2.jpg",
    },
    {
        id: 3,
        name: "Jogger",
        price: 140,
        description: "Comfortable joggers designed for everyday wear and modern style.",
        image: "images/shoes3.jpg",
    },
    {
        id: 4,
        name: "Sports Shoes",
        price: 160,
        description: "Designed for gym workouts, training, and everyday active use.",
        image: "images/shoes4.jpg",
    },
    {
        id: 5,
        name: "Jogger",
        price: 180,
        description: "Perfect everyday shoes offering comfort and stylish appearance.",
        image: "images/shoes5.jpg",
    },
    {
        id: 6,
        name: "Sports Shoes",
        price: 250,
        description: "Lightweight running shoes with air cushioning for comfort and better support.",
        image: "images/shoes6.jpg",
    },
    {
        id: 7,
        name: "Jogger",
        price: 320,
        description: "Stylish sneakers combining comfort and sporty fashion.",
        image: "images/shoes7.jpg",
    },
    {
        id: 8,
        name: "Jogger",
        price: 260,
        description: "Modern joggers designed with a fashionable and comfortable fit.",
        image: "images/shoes8.jpg",

    },
    {
        id: 9,
        name: "Sports Shoes",
        price: 180,
        description: "Comfortable shoes with breathable fabric to keep feet fresh during activities.",
        image: "images/shoes9.jpg",
    },
    {
        id: 10,
        name: "Sports Shoes",
        price: 150,
        description: "Flexible training shoes providing comfort and stability during workouts.",
        image: "images/shoes10.jpg",
    },
    {
        id: 11,
        name: "Sports Shoes",
        price: 260,
        description: "Provides excellent impact protection and foot support while running.",
        image: "images/shoes11.jpg",
    },
    {
        id: 12,
        name: "Coat shoes",
        price: 940,
        description: "Comfortable and stylish shoes designed for daily professional use.",
        image: "images/shoes12.jpg",
    },
    {
        id: 13,
        name: "Coat shoes",
        price: 980,
        description: "Traditional lace-up design with a polished and attractive look.",
        image: "images/shoes13.jpg",
    },
    {
        id: 14,
        name: "Coat shoes",
        price: 990,
        description: "Modern formal shoes created for a confident professional appearance.",
        image: "images/shoes14.jpg",
    },
    {
        id: 15,
        name: "Heels",
        price: 520,
        description: "A timeless  heel design that adds confidence and sophistication to any outfit.",
        image: "images/shoes15.jpg",
    },

    {
        id: 16,
        name: "Heels",
        price: 220,
        description: "Stylish pumps offering a professional and elegant look for office and events. ",
        image: "images/shoes16.jpg",
    },
    {
        id: 17,
        name: "Heels",
        price: 220,
        description: "Lightweight open toe heels perfect for summer fashion and casual outings.",
        image: "images/shoes17.jpg",
    },
     {
        id: 18,
        name: "Sports Shoes",
        price: 260,
        description: "Strong and durable shoes suitable for hiking and outdoor activities.",
        image: "images/shoes18.jpg",
    },
      {
        id: 19,
        name: "Heels",
        price: 220,
        description: "Beautiful bridal heels designed with comfort and luxury for wedding occasions. ",
        image: "images/shoes19.jpg",
    },
     {
        id: 20,
        name: "Jogger",
        price: 320,
        description: "Perfect everyday shoes offering comfort and stylish appearance.",
        image: "images/shoes20.jpg",
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
