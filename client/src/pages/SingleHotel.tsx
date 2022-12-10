import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { UpdateHotel } from "../components";
import { SINGLE_HOTEL } from "../queries/singleHotel";

const SingleHotel = () => {
  const { id } = useParams();

  let hotelId: string | any = id;
  hotelId = Number(hotelId);

  const { data, loading, error } = useQuery(SINGLE_HOTEL, {
    variables: { id: hotelId },
  });

  return (
    <div>
      <div>
        <div className="mb-2 home">
          {!loading && !error && (
            <div className="single-head card">
              <Link to="/" className="btn btn-light btn-sm d-inline ms-auto">
                Back
              </Link>
              <h1 className="mt-3 font-weight-bold text-capitalize text-danger">
                {data.hotel.name}
              </h1>
              <img
                className="card-img-top"
                style={{ height: "300px" }}
                src={data.hotel.image}
                alt={data.hotel.name}
              />
              <p className="mt-3 font-weight-bold text-capitalize">
                {data.hotel.description}
              </p>
              <h4 className="mt-3 font-weight-bold text-capitalize">
                Address:{" "}
                <span className="text-secondary">{data.hotel.address}</span>
              </h4>
              <h5 className="mt-3 font-weight-bold text-capitalize">
                City: <span className="text-secondary">{data.hotel.city}</span>
              </h5>

              <h5 className="mt-3 font-weight-bold text-capitalize ">
                Country:{" "}
                <span className="text-secondary">{data.hotel.country}</span>
              </h5>

              <div className="d-flex gap-3 mb-4">
                <UpdateHotel id={data.hotel.id} item={data.hotel} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
