import axios from "axios";
import { toast } from "sonner";
import { Product } from "../../types/global";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/products`
    );
    return response.data;
  } catch (error) {
    toast.error("Could not fetch products");
  }
};

export type MyProduct = Omit<Product, "id">;

export const createProduct = async (product: MyProduct) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/products`,
      product
    );
    toast.success("Product created successfully");
    return response.data;
  } catch (error) {
    toast.error("Could not create product");
  }
};
