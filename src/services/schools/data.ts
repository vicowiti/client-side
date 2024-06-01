import axios from "axios";
import { toast } from "sonner";

export const getAllSchools = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/school`);

    return response.data;
  } catch (error) {
    toast.error("Could not fetch schools.");
  }
};

export const getSchoolById = async (id: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/school/${id}`
    );

    return response.data;
  } catch (error) {
    toast.error("Could not fetch school.");
  }
};
