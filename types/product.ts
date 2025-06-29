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

interface ImageEntry {
  url: string;
}

export interface ImageMap {
  [key: string]: ImageEntry;
}

export interface ProductDetail {
  id: number;
  product_id: number;
  regular_price: string;
  discount_price: string;
}

export interface Merchant {
  id: number;
  shop_name: string;
}

export interface Media {
  id: number;
  model_type: string;
  model_id: number;
  collection_name: string;
  file_path: string;
  file_type: string;
  tags: string;
  created_at: string;
  updated_at: string;
  full_url: string;
}

export interface Brand {
  id: number;
  merchant_id: number | null;
  name: string;
  slug: string;
  status: string;
  created_at: string;
  updated_at: string;
  image: string;
  media: Media[];
}

export interface ShopProduct {
  id: number;
  merchant_id: number;
  product_id: number;
  active_status: number;
  status: string;
  product_type: number;
  regular_price: string;
  e_price: string;
  e_discount_price: string;
  packly_commission: string;
  id_delivery_fee: string;
  od_delivery_fee: string;
  ed_delivery_fee: string;
  created_at: string;
  updated_at: string;
  status_label: string;
  status_color: string;
}
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
  id: string
  shop_name: string
  verified?: boolean
  rating?: number
  shipOnTime?: number
  chatResponse?: number
  shopRating?: number
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
