import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UpdateHotel } from "../components";
import { DELETE_HOTEL } from "../mutations/deleteHotel";
import { GET_HOTELS } from "../queries/hotels";
import { SINGLE_HOTEL } from "../queries/singleHotel";

const SingleHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [deleteHotel] = useMutation(DELETE_HOTEL);

  let hotelId: string | undefined = id;
  const newHotelId = Number(hotelId);

  const { data, loading, error } = useQuery(SINGLE_HOTEL, {
    variables: { id: newHotelId },
  });

  const DeleteHotel = (id: string) => {
    let newHotelId = parseInt(id);
    deleteHotel({
      variables: { id: newHotelId },
      onCompleted: () => navigate("/"),
      refetchQueries: [{ query: GET_HOTELS }],
    });
  };

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
                <button
                  type="button"
                  className="btn btn-danger mt-3 px-2"
                  onClick={() => DeleteHotel(data.hotel.id)}
                >
                  <div className="d-flex align-items-center">
                    <FaTrash className="icon" />
                    <div>Delete Hotel</div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
