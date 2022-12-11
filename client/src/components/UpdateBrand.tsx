import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { UPDATE_HOTEL_BRAND } from "../mutations/updateBrand";

import { useMutation } from "@apollo/client";
import { SINGLE_BRAND } from "../queries/singleBrand";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: string;
  item: string;
}

const UpdateBrand = ({ id, item }: IProps) => {
  const [name, setName] = useState(item);
  const navigate = useNavigate();

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
      onCompleted: () => navigate("/"),
      refetchQueries: [{ query: SINGLE_BRAND, variables: { id: brandId } }],
    });

    setName("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary mt-3 px-2"
        data-bs-toggle="modal"
        data-bs-target="#updateBrand"
      >
        <div className="d-flex align-items-center">
          <FaEdit className="icon" />
          <div>Update Brand</div>
        </div>
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
