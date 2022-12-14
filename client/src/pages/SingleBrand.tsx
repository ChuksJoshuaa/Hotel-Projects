import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { UpdateBrand } from "../components";
import { SINGLE_BRAND } from "../queries/singleBrand";

const SingleBrand = ({}) => {
  const { id } = useParams();

  const brandId: string | undefined = id;
  const newBrandId = Number(brandId);

  const { data, loading, error } = useQuery(SINGLE_BRAND, {
    variables: { id: newBrandId },
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
              <h1 className="mt-3 font-weight-bold text-capitalize">
                {data.brand.name}
              </h1>

              <h5 className="mt-3">
                Hotel Brand Name:
                <span className="lead"> {data.brand.name}</span>
              </h5>

              <div className="d-flex align-items-center mt-2">
                <h4 style={{ marginRight: "0.5em", marginTop: "0.4em" }}>
                  Check hotels under this brand. Click
                </h4>
                <Link to={`/filtered-hotels/${data.brand.id}`}>
                  <button className="btn btn-sm btn-primary">Here</button>
                </Link>
              </div>
              <div className="d-flex gap-3 mb-4">
                <UpdateBrand id={data.brand.id} item={data.brand.name} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBrand;
