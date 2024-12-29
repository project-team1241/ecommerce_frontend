import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlay, FaApple } from "react-icons/fa";
export const footerData = [
    {
        heading: "Shop Categories",
        items: [
            { label: "Men's Clothing", link: "/mens-clothing" },
            { label: "Women's Clothing", link: "/womens-clothing" },
            { label: "Electronics", link: "/electronics" },
            { label: "Home & Kitchen", link: "/home-kitchen" },
            { label: "Beauty & Personal Care", link: "/beauty-personal-care" },
        ],
    },
    {
        heading: "Customer Support",
        items: [
            { label: "FAQs", link: "/faqs" },
            { label: "Returns & Refunds", link: "/returns" },
            { label: "Shipping Info", link: "/shipping-info" },
            { label: "Size Guide", link: "/size-guide" },
        ],
    },
    {
        heading: "Your Account",
        items: [
            { label: "Login / Signup", link: "/login" },
            { label: "Order Tracking", link: "/order-tracking" },
            { label: "Wishlist", link: "/wishlist" },
        ],
    },
    {
        heading: "About Us",
        items: [
            { label: "Our Story", link: "/our-story" },
            { label: "Careers", link: "/careers" },
            { label: "Sustainability Initiatives", link: "/sustainability" },
        ],
    },
    {
        heading: "Legal",
        items: [
            { label: "Terms & Conditions", link: "/terms" },
            { label: "Privacy Policy", link: "/privacy" },
            { label: "Cookie Policy", link: "/cookies" },
        ],
    },
    {
        heading: "Payment Options",
        items: [
            { label: "Visa", link: "#" },
            { label: "MasterCard", link: "#" },
            { label: "PayPal", link: "#" },
            { label: "Stripe", link: "#" },
            { label: "Cash on Delivery", link: "#" },
        ],
    },
    {
        heading: "Trust & Security",
        items: [
            { label: "100% Secure Payments", link: "#" },
            { label: "Verified by SSL Certificate", link: "#" },
        ],
    },
    {
        heading: "Stay Connected",
        items: [
            { label: "Facebook", link: "https://facebook.com", icon: <FaFacebook /> },
            { label: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
            { label: "Twitter", link: "https://twitter.com", icon: <FaTwitter /> },
        ],
    },
    {
        heading: "Mobile App",
        items: [
            { label: "App Store", link: "https://www.apple.com/app-store/", icon: <FaApple /> },
            { label: "Google Play", link: "https://play.google.com", icon: <FaGooglePlay /> },
        ],
    },
    {
        heading: "Contact Us",
        items: [
            { label: "Email: mailto:ecommerce@store.com", link: "mailto:ecommerce@store.com" },
            { label: "Phone: +91-1234-567-89", link: "tel:+123456789" },
            { label: "Address: 123 E-commerce St, City, Country", link: "#" },
        ],
    },
];

//Main swiper data
export const MainSwiperData = [
    {
        id: 1, // Unique ID for the slide
        url: "https://i.ibb.co/NSWN63w/c857932113f9e5ad.webp", // Image URL
        alt: "First slide alt text", // Alt text for accessibility
    },
    {
        id: 2, // Unique ID for the slide
        url: "https://i.ibb.co/87KHbR9/36936297551c5f46.webp",
        alt: "Second slide alt text",
    },
    {
        id: 3, // Unique ID for the slide
        url: "https://i.ibb.co/Vm2CCB7/24985ee329643e05.webp",
        alt: "Third slide alt text",
    },
    {
        id: 4, // Unique ID for the slide
        url: "https://i.ibb.co/7KjDdry/03988fdb408473ce.webp",
        alt: "Fourth slide alt text",
    },
    // Add more slides as needed
];

//Product swiper data
export const MenProducts = [
    {
        key: 1,
        url: "https://i.ibb.co/XLYtMgD/640-fashionable-male-fashion-model-dressed-in-slim-fit-pants-male-dress-with-aolive-green-male-backg.jpg",
        brand: "UrbanThreads",
        name: "Slim Fit Pants - Olive Green Charm",
        rating: 4.5,
        reviews: 120,
    },
    {
        key: 2,
        url: "https://i.ibb.co/FnH0yfW/640-fashionable-male-fashion-model-dressed-in-trendy-pants-with-amint-blue-male-background-showcasin.jpg",
        brand: "StyleCraft",
        name: "Trendy Pants - Mint Blue Elegance",
        rating: 4.6,
        reviews: 95,
    },
    {
        key: 3,
        url: "https://i.ibb.co/BcYjdtq/a-realistic-image-of-a-man-standing.jpg",
        brand: "EliteWear",
        name: "Casual Jacket - Everyday Comfort",
        rating: 4.4,
        reviews: 130,
    },
    {
        key: 4,
        url: "https://i.ibb.co/BNwxk5f/a-realistic-image-of-a-man-standing-1.jpg",
        brand: "UrbanThreads",
        name: "Denim Jacket - Classic Appeal",
        rating: 4.8,
        reviews: 210,
    },
    {
        key: 5,
        url: "https://i.ibb.co/M51pBR5/download-2.png",
        brand: "StyleCraft",
        name: "Formal Suit - Modern Fit",
        rating: 4.7,
        reviews: 180,
    },
    {
        key: 6,
        url: "https://i.ibb.co/z6Tf4Gb/image.jpg",
        brand: "EliteWear",
        name: "Athletic Hoodie - Sporty Vibe",
        rating: 4.5,
        reviews: 140,
    },
    {
        key: 7,
        url: "https://i.ibb.co/cNvqxvC/pexels-cottonbro-6256889.jpg",
        brand: "UrbanThreads",
        name: "Linen Shirt - Summer Comfort",
        rating: 4.3,
        reviews: 75,
    },
    {
        key: 8,
        url: "https://i.ibb.co/YbLL8LT/pexels-cottonbro-6626902.jpg",
        brand: "StyleCraft",
        name: "Designer T-Shirt - Casual Style",
        rating: 4.2,
        reviews: 90,
    },
    {
        key: 9,
        url: "https://i.ibb.co/yBtdH5d/pexels-jeffreyreed-769732.jpg",
        brand: "EliteWear",
        name: "Chino Pants - Semi-Formal Look",
        rating: 4.6,
        reviews: 160,
    },
    {
        key: 10,
        url: "https://i.ibb.co/0QjRyDC/pexels-jeffreyreed-769749.jpg",
        brand: "UrbanThreads",
        name: "Wool Blazer - Winter Warmth",
        rating: 4.7,
        reviews: 200,
    },
    {
        key: 11,
        url: "https://i.ibb.co/6PH6JkP/pexels-nswatzphoto-2769297.jpg",
        brand: "StyleCraft",
        name: "Track Jacket - Athletic Fit",
        rating: 4.4,
        reviews: 110,
    },
    {
        key: 12,
        url: "https://i.ibb.co/MSvgcLy/pexels-rahulshah-1043148.jpg",
        brand: "EliteWear",
        name: "Leather Jacket - Premium Style",
        rating: 4.8,
        reviews: 230,
    },
    {
        key: 13,
        url: "https://i.ibb.co/BLpP5JZ/pexels-salahkuro28-1232459.jpg",
        brand: "UrbanThreads",
        name: "Graphic Tee - Urban Vibes",
        rating: 4.2,
        reviews: 100,
    },
];

export const Footware = [
    {
        key: 1,
        url: "https://ibb.co/N7dNgd1",
        brand: "Xclusive Wear",
        name: "Stylish Leather Sandals with Open Toe",
        rating: 4.5,
        reviews: 35,
    },
    {
        key: 2,
        url: "https://ibb.co/JQv0RD2",
        brand: "StridePro",
        name: "Casual Summer Shoes for Everyday Use",
        rating: 4.2,
        reviews: 22,
    },
    {
        key: 3,
        url: "https://ibb.co/xz7SVHc",
        brand: "UrbanFeet",
        name: "Comfortable Sneakers for Active Lifestyles",
        rating: 4.8,
        reviews: 45,
    },
    {
        key: 4,
        url: "https://ibb.co/Z213ZbL",
        brand: "Runner's Choice",
        name: "Durable Sports Sandals for Hiking",
        rating: 4.3,
        reviews: 50,
    },
    {
        key: 5,
        url: "https://ibb.co/DrL2y2x",
        brand: "FastTrack",
        name: "Stylish Summer Slip-On Shoes",
        rating: 4.1,
        reviews: 30,
    },
    {
        key: 6,
        url: "https://ibb.co/FWvRYGz",
        brand: "VivaWear",
        name: "Chic Gladiator Sandals for Women",
        rating: 4.7,
        reviews: 28,
    },
    {
        key: 7,
        url: "https://ibb.co/fF6vbfK",
        brand: "SportyStyle",
        name: "Breathable Mesh Sneakers for Running",
        rating: 4.9,
        reviews: 52,
    },
    {
        key: 8,
        url: "https://ibb.co/fCqz9Vf",
        brand: "Trendify",
        name: "Modern Leather Casual Shoes",
        rating: 4.4,
        reviews: 25,
    },
    {
        key: 9,
        url: "https://ibb.co/jGd2Grq",
        brand: "UrbanFeet",
        name: "Classic Running Shoes for Men",
        rating: 4.6,
        reviews: 40,
    },
    {
        key: 10,
        url: "https://ibb.co/DG4mXSr",
        brand: "StepInStyle",
        name: "Outdoor Sandals for All-Day Comfort",
        rating: 4.3,
        reviews: 18,
    },
    {
        key: 11,
        url: "https://ibb.co/JBbRmMZ",
        brand: "SneakerTribe",
        name: "Luxe Sports Shoes for the Gym",
        rating: 4.8,
        reviews: 36,
    },
    {
        key: 12,
        url: "https://ibb.co/Rpy8SNZ",
        brand: "VivaWear",
        name: "Eco-Friendly Sneakers for Everyday Use",
        rating: 4.2,
        reviews: 24,
    },
    {
        key: 13,
        url: "https://ibb.co/ypNss3Q",
        brand: "StridePro",
        name: "Classic Slip-On Sneakers for Men",
        rating: 4.5,
        reviews: 33,
    },
    {
        key: 14,
        url: "https://ibb.co/gMSmkJb",
        brand: "ShoeMaster",
        name: "Comfortable Sport Sandals with Adjustable Straps",
        rating: 4.0,
        reviews: 12,
    },
];

export const WomenProducts = [
    {
        key: 1,
        url: "https://ibb.co/JcKmVBf",
        brand: "GlamourTrend",
        name: "Elegant Black Midi Dress with Lace Detail",
        rating: 4.6,
        reviews: 58,
    },
    {
        key: 2,
        url: "https://ibb.co/PmrXMpF",
        brand: "ChicAura",
        name: "Sophisticated White Blouse with Ruffled Sleeves",
        rating: 4.4,
        reviews: 45,
    },
    {
        key: 3,
        url: "https://ibb.co/FWmrxZx",
        brand: "VivaVibe",
        name: "Casual Denim Skirt with Distressed Detailing",
        rating: 4.2,
        reviews: 33,
    },
    {
        key: 4,
        url: "https://ibb.co/jgKRSMQ",
        brand: "StyleRush",
        name: "Bohemian Floral Print Maxi Dress for Summer",
        rating: 4.7,
        reviews: 27,
    },
    {
        key: 5,
        url: "https://ibb.co/2thCj0M",
        brand: "UrbanChic",
        name: "Trendy Leather Jacket with Zip Pockets",
        rating: 4.5,
        reviews: 60,
    },
    {
        key: 6,
        url: "https://ibb.co/02bsGvK",
        brand: "ModeFemme",
        name: "Charming A-Line Skirt in Pastel Pink",
        rating: 4.3,
        reviews: 22,
    },
    {
        key: 7,
        url: "https://ibb.co/Yp3LcSJ",
        brand: "BellaStyles",
        name: "Classic Striped T-shirt with V-neck",
        rating: 4.6,
        reviews: 51,
    },
    {
        key: 8,
        url: "https://ibb.co/R4hp6K7",
        brand: "VividVogue",
        name: "Chic Black Palazzo Pants with High Waist",
        rating: 4.8,
        reviews: 42,
    },
];
