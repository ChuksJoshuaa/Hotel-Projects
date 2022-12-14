import React, { useState } from "react";
// import { useLoginMutation } from "../generated/graphql";
import { LOGIN } from "../mutations/login";
import { useMutation } from "@apollo/client";
import { Loader } from "../components";
import { ME } from "../queries/me";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  // const [, login] = useLoginMutation();
  const [login] = useMutation(LOGIN);
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
    setSuccess("");
    setEmailError(false);
    setPasswordError(false);
    setErrors("");

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

    if (!password) {
      setErrors("This field is required");
      setPasswordError(true);
      return;
    }

    if (password) {
      setErrors("");
      setPasswordError(false);
    }

    const response = await login({
      variables: {
        email: email,
        password: password,
      },
      refetchQueries: [{ query: ME }],
    });

    setEmail("");
    setPassword("");

    if (response) {
      setIsLoading(false);
      if (response?.data?.login?.errors === null) {
        setSuccess("login was successful");
        let userName = response?.data?.login?.user?.username;
        let userId = response?.data?.login?.user?.id;
        localStorage.setItem("profile", JSON.stringify({ userName, userId }));
        navigate("/");
      } else {
        console.log(response?.data?.login?.errors);
        setErrors("Invalid user details");
      }
    }
  };

  return (
    <>
      <div className="container home">
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
              data-mdb-target="#myModal"
              id="myModal"
              style={{ marginRight: "1em" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
