import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active }) => {
  return (
    <div className={styles.noramlFlex}>
      {navItems.map((item) => (
        <div className="flex" key={item.index}>
          <Link
            to={item.url}
            className={`${
              active === item.index ? "text-purple-900 text-xl" : "text-black"
            } pb-3 md:pb-0 font-semibold px-6 cursor-pointer`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
