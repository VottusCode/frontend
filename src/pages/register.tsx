import { useMutation } from "@apollo/client";
import { GraphQLError } from "graphql";
import React, { FormEvent, useState } from "react";
import { Lock } from "react-feather";
import { useHistory } from "react-router-dom";
import Hero from "../components/elements/Hero";
import { BlogWrapper } from "../components/styled/blog";
import {
  loginMutation,
  LoginMutationData,
  registerMutation,
} from "../gql/mutations";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<ReadonlyArray<GraphQLError> | null>(
    null
  );

  const [executeLogin] = useMutation<boolean>(registerMutation, {
    errorPolicy: "all",
  });

  const history = useHistory();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.length < 3) return; // error
    if (password.length < 6) return; // error

    setLoading(true);

    try {
      const res = await executeLogin({
        variables: { username, email, password },
      });
      setLoading(false);

      if (res.errors) return setErrors(res.errors);
      if (!res.data) return; // unknown error

      history.push("/login");
    } catch (e) {
      // unknown error
    }
  };

  return (
    <DefaultLayout>
      <Hero color="primary" size="normal" className="has-text-centered">
        <h1 className="is-size-1">Register</h1>
      </Hero>

      <div className="container">
        <BlogWrapper>
          <div
            className="card is-fade-item"
            style={{ width: "100%", height: "fit-content" }}
          >
            {errors &&
              errors.map((el, key) => (
                <div className="notification is-danger" key={key}>
                  {el.message}
                </div>
              ))}

            <div className="card-content">
              <form onSubmit={handleFormSubmit}>
                <div className="field">
                  <div className="label">Username</div>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Your Username"
                      disabled={loading}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="label">Email</div>
                  <div className="control">
                    <input
                      type="email"
                      className="input"
                      placeholder="Your Email"
                      disabled={loading}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="label">Password</div>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      placeholder="Your Password"
                      disabled={loading}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field mt-6">
                  <div className="control columns">
                    <div className="column is-half has-text-left">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div>
                          <Lock size="2rem" />
                        </div>
                        <div
                          style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "15px",
                          }}
                        >
                          Your credentials are safely encrypted.
                        </div>
                      </div>
                    </div>
                    <div className="column is-half has-text-right">
                      <button
                        className={`button is-medium is-rounded ${
                          loading ? "is-dark is-loading" : "is-primary"
                        }`}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </BlogWrapper>
      </div>
    </DefaultLayout>
  );
};

export default RegisterPage;
