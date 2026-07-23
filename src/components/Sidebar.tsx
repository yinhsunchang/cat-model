import Switcher from "../components/Switcher.tsx";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <nav className="sidebar bar-block small hide-small center">
      <a href="#home" className="bar-item button padding-large black">
        <i className="fa fa-home xxlarge"></i>
        <p>{t("nav.home")}</p>
      </a>
      <a href="#about" className="bar-item button padding-large hover-black">
        <i className="fa fa-paw xxlarge"></i>
        <p>{t("nav.about")}</p>
      </a>
      <a href="#photos" className="bar-item button padding-large hover-black">
        <i className="fa fa-photo xxlarge"></i>
        <p>{t("nav.photos")}</p>
      </a>
      <a href="#contact" className="bar-item button padding-large hover-black">
        <i className="fa fa-envelope xxlarge"></i>
        <p>{t("nav.contact")}</p>
      </a>
      <div
        className="bar-item dropdown-hover button hover-black"
        style={{ position: "fixed", bottom: 0, left: 0, width: 120 }}
      >
        <i className="fa fa-globe xxlarge"></i>
        <p>{t("nav.language")}</p>
        <div
          className="dropdown-content"
          style={{ position: "relative", zIndex: 100, minWidth: 0 }}
        >
          <Switcher />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
