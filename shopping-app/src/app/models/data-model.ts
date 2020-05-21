export interface ProductData {
  id: number;
  name: string;
  rating: number;
  price: number;
  imageUrl: string;
  disable: boolean;
  quantity: number;
}

export interface ShipForm {
  firstName: string;
  secondName: string;
  address1: string;
  address2: string;
  country: string;
  city: string;
  zip: string;
  phone: number;
}
