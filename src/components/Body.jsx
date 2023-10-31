import Sidebar from "./MainBody/Sidebar/Sidebar";
import Styles from "./Body.module.css";
import MainContent from "./MainBody/MainContent/MainContent";

export default function Body({ isSidebarExpanded }) {
  return (
    <>
      <div className={Styles.body}>
        <Sidebar isSidebarExpanded={isSidebarExpanded} />
        <MainContent isSidebarExpanded={isSidebarExpanded} />
      </div>
    </>
  );
}
