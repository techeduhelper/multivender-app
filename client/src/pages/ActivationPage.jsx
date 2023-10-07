import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { server } from "../server";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";


const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activation_token,
          })
          .then((res) => {
            navigate("/login");
          })
          .catch((err) => {
            setError(true);
            navigate("/signup");
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          width: "100%",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error ? (
          <p>Your token is expired!</p>
        ) : (
          <p>Your account has been created suceessfully!</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ActivationPage;
