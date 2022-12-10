import React from "react";
import { useQuery } from "@apollo/client";
import { GET_HOTEL_BRANDS } from "../queries/brands";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import { AddBrand } from "./index";
import { useMutation } from "@apollo/client";
import { DELETE_HOTEL_BRAND } from "../mutations/deleteBrand";

interface IProps {}

const Brand: React.FC<IProps> = () => {
  const { data, error, loading } = useQuery(GET_HOTEL_BRANDS);

  const navigate = useNavigate();
  const [deleteBrand] = useMutation(DELETE_HOTEL_BRAND);

  console.log(data);

  const DeleteBrand = (id: any) => {
    let brandId = parseInt(id);
    deleteBrand({
      variables: { id: brandId },
      // onCompleted: () => navigate("/"),
      refetchQueries: [{ query: GET_HOTEL_BRANDS }],
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-capitalize font-weight-bold fs-3 mt-3">
          Hotel Brands
        </h1>
        <AddBrand />
      </div>
      <div>
        {data?.brands.length > 0 ? (
          <div className="row mt-1">
            {data?.brands.map((item: any) => (
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body shadow">
                    <div className="d-flex justify-content-between align-items center">
                      <h5 className="card-title"> {item.name}</h5>

                      <Link to={`brands/${item.id}`} className="btn btn-light">
                        <button className="btn btn-primary btn-sm">View</button>
                      </Link>
                    </div>
                    <div className="small d-flex">
                      <button className="btn btn-sm btn-secondary edit-btn">
                        <FaEdit />
                      </button>
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
          <p>No Hotel Brands available</p>
        )}
      </div>
    </div>
  );
};

export default Brand;
