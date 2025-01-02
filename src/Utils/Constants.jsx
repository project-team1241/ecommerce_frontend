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
        url: "https://i.ibb.co/TtDvZ2z/4-image-of-a-pair-of-shoe.jpg",
        brand: "Xclusive Wear",
        name: "Stylish Leather Sandals with Open Toe",
        rating: 4.5,
        reviews: 35,
    },
    {
        key: 2,
        url: "https://i.ibb.co/686VF8P/2610.jpg",
        brand: "Footwear Kingdom",
        name: "Elegant High Heels for Special Occasions",
        rating: 4.3,
        reviews: 48,
    },
    {
        key: 3,
        url: "https://i.ibb.co/NrFbJST/3800.jpg",
        brand: "Classy Shoes",
        name: "Trendy Sports Sneakers for Active Lifestyle",
        rating: 4.7,
        reviews: 72,
    },
    {
        key: 4,
        url: "https://i.ibb.co/Y0njPJW/8153.jpg",
        brand: "Chic Shoes",
        name: "Luxury Brown Leather Boots",
        rating: 4.6,
        reviews: 55,
    },
    {
        key: 5,
        url: "https://i.ibb.co/LPv09YQ/andres-jasso-Pqb-L-mxma-UE-unsplash.jpg",
        brand: "Footwear Fusion",
        name: "Classic Black Flats with Decorative Strap",
        rating: 4.4,
        reviews: 40,
    },
    {
        key: 6,
        url: "https://i.ibb.co/jWc7pws/a-pair-of-women-s-sandal.jpg",
        brand: "Elegant Step",
        name: "Comfortable Women's Sandals for Summer",
        rating: 4.8,
        reviews: 60,
    },
    {
        key: 7,
        url: "https://i.ibb.co/7Q8GgZn/a-pair-of-women-s-sandal-1.jpg",
        brand: "Classy Walk",
        name: "Stylish Women's Sandals for Everyday Use",
        rating: 4.3,
        reviews: 50,
    },
    {
        key: 8,
        url: "https://i.ibb.co/ChT80y5/a-pair-of-women-s-sandal-2.jpg",
        brand: "Urban Chic",
        name: "Casual Slip-On Women's Sandals",
        rating: 4.6,
        reviews: 65,
    },
    {
        key: 9,
        url: "https://i.ibb.co/f2tJhrF/a-pair-of-women-s-sandal-3.jpg",
        brand: "Stride Comfort",
        name: "Comfortable Sandals for Daily Wear",
        rating: 4.7,
        reviews: 58,
    },
    {
        key: 10,
        url: "https://i.ibb.co/KDdqtsx/felipepelaquim-6z-O5-VKogo-ZE-unsplash.jpg",
        brand: "Lifestyle Shoes",
        name: "Trendy and Sporty Shoes for Men",
        rating: 4.4,
        reviews: 42,
    },
    {
        key: 11,
        url: "https://i.ibb.co/NjjP6F8/irene-kredenets-dw-Ki-Hoqqxk8-unsplash.jpg",
        brand: "Footwear Hub",
        name: "Comfortable Sneakers for All Seasons",
        rating: 4.5,
        reviews: 65,
    },
    {
        key: 12,
        url: "https://i.ibb.co/NTdf0kF/jayson-hinrichsen-q-Ls4-WYXq-LNY-unsplash.jpg",
        brand: "Shoe Palace",
        name: "Classic Leather Boots for Winter",
        rating: 4.8,
        reviews: 78,
    },
    {
        key: 13,
        url: "https://i.ibb.co/x7j0xJF/shoes.jpg",
        brand: "Xclusive Wear",
        name: "Stylish Athletic Running Shoes",
        rating: 4.6,
        reviews: 90,
    },
    {
        key: 14,
        url: "https://i.ibb.co/3k3d4xb/xavier-teo-Sx-AXph-IPWeg-unsplash.jpg",
        brand: "Modern Steps",
        name: "Luxury High-End Sneakers",
        rating: 4.7,
        reviews: 110,
    },
];

export const WomenProducts = [
    {
        key: 1,
        url: "https://i.ibb.co/ssHrQJH/a-woman-standing-wearing-a-fashion-ware.jpg",
        brand: "GlamourTrend",
        name: "Elegant Black Midi Dress with Lace Detail",
        rating: 4.6,
        reviews: 58,
    },
    {
        key: 2,
        url: "https://i.ibb.co/gMhtxfs/a-woman-standing-wearing-a-fashion-ware-1.jpg",
        brand: "ChicAura",
        name: "Sophisticated White Blouse with Ruffled Sleeves",
        rating: 4.4,
        reviews: 45,
    },
    {
        key: 3,
        url: "https://i.ibb.co/NmtGsCm/a-women-with-panjabi-dress-standing-full.jpg",
        brand: "ElegantStyles",
        name: "Traditional Panjabi Dress with Embroidery",
        rating: 4.8,
        reviews: 65,
    },
    {
        key: 4,
        url: "https://i.ibb.co/KVV2PYk/a-women-with-panjabi-dress-standing-full-1.jpg",
        brand: "Classic Couture",
        name: "Royal Blue Panjabi Dress with Golden Detailing",
        rating: 4.7,
        reviews: 55,
    },
    {
        key: 5,
        url: "https://i.ibb.co/VJ11zrF/Leonardo-Phoenix-10-A-beautiful-Indian-woman-with-dark-brown-s-3.jpg",
        brand: "EthnoVibe",
        name: "Designer Saree for Festive Occasions",
        rating: 4.9,
        reviews: 120,
    },
    {
        key: 6,
        url: "https://i.ibb.co/zngSBRw/woman-standing-with-saree-standing-full-image.jpg",
        brand: "Vibrant Apparel",
        name: "Stunning Red Saree with Golden Borders",
        rating: 4.5,
        reviews: 87,
    },
    {
        key: 7,
        url: "https://i.ibb.co/sCKnm82/woman-standing-with-saree-standing-full-image-1.jpg",
        brand: "Grace Couture",
        name: "Charming Light Pink Saree with Floral Prints",
        rating: 4.7,
        reviews: 90,
    },
    {
        key: 8,
        url: "https://i.ibb.co/phT3PmD/woman-standing-with-saree-standing-full-image-2.jpg",
        brand: "Royal Elegance",
        name: "Golden Silk Saree with Intricate Work",
        rating: 4.8,
        reviews: 102,
    },
];

export const UserAddress = [
    {
        name: "Sara",
        houseNumber: "34",
        streetName: "Birch Drive",
        landmark: "Adjacent to Station",
        pincode: "110003",
        city: "New Delhi",
        phoneNumber: "98765*****",
    },
    {
        name: "David",
        houseNumber: "78",
        streetName: "Willow Way",
        landmark: "Near Market",
        pincode: "110091",
        city: "New Delhi",
        phoneNumber: "91234*****",
    },
    {
        name: "Emma",
        houseNumber: "56",
        streetName: "Cherry Street",
        landmark: "Behind Office",
        pincode: "110052",
        city: "New Delhi",
        phoneNumber: "98123*****",
    },
    {
        name: "Daniel",
        houseNumber: "13",
        streetName: "Spruce Avenue",
        landmark: "By the Lake",
        pincode: "110067",
        city: "New Delhi",
        phoneNumber: "98712*****",
    },
    {
        name: "Aarav",
        houseNumber: "98",
        streetName: "Ash Road",
        landmark: "Under the Bridge",
        pincode: "110055",
        city: "New Delhi",
        phoneNumber: "99123*****",
    },
];
