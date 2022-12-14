export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface HotelBrand {
  id: string;
  name: string;
  authorId: number;
  author: {
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Hotel {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  city: string;
  country: string;
  address: string;
  authorId: string;
  author: {
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  brandName: string;
  brandId: number;
  brand: {
    id: string;
    name: string;
    authorId: number;
    author: {
      id: string;
      username: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  descriptionSnippet: string;
}

export interface UserResponse {
  errors: {
    field: string;
    message: string;
  };
  user: {
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface HotelInput {
  name: string;
  description: string;
  price: number;
  authorId: number;
  address: string;
  brandName: string;
  city: string;
  country: string;
  image: string;
}
