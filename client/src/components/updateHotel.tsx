import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { UPDATE_HOTEL } from "../mutations/updateHotel";

import { useMutation, useQuery } from "@apollo/client";
import { SINGLE_HOTEL } from "../queries/singleHotel";
import { useNavigate } from "react-router-dom";
import { GET_HOTEL_BRANDS } from "../queries/brands";

interface IProps {
  id: string;
  item: any;
}

const UpdateHotel = ({ id, item }: IProps) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [address, setAddress] = useState(item.address);
  const [city, setCity] = useState(item.city);
  const [country, setCountry] = useState(item.country);
  const [image, setImage] = useState(item.image);
  const [price, setPrice] = useState(item.price);
  const [brandName, setBrandName] = useState(item.brandName);
  const navigate = useNavigate();
  const { data } = useQuery(GET_HOTEL_BRANDS);

  const [updateHotel] = useMutation(UPDATE_HOTEL);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "") {
      return alert("Please fill in the field");
    }

    let hotelId = parseInt(id);

    updateHotel({
      variables: {
        id: hotelId,
        name: name,
        description: description,
        address: address,
        price: price,
        city: city,
        country: country,
        brandName: brandName,
        image: image,
      },
      onCompleted: () => navigate("/"),
      refetchQueries: [{ query: SINGLE_HOTEL, variables: { id: hotelId } }],
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
    <>
      <button
        type="button"
        className="btn btn-secondary mt-3 px-2"
        data-bs-toggle="modal"
        data-bs-target="#updateHotel"
      >
        <div className="d-flex align-items-center">
          <FaEdit className="icon" />
          <div>Update Brand</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="updateHotel"
        tabIndex={1}
        aria-labelledby="updateHotelModel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateHotelModel">
                Update Hotel
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                          <option value={item.name}>{item.name}</option>
                        ))
                      : null}
                  </select>
                </div>

                <button
                  className="btn btn-secondary"
                  type="submit"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateHotel;
