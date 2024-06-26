import axios from "axios";
import { Invoice } from "../../types/global";
import { toast } from "sonner";

export const getAllInvoices = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/invoice`);

  return response.data;
};

export const getSchoolInvoices = async (id: string) => {
  const allInvoices: Invoice[] = await getAllInvoices();

  const currentInvoices = allInvoices?.filter(
    (invoice) => invoice.school_id === id
  );

  return currentInvoices;
};
export type CreateInvoice = Omit<Invoice, "id">;

export const createInvoice = async (invoice: CreateInvoice) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/invoice`,
      invoice
    );

    toast.success("Invoice created successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editInvoice = async (invoice: Invoice, id: string) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/invoice/${id}`,
      invoice
    );
    toast.success("Invoice edited successfully");
    return response.data;
  } catch (error) {
    toast.error("Error editing invoice");
  }
};
