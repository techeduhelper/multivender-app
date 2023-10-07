import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/ddxpqvwwv/image/upload/v1696444437/6047583-middle-removebg-preview_swhojx.png"
            style={{ width: "150px", height: "100px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/ddxpqvwwv/image/upload/v1696444437/Xiaomi_logo__2021-_.svg-removebg-preview_bkxjti.png"
            style={{ width: "150px", height: "100px", objectFit: "contain" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
