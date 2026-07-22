import { useTranslation } from "react-i18next";
import alexis from "../assets/alexis255.jpg";
import ephrem from "../assets/ephrem255.jpg";
import yinhsun from "../assets/yinhsun255.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface TestimonialItemProps {
  image: string;
  name: string;
  job: string;
  text: string;
}

function TestimonialItem({ image, name, job, text }: TestimonialItemProps) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        className="left circle margin-right"
        style={{ width: "80px" }}
      />
      <p>
        <span className="large margin-right">{name}</span>
        {job}
      </p>
      <p>{text}</p>
    </div>
  );
}

export default function TestimonialCard() {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      image: alexis,
      name: t("about.reputation.testimonial1"),
      job: t("about.reputation.job1"),
      text: t("about.reputation.text1"),
    },
    {
      id: 2,
      image: ephrem,
      name: t("about.reputation.testimonial2"),
      job: t("about.reputation.job2"),
      text: t("about.reputation.text2"),
    },
    {
      id: 3,
      image: yinhsun,
      name: t("about.reputation.testimonial3"),
      job: t("about.reputation.job3"),
      text: t("about.reputation.text3"),
    },
  ];

  return (
    <div className="content justify padding-16 text-light-grey">
      <h3>{t("about.reputation.title")}</h3>

      <Swiper
        direction="vertical"
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        style={{ height: "200px" }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <TestimonialItem
              image={item.image}
              name={item.name}
              job={item.job}
              text={item.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
