import { render, screen } from "@testing-library/react";
import PriceCard from "./PriceCard";

// 測試時通常不用真的載入 i18next，可以直接 mock：
// 如此 t("about.price.title")
// 會回傳 about.price.title
// 方便測試。
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("PriceCard", () => {
  it("renders title", () => {
    render(<PriceCard />);
    expect(screen.getByText("about.price.title")).toBeInTheDocument();
  });

  it("renders two plans", () => {
    render(<PriceCard />);
    expect(screen.getByText("about.price.plan1")).toBeInTheDocument();
    expect(screen.getByText("about.price.plan2")).toBeInTheDocument();
  });

  it("renders prices", () => {
    render(<PriceCard />);
    expect(screen.getByText("$ 20")).toBeInTheDocument();
    expect(screen.getByText("$ 30")).toBeInTheDocument();
  });

  it("renders units", () => {
    render(<PriceCard />);
    expect(screen.getAllByText("about.price.unit")).toHaveLength(2);
  });
});
