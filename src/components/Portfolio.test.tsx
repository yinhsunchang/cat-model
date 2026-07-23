import { render } from "@testing-library/react";
import Portfolio from "./Portfolio";
import photos from "../services/photos";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

vi.mock("./Reveal", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("Portfolio", () => {
  it("renders portfolio images", () => {
    render(<Portfolio />);

    const images = document.querySelectorAll("img");
    expect(images).toHaveLength(photos.length);
  });

  it("renders portfolio images with correct sources", () => {
    render(<Portfolio />);

    const images = document.querySelectorAll("img");
    photos.forEach((photo, index) => {
      expect(images[index]).toHaveAttribute("src", photo);
    });
  });
});
