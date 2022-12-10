import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { UPDATE_HOTEL_BRAND } from "../mutations/updateBrand";
import { GET_HOTEL_BRANDS } from "../queries/brands";
import { useMutation } from "@apollo/client";

const UpdateBrand = ({ id }: any) => {
  const [name, setName] = useState("");

  const [updateBrand] = useMutation(UPDATE_HOTEL_BRAND);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "") {
      return alert("Please fill in the field");
    }

    let brandId = parseInt(id);

    updateBrand({
      variables: {
        id: brandId,
        name: name,
      },
      refetchQueries: [{ query: GET_HOTEL_BRANDS }],
    });

    setName("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary edit-btn px-2"
        data-bs-toggle="modal"
        data-bs-target="#updateBrand"
      >
        <FaEdit />
      </button>

      <div
        className="modal fade"
        id="updateBrand"
        tabIndex={1}
        aria-labelledby="updateBrandModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateBrandModal">
                Update Brand
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
                  <label className="form-label">Brand Name</label>
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

export default UpdateBrand;
