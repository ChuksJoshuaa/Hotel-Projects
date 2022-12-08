import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation, MeQuery, MeDocument } from "../generated/graphql";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [, register] = useRegisterMutation();

  const handleEnterKeyPress = (e: any) => {
    e.preventDefault();
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  // const callRegister = async (values) => {
  //    const response = await register({
  //      variables: { options: values },
  //      update: (cache, { data }) => {
  //        cache.writeQuery<MeQuery>({
  //          query: MeDocument,
  //          data: {
  //            __typename: "Query",
  //            me: data?.register.user,
  //          },
  //        });
  //      },
  //    });
  // }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setEmailError(false);
    setUsernameError(false);
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

    const { data, error } = await register({
      options: {
        email: email,
        username: username,
        password: password,
      },
    });

    console.log(data, error);

    setEmail("");
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#RegisterModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Register</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="RegisterModal"
        tabIndex={1}
        aria-labelledby="RegisterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="RegisterModalLabel">
                Register
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
