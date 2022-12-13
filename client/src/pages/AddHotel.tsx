import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_HOTEL } from "../mutations/createHotel";
import { GET_HOTEL_BRANDS } from "../queries/brands";
import { GET_HOTELS } from "../queries/hotels";

const AddHotel = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [brandName, setBrandName] = useState("");
  const [errors, setErrors] = useState("");
  const [createHotel] = useMutation(CREATE_HOTEL);
  const { data } = useQuery(GET_HOTEL_BRANDS);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile") || "{}");
  let userId = user?.userId;
  userId = parseInt(userId);

  const checkUser = Object.keys(user).length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      name === "" ||
      description === "" ||
      image === "" ||
      price === "" ||
      city === "" ||
      address === "" ||
      country === "" ||
      brandName === ""
    ) {
      return alert("Please fill in the field");
    }

    let myPrice = parseInt(price);

    if (checkUser === 0) {
      return setErrors("You must be logged in");
    }

    createHotel({
      variables: {
        input: {
          name: name,
          description: description,
          image: image,
          authorId: userId,
          price: myPrice,
          address: address,
          city: city,
          country: country,
          brandName: brandName,
        },
      },
      onCompleted: () => navigate("/"),
      refetchQueries: [{ query: GET_HOTELS }],
    });

    setName("");
    setDescription("");
    setPrice("");
    setCity("");
    setImage("");
    setCountry("");
    setBrandName("");
    setAddress("");
  };

  return (
    <div className="home">
      <div className="container mt-2">
        <p className="text-center text-danger fs-3 mb-1 font-weight-semibold">
          {errors}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Hotel Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image Url</label>
            <input
              type="text"
              id="image"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              id="city"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              id="country"
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Choose Brand</label>
            <select
              className="form-select"
              id="brandName"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            >
              {data?.brands.length > 0
                ? data?.brands.map((item: any) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))
                : null}
            </select>
          </div>

          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
