import React from "react";
import { useQuery } from "@apollo/client";
import { GET_HOTELS } from "../queries/hotels";
import { Link } from "react-router-dom";
import { FaChurch } from "react-icons/fa";

const Hotel = () => {
  const { data } = useQuery(GET_HOTELS);
  const user = JSON.parse(localStorage.getItem("profile") || "{}");

  const checkUser = Object.keys(user).length;

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
            {data?.hotels.map((item: any) => (
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
      ) : (
        <div>No hotels is available now. Login and Create one</div>
      )}
    </div>
  );
};

export default Hotel;
