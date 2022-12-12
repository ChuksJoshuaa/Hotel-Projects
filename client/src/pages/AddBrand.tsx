import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_HOTEL_BRAND } from "../mutations/createBrand";
import { GET_HOTEL_BRANDS } from "../queries/brands";
import { useNavigate } from "react-router-dom";

const AddBrand = () => {
  const [name, setName] = useState("");
  const user = JSON.parse(localStorage.getItem("profile") || "{}");
  const checkUser = Object.keys(user).length;
  let userId = user?.userId;
  userId = parseInt(userId);
  const [createBrand] = useMutation(CREATE_HOTEL_BRAND);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "") {
      return alert("Please fill in the field");
    }

    if (checkUser === 0) {
      return setErrors("You must be logged in");
    }

    createBrand({
      variables: {
        input: {
          name: name,
          authorId: userId,
        },
      },
      onCompleted: () => navigate("/"),
      refetchQueries: [{ query: GET_HOTEL_BRANDS }],
    });

    setName("");
  };

  return (
    <div className="home">
      <div className="container">
        <p className="text-center text-danger fs-3 mb-1 font-weight-semibold">
          {errors}
        </p>
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

          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
