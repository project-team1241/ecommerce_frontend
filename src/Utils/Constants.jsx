import { FaFacebook, FaInstagram, FaTwitter,FaGooglePlay,FaApple  } from "react-icons/fa";
export const footerData = [
    {
        heading: "Shop Categories",
        items: [
            { label: "Men's Clothing", link: "/mens-clothing" },
            { label: "Women's Clothing", link: "/womens-clothing" },
            { label: "Electronics", link: "/electronics" },
            { label: "Home & Kitchen", link: "/home-kitchen" },
            { label: "Beauty & Personal Care", link: "/beauty-personal-care" }
        ]
    },
    {
        heading: "Customer Support",
        items: [
            { label: "FAQs", link: "/faqs" },
            { label: "Returns & Refunds", link: "/returns" },
            { label: "Shipping Info", link: "/shipping-info" },
            { label: "Size Guide", link: "/size-guide" }
        ]
    },
    {
        heading: "Your Account",
        items: [
            { label: "Login / Signup", link: "/login" },
            { label: "Order Tracking", link: "/order-tracking" },
            { label: "Wishlist", link: "/wishlist" }
        ]
    },
    {
        heading: "About Us",
        items: [
            { label: "Our Story", link: "/our-story" },
            { label: "Careers", link: "/careers" },
            { label: "Sustainability Initiatives", link: "/sustainability" }
        ]
    },
    {
        heading: "Legal",
        items: [
            { label: "Terms & Conditions", link: "/terms" },
            { label: "Privacy Policy", link: "/privacy" },
            { label: "Cookie Policy", link: "/cookies" }
        ]
    },
    {
        heading: "Payment Options",
        items: [
            { label: "Visa", link: "#" },
            { label: "MasterCard", link: "#" },
            { label: "PayPal", link: "#" },
            { label: "Stripe", link: "#" },
            { label: "Cash on Delivery", link: "#" }
        ]
    },
    {
        heading: "Trust & Security",
        items: [
            { label: "100% Secure Payments", link: "#" },
            { label: "Verified by SSL Certificate", link: "#" }
        ]
    },
    {
        heading: "Stay Connected",
        items: [
            { label: "Facebook", link: "https://facebook.com",icon: <FaFacebook /> },
            { label: "Instagram", link: "https://instagram.com",icon: <FaInstagram/> },
            { label: "Twitter", link: "https://twitter.com",icon: <FaTwitter /> }
        ]
    },
    {
        heading: "Mobile App",
        items: [
            { label: "App Store", link: "https://www.apple.com/app-store/", icon: <FaApple /> },
            { label: "Google Play", link: "https://play.google.com", icon: <FaGooglePlay /> }
        ]
    },
    {
        heading: "Contact Us",
        items: [
            { label: "Email: mailto:ecommerce@store.com", link: "mailto:ecommerce@store.com" },
            { label: "Phone: +91-1234-567-89", link: "tel:+123456789" },
            { label: "Address: 123 E-commerce St, City, Country", link: "#" }
        ]
    }
];

//Main swiper data
export const MainSwiperData = [
    {
      id: 1,  // Unique ID for the slide
      url: "https://i.ibb.co/NSWN63w/c857932113f9e5ad.webp",  // Image URL
      alt: "First slide alt text",  // Alt text for accessibility
    },
    {
      id: 2,  // Unique ID for the slide
      url: "https://i.ibb.co/87KHbR9/36936297551c5f46.webp", 
      alt: "Second slide alt text",
    },
    {
      id: 3,  // Unique ID for the slide
      url: "https://i.ibb.co/Vm2CCB7/24985ee329643e05.webp", 
      alt: "Third slide alt text",
    },
    {
      id: 4,  // Unique ID for the slide
      url:"https://i.ibb.co/7KjDdry/03988fdb408473ce.webp" , 
      alt: "Fourth slide alt text",
    },
    // Add more slides as needed
  ];
  