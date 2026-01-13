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
      <i className="fa fa-user xxlarge"></i>
      <p>{t("nav.about")}</p>
    </a>
    <a href="#photos" className="bar-item button padding-large hover-black">
      <i className="fa fa-eye xxlarge"></i>
      <p>{t("nav.photos")}</p>
    </a>
    <a href="#contact" className="bar-item button padding-large hover-black">
      <i className="fa fa-envelope xxlarge"></i>
      <p>{t("nav.contact")}</p>
    </a>
    </nav>
  );
}

export default Sidebar
