import { useTranslation } from "react-i18next";
import Slideshow from "./Slideshow.tsx";

const Header = () => {
  const { t } = useTranslation();
  
  return (
  <header className="container padding-64 center black" id="home">
    <h1 className="jumbo"><mark className="hide-small">{t("header.greeting")}</mark> {t("header.name")}</h1>
    <p>{t("header.subtitle")}</p>
    <Slideshow />
  </header>
  );
}

export default Header
