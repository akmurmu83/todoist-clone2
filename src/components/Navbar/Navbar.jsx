import NavIcon from "./NavIcon";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar({ onSidebarToggle, toggleAddTaskDiv }) {
  let [isFocused, setIsFocused] = useState(false);
  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleClick() {
    setIsFocused(false);
  }

  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.leftNav}>
          <NavIcon event={onSidebarToggle} iconClass="fa-solid fa-bars" />
          <NavIcon iconClass="fa-solid fa-house" />
          <div className={styles.searchDiv}>
            <NavIcon
              iconClass={`fa-solid fa-magnifying-glass ${styles.bgcOnHover}`}
            />
            <input
              type="text"
              className={`${styles.searchInp} ${
                isFocused ? styles.focused : ""
              }`}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Serach Todo..."
            />
            <i
              onClick={handleClick}
              className={`fa-solid fa-xmark ${styles.bgcOnHover}`}
            ></i>
          </div>
        </div>

        <div className={`${styles.rightNav} ${styles.hideRightNav}`}>
          <NavIcon iconClass="fa-solid fa-user" />
          <NavIcon iconClass="fa-solid fa-circle-info" />
          <NavIcon iconClass="fa-solid fa-bell" />
          <NavIcon iconClass="fa-solid fa-plus" event={toggleAddTaskDiv} />
        </div>
      </nav>
    </>
  );
}
