import { useTranslation } from "react-i18next";
import photo from "../ts/photo.ts";

const Portfolio = () => {
  const { t } = useTranslation();

  // put the images evenly into two columns
  const half = Math.ceil(photo.length / 2);
  const left: string[] = photo.slice(0, half);
  const right: string[] = photo.slice(half);

  return (
    <div className="padding-32 content text-light-grey" id="photos">
      <h2>{t("photo")}</h2>
      <hr style={{ width: "200px" }} className="opacity" />

      <div className="row-padding" style={{ margin: "0 -16px" }}>
        <div className="half">
          {left.map((src, idx) => (
            <img
              className="zoom"
              key={idx}
              src={src}
              style={{ width: "100%" }}
              alt=""
              loading="lazy"
            />
          ))}
        </div>

        <div className="half">
          {right.map((src, idx) => (
            <img
              className="zoom"
              key={idx}
              src={src}
              style={{ width: "100%" }}
              alt=""
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
