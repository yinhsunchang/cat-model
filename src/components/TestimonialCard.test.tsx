import { render, screen } from "@testing-library/react";
import TestimonialCard from "./TestimonialCard";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

vi.mock("swiper/react", () => ({
  Swiper: ({ children }: any) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }: any) => <div data-testid="slide">{children}</div>,
}));

vi.mock("swiper/modules", () => ({
  Autoplay: {},
}));

describe("TestimonialCard", () => {
  it("renders title", () => {
    render(<TestimonialCard />);
    expect(screen.getByText("about.reputation.title")).toBeInTheDocument();
  });

  it("renders three testimonials", () => {
    render(<TestimonialCard />);
    expect(screen.getAllByTestId("slide")).toHaveLength(3);
  });

  it("renders three images", () => {
    render(<TestimonialCard />);
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });
});
