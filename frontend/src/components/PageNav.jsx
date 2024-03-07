import logo from "../assets/logo.svg";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <div className={styles.navbar}>
      <div>
        <img src={logo} alt="sportsee logo" />
      </div>

      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Profile</li>
        <li>Settings</li>
        <li>Community</li>
      </ul>
    </div>
  );
}

export default PageNav;
