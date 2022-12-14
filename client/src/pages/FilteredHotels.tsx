import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { FILTERED_HOTELS } from "../queries/filteredHotels";
import { useParams } from "react-router-dom";
import { HotelProps } from "../utils/dataTypes";

const FilteredHotels = () => {
  const { id } = useParams();

  let chosenId: string | any = id;
  chosenId = Number(chosenId);

  const { data, error } = useQuery(FILTERED_HOTELS, {
    variables: { brandId: chosenId },
  });

  if (error || data?.filterHotels.length === 0) {
    return (
      <div className="container home">
        <h3>No hotels is associated with this brand. Create one</h3>
      </div>
    );
  }

  return (
    <div className="container home">
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-capitalize font-weight-bold fs-3 mt-3">
          Filtered Hotel under this brand
        </h1>
      </div>
      {data?.filterHotels.length > 0 ? (
        <div>
          <div className="row">
            {data?.filterHotels.map((item: HotelProps) => (
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
                      <div
                        onClick={() =>
                          (window.location.href = `/hotels/${item.id}`)
                        }
                      >
                        <button className="btn btn-primary">Details</button>
                      </div>
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

export default FilteredHotels;
