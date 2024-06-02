import axios from "axios";
import { Collection, Invoice } from "../../types/global";
import { toast } from "sonner";
import { editInvoice, getAllInvoices } from "../invoices/data";
import { BASE_URL } from "../../utils/global";

export const getAllCollections = async () => {
  const response = await axios.get(`${BASE_URL}/collection`);

  return response.data;
};

export const getInvoiceCollections = async (invoiceNo: string) => {
  const allCollections: Collection[] = await getAllCollections();

  const currentInvoiceCollections = allCollections.filter(
    (collection) => collection.invoiceNumber === invoiceNo
  );

  console.log("I ran");

  return currentInvoiceCollections;
};

type NewCollection = Omit<Collection, "id">;

export const createCollection = async (collection: NewCollection) => {
  // Get the invoice
  // Ensure it is still pending
  // Create the collection
  // Deduct the amount from the invoice
  //  Update the invoice
  try {
    const response = await axios.post(`${BASE_URL}/collection`, collection);
    toast.success("Collection Created");

    const currentInvoices: Invoice[] = await getAllInvoices();

    const invoiceToEdit = currentInvoices.find(
      (invoice) => invoice.invoiceNumber === collection.invoiceNumber
    );

    if (invoiceToEdit) {
      const newInvoice: Invoice = {
        ...invoiceToEdit,
        amount: invoiceToEdit.amount,
        status:
          collection.amount === invoiceToEdit.dueAmount
            ? "Completed"
            : "Pending",
        dueAmount: invoiceToEdit.dueAmount - collection.amount,
        paidAmount: invoiceToEdit.paidAmount + collection.amount,
      };

      await editInvoice(newInvoice, newInvoice.id);
    }

    return response.data;
  } catch (error) {
    toast.error("Error Creating Collection");
  }
};

export const editCollection = async (collection: Collection, id: string) => {
  //change status from valid to bounced
  // update collection status
  // Get the invoice
  // Ensure it is still pending
  // add the amount back to the invoice
  // Update the invoice
  try {
    const response = await axios.put(
      `${BASE_URL}/collection/${id}`,
      collection
    );
    toast.success("Collection Edited");

    const currentInvoices: Invoice[] = await getAllInvoices();

    const invoiceToEdit = currentInvoices.find(
      (invoice) => invoice.invoiceNumber === collection.invoiceNumber
    );

    if (invoiceToEdit && collection.status === "Bounced") {
      const newInvoice: Invoice = {
        ...invoiceToEdit,
        amount: invoiceToEdit.amount,
        status:
          collection.amount === invoiceToEdit.dueAmount
            ? "Completed"
            : "Pending",
        dueAmount: invoiceToEdit.dueAmount + collection.amount,
        paidAmount: invoiceToEdit.paidAmount - collection.amount,
      };

      await editInvoice(newInvoice, newInvoice.id);
    }

    return response.data;
  } catch (error) {
    toast.error("Error Creating Collection");
  }
};
