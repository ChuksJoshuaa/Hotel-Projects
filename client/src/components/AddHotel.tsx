import React, { useState } from "react";
import { FaBlogger } from "react-icons/fa";
import { CREATE_HOTEL_BRAND } from "../mutations/createBrand";
import { GET_HOTEL_BRANDS } from "../queries/brands";
import { useMutation } from "@apollo/client";

const AddHotel = () => {
  const [name, setName] = useState("");

  const [createBrand] = useMutation(CREATE_HOTEL_BRAND);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "") {
      return alert("Please fill in the field");
    }

    createBrand({
      variables: {
        input: {
          name: name,
        },
      },
      refetchQueries: [{ query: GET_HOTEL_BRANDS }],
    });

    setName("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addHotel"
      >
        <div className="d-flex align-items-center">
          <FaBlogger className="icon" />
          <div>Add Hotel</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addHotel"
        tabIndex={1}
        aria-labelledby="addHotelModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addHotelModal">
                Add Hotel
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

export default AddHotel;
