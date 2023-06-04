import headerStyles from "../styles/Header.module.css";

function Header() {
  // How to include style locally - e.g in case of a conditional styling
  // const x = 5;
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <span>Next</span> Playground
      </h1>
      {/* <style jsx>
        {`
        .title {
          color: ${x>3 ? 'red' : 'blue'};
        }
        `}
      </style> */}
      <p className={headerStyles.description}>
        A platform to play around and learn Next
      </p>
    </div>
  );
}

export default Header;
