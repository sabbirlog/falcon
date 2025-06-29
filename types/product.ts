export interface Category {
  id: number
  name: string
  slug: string
  image: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: number
  name: string
  slug: string
  image: string
  subchilds: SubChild[]
}

export interface SubChild {
  id: number
  name: string
  slug: string
  image: string
}

export interface Badge {
  id: number;
  name: string;
  type: number;
  type_label: string;
};

export interface Product {
  id: number;
  name: string;
  slug: string;
  regular_price: string;
  discount_price: string;
  is_variant: boolean;
  thumbnail: string;
  rating_avg: number;
  rating_count: number;
  available_stock: number;
  badges: Badge[];
  badgeProductVariationsExclude: []
};


export interface ProductColor {
  name: string
  value: string
  image?: string
}

export interface ProductSize {
  name: string
  available: boolean
}

export interface Seller {
  name: string
  verified: boolean
  rating: number
  shipOnTime: number
  chatResponse: number
  shopRating: number
}

export interface CartItem {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  color: string
  size: string
  quantity: number
  selected: boolean
  vendor: string
}
