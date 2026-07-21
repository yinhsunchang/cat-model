import { render, screen } from "@testing-library/react";
import SkillBar from "./SkillBar";

class IntersectionObserverMock {
  callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe(element: Element) {
    this.callback(
      [
        {
          isIntersecting: true,
          target: element,
        } as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver
    );
  }

  disconnect() {}
}

globalThis.IntersectionObserver =
  IntersectionObserverMock as unknown as typeof IntersectionObserver;

describe("SkillBar", () => {
  it("renders label", () => {
    render(<SkillBar label="React" percentage={90} />);

    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("animates to given percentage when visible", () => {
    render(<SkillBar label="React" percentage={90} />);

    const bar = document.querySelector(".dark-grey");

    expect(bar).toHaveStyle({
      width: "90%",
    });
  });
});
