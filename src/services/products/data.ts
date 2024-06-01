import axios from "axios";
import { toast } from "sonner";

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
