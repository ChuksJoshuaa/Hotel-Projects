import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
// import { useRegisterMutation, MeQuery, MeDocument } from "../generated/graphql";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../mutations/register";
import { Loader } from "../components";
import { ME } from "../queries/me";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [register] = useMutation(REGISTER);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter" || e.code !== undefined) {
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setEmailError(false);
    setUsernameError(false);
    setPasswordError(false);
    setErrors("");
    setSuccess("");

    if (!email) {
      setErrors("This field is required");
      setEmailError(true);
      return;
    }

    if (
      email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ) === null
    ) {
      setErrors("Please enter a valid email");
      setEmailError(true);
      return;
    }

    if (email) {
      setErrors("");
      setEmailError(false);
    }
    if (!username) {
      setErrors("This field is required");
      setUsernameError(true);
      return;
    }

    if (username) {
      setErrors("");
      setUsernameError(false);
    }

    if (!password) {
      setErrors("This field is required");
      setPasswordError(true);
      return;
    }

    if (password) {
      setErrors("");
      setPasswordError(false);
    }

    const response = await register({
      variables: {
        options: {
          email: email,
          username: username,
          password: password,
        },
      },
      refetchQueries: [{ query: ME }],
    });

    setEmail("");
    setUsername("");
    setPassword("");

    if (response) {
      setIsLoading(false);
      if (response?.data?.register?.errors === null) {
        setSuccess("user has been registered successfully");
        let userName = response?.data?.register?.user?.username;
        localStorage.setItem("profile", JSON.stringify({ userName }));
        navigate("/");
      } else {
        console.log(response?.data?.register?.errors);
        setErrors("Invalid user or user email has already been taken");
      }
    }
  };
  return (
    <>
      <div className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <p className="text-center text-danger fs-8 mb-1 font-weight-semibold">
              {errors}
            </p>
            <p className="text-center text-success fs-8 mb-1 font-weight-semibold">
              {success}
            </p>
          </>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: `${emailError ? "1px solid crimson" : ""}`,
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                border: `${usernameError ? "1px solid crimson" : ""}`,
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              style={{
                border: `${passwordError ? "1px solid crimson" : ""}`,
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex">
            <button
              onKeyDown={handleEnterKeyPress}
              className="btn btn-secondary"
              type="submit"
              style={{ marginRight: "1em" }}
            >
              Submit
            </button>
            <button
              data-bs-dismiss="modal"
              className="btn btn-danger"
              type="button"
            >
              close
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
