import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";
import styles from "../styles/Layout.module.css";
import Dropdown from "./Dropdown";
import dynamic from "next/dynamic";
const GaugeChart = dynamic(() => import("react-gauge-chart"), { ssr: false });

function Layout({ children }) {
  // playing around to display a GougeChart
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
      <Meta />
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
          <div className={styles.chart}>
            <div style={{ background: "#F6F2ED", display: "flex" }}>
              <GaugeChart
                nrOfLevels={420}
                arcsLength={[0.3, 0.5, 0.2]}
                colors={["#5BE12C", "#F5CD19", "#EA4228"]}
                percent={0.37}
                arcPadding={0.02}
                style={{ width: "50%" }}
              />
              <GaugeChart
                id="gauge-chart2"
                nrOfLevels={20}
                percent={0.86}
                style={{ width: "50%" }}
              />
            </div>
          </div>

          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
