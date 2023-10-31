import { useState } from "react";
import Styles from "./Sidebar.module.css";

export default function Sidebar({ isSidebarExpanded }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function expandProjects() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <div
        style={isSidebarExpanded ? {} : { width: "0" }}
        className={Styles.sidebar}
      >
        <div className={Styles.sidebarCon}>
          <div className={`${Styles.tabs} ${Styles.bgcOnHover}`}>
            <i className="fa-solid fa-calendar-week"></i>
            <p>Today</p>
          </div>
          <div className={`${Styles.tabs} ${Styles.bgcOnHover}`}>
            <i className="fa-solid fa-inbox"></i>
            <p>Inbox</p>
          </div>
          <div className={`${Styles.tabs} ${Styles.bgcOnHover}`}>
            <i className="fa-solid fa-calendar-days"></i>
            <p>Upcoming</p>
          </div>
          <div className={`${Styles.tabs} ${Styles.bgcOnHover}`}>
            <i className="fa-solid fa-filter"></i>
            <p>Filters & Labels</p>
          </div>
          <div className={`${Styles.tabs} ${Styles.bgcOnHover}`}>
            <div>
              <p>Projects</p>
            </div>

            <div className={Styles.hoverIcon}>
              <i className="fa-solid fa-plus"></i>
              <i
                onClick={expandProjects}
                className={`fa-solid ${
                  isExpanded ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>

            <div
              className={`${Styles.expandableTabs} ${
                isExpanded ? Styles.expanded : ""
              }`}
            >
              <div className={`${Styles.tabs} ${Styles.bgcOnHover}`}>
                <i className="fa-solid fa-circle-dot"></i>
                <p>Home</p>
              </div>
              <div className={`${Styles.tabs} ${Styles.bgcOnHover}`}>
                <i className="fa-solid fa-circle-dot"></i>
                <p>My work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
