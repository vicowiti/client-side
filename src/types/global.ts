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
  contact: string;
  address: string;
  balance: number;
  products: string[];
}

export interface Product {
  id: string;
  name: string;
}
