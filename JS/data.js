
 let itemData = [
    {
        name: "Avant-Garde Lamp",
        Price: 179.9,
        image: "../images/pexels-photo-2082090.jpeg",
        id: 1,
        category: "Lamp",
        Company: "Modenza",
        description: "This avant-garde lamp is a striking fusion of art and function, designed to elevate any room with its bold, sculptural silhouette. The unique shape and contemporary materials create a centerpiece that draws the eye while providing warm, ambient lighting. Ideal for modern and minimalist interiors, it’s perfect for side tables, desks, or reading nooks in need of a stylish glow."
    },
    {
        name: "Chic char",
        Price: 339.9,
        image: "../images/pexels-photo-6758398.jpeg",
        id: 2,
        category: "Chairs",
        Company: "Modenza",
        description: "Blending elegance with comfort, the Chic Char offers a refined seating experience wrapped in premium fabric with subtle detailing. The sleek legs and ergonomic backrest make it both a statement piece and a practical addition to any room. Whether you place it in a living room, reading corner, or stylish office, this chair adds a modern charm that complements any décor."
    },
    {
        name: "Coffee Table",
        Price: 179.99,
        image: "../images/pexels-photo-6480707.jpeg",
        id: 3,
        category: "Tables",
        Company: "Modenza",
        description: "Crafted for both style and stability, this modern coffee table is the perfect centerpiece for your living area. Its tempered glass top is easy to clean and visually lightens the room, while the sturdy metal frame ensures durability. Ideal for hosting coffee, books, and conversation, it blends seamlessly into contemporary, industrial, or mid-century interiors."
    },
    {
        name: "Comfy Bed",
        Price: 129.99,
        image: "../images/pexels-photo-4857775.jpeg",
        id: 4,
        category: "Beds",
        Company: "Luxora",
        description: "The Comfy Bed by Luxora is engineered for deep rest and lasting support. Featuring a cushioned headboard, soft fabric finish, and a robust frame, this bed ensures both comfort and durability. Whether you're relaxing with a book or enjoying a peaceful night’s sleep, this bed transforms your bedroom into a haven of modern luxury and tranquility."
    },
    {
        name: "Contemporary Sofa",
        Price: 129.99,
        image: "../images/pexels-photo-1571459.jpeg",
        id: 5,
        category: "Sofas",
        Company: "Luxora",
        description: "This contemporary sofa brings together minimalist design and everyday comfort. It features clean lines, supportive cushions, and a compact form that’s ideal for small or open-plan spaces. Upholstered in soft, high-quality fabric, it’s perfect for entertaining guests or unwinding after a long day. A must-have for anyone who values both aesthetics and coziness."
    },
    {
        name: "Cutting-Edge Bed",
        Price: 84.99,
        image: "../images/pexels-photo-2029694.jpeg",
        id: 6,
        category: "Beds",
        Company: "Artifex",
        description: "With its bold silhouette and functional design, the Cutting-Edge Bed redefines modern sleeping spaces. Crafted with a strong frame and minimalist profile, it supports your mattress while enhancing your room’s visual appeal. Its versatile style pairs effortlessly with various bedding and décor, making it an excellent choice for both master bedrooms and guest rooms alike."
    },
    {
        name: "Futuristic shelves",
        Price: 94.99,
        image: "../images/pexels-photo-2177482.jpeg",
        id: 7,
        category: "Shelves",
        Company: "Homestead",
        description: "Bring structure and personality to your walls with these futuristic shelves designed for the modern home. Featuring asymmetric, geometric lines and durable construction, they provide a functional and decorative way to showcase books, art, or plants. Ideal for compact spaces, home offices, or creative studios where organization meets statement style."
    },
    {
        name: "Glass table",
        Price: 159.99,
        image: "../images/pexels-photo-1571452.jpeg",
        id: 8,
        category: "Tables",
        Company: "Comfora",
        description: "Sleek, stylish, and sophisticated, the Glass Table from Comfora adds a refined touch to any living space. With its minimalist clear top and chic, sculptural base, it serves as both a functional surface and a visual highlight. Perfect for contemporary homes, this table enhances light flow and creates an airy, uncluttered atmosphere in your room."
    },
    {
        name: "King bed",
        Price: 189.99,
        image: "../images/pexels-photo-6489083.jpeg",
        id: 9,
        category: "Beds",
        Company: "Artifex",
        description: "Experience luxurious rest with the King Bed from Artifex, designed for both comfort and grandeur. Its upholstered headboard adds elegance, while the wide, sturdy frame provides ample sleeping space. Built for those who prioritize both design and relaxation, this bed makes an impressive statement in any master suite or upscale guest room."
    },
    {
        name: "Lounge chair",
        Price: 259.99,
        image: "../images/pexels-photo-6758398.jpeg",
        id: 10,
        category: "Chairs",
        Company: "Homestead",
        description: "Designed for comfort and visual appeal, the Lounge Chair by Homestead features soft curves, generous padding, and a supportive frame. Ideal for reading, relaxing, or accenting your living room, its contemporary silhouette adds character while maximizing coziness. Whether alone or paired with a sofa, this chair is a stylish retreat after a long day."
    }
];



itemData = JSON.stringify(itemData)

localStorage.setItem('data', itemData)