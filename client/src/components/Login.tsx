import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useLoginMutation } from "../generated/graphql";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [, login] = useLoginMutation();

  const handleEnterKeyPress = (e: any) => {
    e.preventDefault();
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

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

    const { data, error } = await login({
      email: email,
      password: password,
    });

    console.log(data, error);

    console.log(email, password);

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#LoginModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Login</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="LoginModal"
        tabIndex={1}
        aria-labelledby="LoginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="LoginModalLabel">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-center text-danger fs-8 mb-1 font-weight-semibold">
                {errors}
              </p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
