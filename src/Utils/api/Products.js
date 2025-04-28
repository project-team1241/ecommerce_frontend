import React from "react";
import { API_URL } from "./urls";
import { axiosInstance } from "./index";

export const getProducts = async (
    category = "",
    subCategory = "",
    limit = 1
) => {
    try {
        const response = await axiosInstance.get(
            `${API_URL}/products?category=${category}&subCategory=${subCategory}&limit=${limit}`
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return error;
    }
};
