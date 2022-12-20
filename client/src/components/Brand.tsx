import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { FaBlogger, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DELETE_HOTEL_BRAND } from "../mutations/deleteBrand";
import { GET_HOTEL_BRANDS } from "../queries/brands";
import { HotelBrand } from "../utils/dataTypes";

interface IProps {}

const Brand: React.FC<IProps> = () => {
  const { data } = useQuery(GET_HOTEL_BRANDS);
  const user = JSON.parse(localStorage.getItem("profile") || "{}");
  const checkUser = Object.keys(user).length;
  const [deleteBrand] = useMutation(DELETE_HOTEL_BRAND);

  const DeleteBrand = (id: string) => {
    let brandId = parseInt(id);
    deleteBrand({
      variables: { id: brandId },
      refetchQueries: [{ query: GET_HOTEL_BRANDS }],
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-capitalize font-weight-bold fs-3 mt-3">
          Hotel Brands
        </h1>
        <Link to={`${checkUser > 0 ? "/add-brand" : "/auth/login"}`}>
          <button type="button" className="btn btn-outline-secondary">
            <div className="d-flex align-items-center">
              <FaBlogger className="icon" />
              <div>Add Brand</div>
            </div>
          </button>
        </Link>
      </div>
      <div>
        {data?.brands.length > 0 ? (
          <div className="row mt-1">
            {data?.brands.map((item: HotelBrand) => (
              <div className="col-md-4" key={item.id}>
                <div className="card mb-3">
                  <div className="card-body shadow">
                    <div className="d-flex justify-content-between align-items center">
                      <h5 className="card-title text-capitalize">
                        {" "}
                        {item.name}
                      </h5>

                      <Link to={`brands/${item.id}`} className="btn btn-light">
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </Link>
                    </div>
                    <div className="small d-flex">
                      <button
                        className="btn btn-sm btn-danger delete-btn"
                        onClick={() => DeleteBrand(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No Hotel Brands available...</p>
        )}
      </div>
    </div>
  );
};

export default Brand;
