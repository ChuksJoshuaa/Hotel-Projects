import React from "react";
import { Login, Register } from "./index";
import { ME } from "../queries/me";
import { useQuery } from "@apollo/client";
import { FaUser } from "react-icons/fa";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { data } = useQuery(ME);

  console.log(data);
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
          !data.me ? (
            <div className="d-flex gap-3">
              <Login />
              <Register />
            </div>
          ) : (
            <div>
              <FaUser className="text-danger" />{" "}
              <span>{data?.me?.username}</span>
            </div>
          )
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
