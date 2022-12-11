# Hotel Full Stack Web Application

<img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1670734158/media/User/images/Screenshot_293_qmka1f.png" title="icon" alt="icon">
## GraphQL Queries & Mutations

## Queries

### Get names of all brands

```
query Brands {
    brands {
      id
      name
      createdAt
      updatedAt
    }
  }
```

### Get a single brand

```
query Brand($id: Int!) {
    brand(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
}
```

### Get names of all hotels

```
query Hotels {
    hotels {
      id
      name
      description
      image
      price
      city
      address
      country
      brandId
      authorId
      createdAt
      updatedAt
    }
  }

```

### Get a single hotel

```
query Hotel($id: Int!) {
    hotel(id: $id) {
      id
      name
      description
      image
      price
      city
      address
      country
      authorId
      createdAt
      updatedAt
      brandId
    }
  }

```

##Mutations

### Create a new brand

```
 mutation CreateBrand($input: BrandInput!) {
    createBrand(input: $input) {
      id
      name
      authorId
      createdAt
      updatedAt
    }
  }

```

### Create a new hotel

```
mutation CreateHotel($input: HotelInput!) {
    createHotel(input: $input) {
      id
      name
      description
      image
      price
      city
      address
      country
      brandId
      authorId
      createdAt
      updatedAt
      brandId
    }
  }

```

### Delete a brand and return a boolean

```
mutation DeleteBrand($id: Int!) {
    deleteBrand(id: $id)
}

```

### Delete an hotel and return a boolean

```
mutation DeleteHotel($id: Int!) {
   deleteHotel(id: $id)
}

```

### update an hotel brand

```
mutation UpdateBrand($id: Int!, $name: String!) {
    updateBrand(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }

```

### update an hotel

```
 mutation UpdateHotel(
    $id: Int!
    $name: String!
    $description: String!
    $brandName: String!
    $address: String!
    $city: String!
    $image: String!
    $country: String!
    $price: Int!
  ) {
    updateHotel(
      id: $id
      name: $name
      description: $description
      brandName: $brandName
      address: $address
      city: $city
      image: $image
      country: $country
      price: $price
    ) {
      id
      name
      description
      image
      price
      city
      address
      country
      brandId
      authorId
      createdAt
      updatedAt
    }
```

### Login

```
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        field
        message
      }
      user {
        id
        email
        username
        createdAt
        updatedAt
      }
    }
  }

```

### Register

```
mutation Register($options: UserPasswordInput!) {
    register(options: $options) {
      errors {
        field
        message
      }
      user {
        id
        username
        email
        createdAt
        updatedAt
      }
    }
  }

```

### Logout

```
mutation Logout {
    logout
  }

```
