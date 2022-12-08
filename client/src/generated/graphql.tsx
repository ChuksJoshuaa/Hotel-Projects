import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BrandInput = {
  name: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Hotel = {
  __typename?: 'Hotel';
  address: Scalars['String'];
  author: User;
  authorId: Scalars['String'];
  brand: HotelBrand;
  brandId: Scalars['Float'];
  brandName: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  descriptionSnippet: Scalars['String'];
  id: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  updatedAt: Scalars['String'];
};

export type HotelBrand = {
  __typename?: 'HotelBrand';
  author: User;
  authorId: Scalars['Float'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type HotelInput = {
  address: Scalars['String'];
  brandName: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createBrand: HotelBrand;
  createHotel: Hotel;
  deleteBrand: Scalars['Boolean'];
  deleteHotel: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updateBrand?: Maybe<HotelBrand>;
  updateHotel?: Maybe<Hotel>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateBrandArgs = {
  input: BrandInput;
};


export type MutationCreateHotelArgs = {
  input: HotelInput;
};


export type MutationDeleteBrandArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteHotelArgs = {
  id: Scalars['Float'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UserPasswordInput;
};


export type MutationUpdateBrandArgs = {
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateHotelArgs = {
  address?: InputMaybe<Scalars['String']>;
  brandName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type PaginatedHotels = {
  __typename?: 'PaginatedHotels';
  hasMore: Scalars['Boolean'];
  hotels: Array<Hotel>;
};

export type Query = {
  __typename?: 'Query';
  brand?: Maybe<HotelBrand>;
  brands: Array<HotelBrand>;
  hotel?: Maybe<Hotel>;
  hotels: PaginatedHotels;
  me?: Maybe<User>;
};


export type QueryBrandArgs = {
  id: Scalars['Float'];
};


export type QueryBrandsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryHotelArgs = {
  id: Scalars['Int'];
};


export type QueryHotelsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserFragment = { __typename?: 'User', id: string, username: string, email: string, createdAt: string };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, username: string, email: string, createdAt: string } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, username: string, email: string, createdAt: string } | null } };

export type RegisterMutationVariables = Exact<{
  options: UserPasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, username: string, email: string, createdAt: string } | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, email: string, createdAt: string } | null };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  email
  createdAt
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UserPasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};