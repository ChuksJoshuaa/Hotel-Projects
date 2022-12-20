import React from "react";
import { useQuery } from "@apollo/client";
import { GET_HOTELS } from "../queries/hotels";
import { Link } from "react-router-dom";
import { FaChurch } from "react-icons/fa";
import { HotelProps } from "../utils/dataTypes";
import HotelLoader from "./HotelLoader";

const Hotel = () => {
  const { data, error } = useQuery(GET_HOTELS);
  const user = JSON.parse(localStorage.getItem("profile") || "{}");

  const checkUser = Object.keys(user).length;

  if (error) {
    return (
      <div className="container mt-3">
        <h6 className="text-center fs-1 loading">Something is wrong!!!!</h6>
      </div>
    );
  }

  if (data?.hotels?.length === 0 || !data) {
    return (
      <>
        <div className="text-center font-weight-semibold fs-5 mb-0 loading">
          Loading....
        </div>
        <HotelLoader />
      </>
    );
  }

  return (
    <div className="mb-6">
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-capitalize font-weight-bold fs-3 mt-3">Hotels</h1>
        <Link to={`${checkUser > 0 ? "/add-hotel" : "/auth/login"}`}>
          <button type="button" className="btn btn-outline-primary">
            <div className="d-flex align-items-center">
              <FaChurch className="icon" />
              <div>Add Hotel</div>
            </div>
          </button>
        </Link>
      </div>
      {data?.hotels.length > 0 ? (
        <div>
          <div className="row">
            {data?.hotels.map((item: HotelProps) => (
              <div className="col-sm-6" key={item.id}>
                <div className="card mb-3">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      style={{ height: "300px" }}
                      src={item.image}
                      alt={item.name}
                    />
                    <h5 className="card-title mt-2 text-danger">{item.name}</h5>
                    <p className="card-text">{item.descriptionSnippet}...</p>
                    <div className="d-flex justify-content-between">
                      <h5>${item.price}</h5>
                      <Link to={`hotels/${item.id}`}>
                        <button className="btn btn-primary">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Hotel;
