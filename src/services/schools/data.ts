import axios from "axios";
import { toast } from "sonner";
import { School } from "../../types/global";
import { BASE_URL } from "../../utils/global";

export const getAllSchools = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/school`);

    return response.data;
  } catch (error) {
    toast.error("Could not fetch schools.");
  }
};

export const getSchoolById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/school/${id}`);

    return response.data;
  } catch (error) {
    toast.error("Could not fetch school.");
  }
};

type NewSchool = Omit<School, "id">;

export const createSchool = async (school: NewSchool) => {
  try {
    const response = await axios.post(`${BASE_URL}/school`, school);

    toast.success("School created successfully.");

    return response.data;
  } catch (error) {
    toast.error("Could not create school.");
  }
};
