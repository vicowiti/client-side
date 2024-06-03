import axios from "axios";
import { toast } from "sonner";
import { School } from "../../types/global";

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

export type NewSchool = Omit<School, "id">;

export const createSchool = async (school: NewSchool) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/school`,
      school
    );

    toast.success("School created successfully.");

    return response.data;
  } catch (error) {
    toast.error("Could not create school.");
  }
};
