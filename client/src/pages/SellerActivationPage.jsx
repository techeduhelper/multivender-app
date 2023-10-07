import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { server } from "../server";
import Header from "./../components/Layout/Header";
import Footer from "./../components/Layout/Footer";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/shop/activation`, {
            activation_token,
          })
          .then((res) => {
            navigate("/shop-login");
          })
          .catch((err) => {
            setError(true);
            navigate("/shop-create");
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
          height: "100vh",
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

export default SellerActivationPage;
