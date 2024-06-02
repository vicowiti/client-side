export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface School {
  id: string;
  name: string;
  type: string;
  county: string;
  email: string;
  contact: string;
  address: string;
  balance: number;
  products: string[];
}

export interface Product {
  id: string;
  name: string;
  target: number;
  description: string;
  active: boolean
}

export interface Invoice {
  id: string;
  school_id: string;
  invoiceNumber: string;
  product: {
    id: string;
    name: string;
  };
  amount: number;
  creationDate: string;
  status: string;
  dueDate: string;
  paidAmount: number;
  dueAmount: number;
}

export interface Collection {
  id: string;
  invoiceNumber: string;
  collectionNo: string;
  collectionDate: string;
  status: "Valid" | "Bounced";
  amount: number;
}
