import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";
import icon3 from "../assets/icon-3.svg";
import icon4 from "../assets/icon-4.svg";
import styles from "./SideNav.module.css";

function SideNav() {
  return (
    <div className={styles.sideNav}>
      <div className={styles.iconContainer}>
        <img src={icon1} alt="yoga" />
        <img src={icon2} alt="swim" />
        <img src={icon3} alt="bike" />
        <img src={icon4} alt="stregth" />
      </div>
      <div>
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
}

export default SideNav;
