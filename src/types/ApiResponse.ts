export interface ILocation {
  _id: string;
  name: string;
  mapIframe: string;
  cars: ICar[] | string[];
  createdAt: string;
  updatedAt: string;
}

export interface ICar {
  _id: string;
  title: string;
  description?: string;
  rentPerDay: number;
  imageUrl: string;
  isAvailable: boolean;
  featured: boolean;
  category: "medium" | "premium" | "small" | "large" | "SUVs" | "People Carrier" | "Estate";
  seats: number;
  bags: number;
  dors: number;
  ac: boolean;
  automatic: boolean;
  fuel: "petrol" | "diesel" | "cng" | "electric";
  location: ILocation | string;
  createdAt: string;
  updatedAt: string;
}
