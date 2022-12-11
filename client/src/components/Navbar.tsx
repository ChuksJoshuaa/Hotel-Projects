import React from "react";
import { ME } from "../queries/me";
import { useQuery } from "@apollo/client";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "../mutations/logout";
import { Link, useNavigate } from "react-router-dom";
import { GET_HOTELS } from "../queries/hotels";
import { GET_HOTEL_BRANDS } from "../queries/brands";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { data } = useQuery(ME);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile") || "{}");
  const checkUser = Object.keys(user).length;

  const [logout] = useMutation(LOGOUT);

  const logoutUser = () => {
    logout({
      variables: {},
      onCompleted: () => navigate("/"),
      refetchQueries: [
        { query: ME },
        { query: GET_HOTELS },
        { query: GET_HOTEL_BRANDS },
      ],
    });
    localStorage.clear();
    navigate("/");
  };

  const image =
    "https://res.cloudinary.com/chuksmbanaso/image/upload/v1639569930/media/User/images/dhotel_uaybwg.jpg";
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={image} alt="logo" className="mr-2" />
            <h1 className="title font-weight-bold">Hotel Suite</h1>
          </div>
        </a>
        {data ? (
          !data.me || checkUser === 0 ? (
            <div className="d-flex gap-3">
              <button type="button" className="btn btn-secondary">
                <Link
                  to="/auth/login"
                  className="d-flex align-items-center text-white text-decoration-none"
                >
                  <FaUser className="icon" />
                  <div>Login</div>
                </Link>
              </button>
              <button type="button" className="btn btn-secondary">
                <Link
                  to="/auth/register"
                  className="d-flex align-items-center text-white text-decoration-none"
                >
                  <FaUser className="icon" />
                  <div>Register</div>
                </Link>
              </button>
            </div>
          ) : (
            <div className="d-flex">
              <div className="mt-1">
                <FaUser className="text-danger" />{" "}
                <span>{data?.me?.username}</span>
              </div>
              <div style={{ marginLeft: "1em" }}>
                <button className="btn btn-danger" onClick={logoutUser}>
                  Logout
                </button>
              </div>
            </div>
          )
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
