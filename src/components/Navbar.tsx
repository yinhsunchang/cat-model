import Switcher from "../components/Switcher.tsx";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="top hide-large hide-medium">
      <div className="bar black opacity hover-opacity-off center small">
        <a
          href="#home"
          title={t("nav.home")}
          className="bar-item button"
          style={{ width: "20%" }}
        >
          <i className="fa fa-home xlarge"></i>
        </a>
        <a
          href="#about"
          title={t("nav.about")}
          className="bar-item button"
          style={{ width: "20%" }}
        >
          <i className="fa fa-paw xlarge"></i>
        </a>
        <a
          href="#photos"
          title={t("nav.photos")}
          className="bar-item button"
          style={{ width: "20%" }}
        >
          <i className="fa fa-photo xlarge"></i>
        </a>
        <a
          href="#contact"
          title={t("nav.contact")}
          className="bar-item button"
          style={{ width: "20%" }}
        >
          <i className="fa fa-envelope xlarge"></i>
        </a>
        <div
          className="bar-item dropdown-hover button"
          style={{ width: "20%" }}
          title={t("nav.language")}
        >
          <i className="fa fa-globe xlarge"></i>
          <div
            className="dropdown-content"
            style={{
              width: "20%",
              position: "relative",
              zIndex: 100,
              minWidth: 80,
            }}
          >
            <Switcher />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
