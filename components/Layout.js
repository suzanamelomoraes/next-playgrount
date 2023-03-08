import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Dropdown from "./Dropdown";

function Layout({ children }) {
  const options = [
    { label: "Fruit", value: "fruit" },

    { label: "Vegetable", value: "vegetable" },

    { label: "Meat", value: "meat" },
  ];

  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <div>
            <Dropdown
              label="Categories:"
              options={options}
              value={value}
              onChange={handleChange}
            />
          </div>
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
