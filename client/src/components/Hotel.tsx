import React from "react";
import { useQuery } from "@apollo/client";
import { GET_HOTELS } from "../queries/hotels";
import { Link } from "react-router-dom";
import { AddHotel } from "./index";

const Hotel = () => {
  const { data } = useQuery(GET_HOTELS);

  return (
    <div>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-capitalize font-weight-bold fs-3 mt-3">Hotel</h1>
        <AddHotel />
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
                    <p className="card-text">{item.description}</p>
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
