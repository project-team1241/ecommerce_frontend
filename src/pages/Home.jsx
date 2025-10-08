import { useEffect, useState } from "react";
import MainSwiper from "../components/MainSwiper";
import ProductSwiper from "/src/components/Products/ProductSwiper.jsx";
import Ads from "../components/Ads";
import { toast } from "react-hot-toast";
import { getProducts } from "../Utils/api/Products.js";

function Home() {
    const [menProducts, setMenProducts] = useState([]);
    const [womenProducts, setWomenProducts] = useState([]);
    const [footwareProducts, setFootwareProducts] = useState([]);

    /* 
        Fetch products from the API
        getProducts(category, subCategory, limit)
    */
    const fetchMenProduts = async () => {
        try {
            const menShirts = await getProducts("Men", "Shirts", 20);
            const menPants = await getProducts("Men", "Pants", 20);

            setMenProducts([
                ...(Array.isArray(menShirts) ? menShirts : []),
                ...(Array.isArray(menPants) ? menPants : []),
            ]);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error(error.response);
        }
    };

    const fetchShoes = async () => {
        try {
            const shoes = await getProducts("", "Shoes", 20);
            setFootwareProducts(Array.isArray(shoes) ? shoes : []);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error(error.response);
        }
    };

    const fetchWomenProducts = async () => {
        try {
            const womenDress = await getProducts("Women", "Dress", 20);
            setWomenProducts(Array.isArray(womenDress) ? womenDress : []);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error(error.response);
        }
    };

    useEffect(() => {
        fetchMenProduts();
        fetchWomenProducts();
        fetchShoes();
    }, []);

    return (
        <div className=" w-screen p-1 pr-2 bg-gray-50 overflow-y-scroll">
            <MainSwiper />
            <ProductSwiper SwiperData={menProducts} title={"Men Fashion"} />
            <ProductSwiper SwiperData={womenProducts} title={"Women Fashion"} />
            <Ads />
            <ProductSwiper SwiperData={footwareProducts} title={"Footware"} />
        </div>
    );
}

export default Home;
