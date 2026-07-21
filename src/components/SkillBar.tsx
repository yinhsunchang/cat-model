import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  label: string;
  percentage: number;
}

function SkillBar({ label, percentage }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      setWidth(percentage);
    }
  }, [visible, percentage]);

  return (
    <div ref={ref}>
      <p className="wide">{label}</p>

      <div className="white">
        <div
          className="dark-grey"
          style={{
            height: "28px",
            width: `${width}%`,
            transition: "width 3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
