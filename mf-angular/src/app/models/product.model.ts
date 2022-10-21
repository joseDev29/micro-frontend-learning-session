interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: number;
  category: string;
  image: string;
  rating: Rating;
}
