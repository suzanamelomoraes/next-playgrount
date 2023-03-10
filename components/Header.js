import headerStyles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <span>Next</span> Playground
      </h1>
      <p className={headerStyles.description}>
        A platform to play around and learn Next
      </p>
    </div>
  );
}

export default Header;
