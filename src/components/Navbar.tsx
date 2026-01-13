import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="top hide-large hide-medium">
    <div className="bar black opacity hover-opacity-off center small">
      <a href="#home" className="bar-item button" style={{width:'25%'}}>{t("nav.home")}</a>
      <a href="#about" className="bar-item button" style={{width:'25%'}}>{t("nav.about")}</a>
      <a href="#photos" className="bar-item button" style={{width:'25%'}}>{t("nav.photos")}</a>
      <a href="#contact" className="bar-item button" style={{width:'25%'}}>{t("nav.contact")}</a>
    </div>
    </div>
  );
}

export default Navbar
