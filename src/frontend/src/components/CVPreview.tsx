import { useEffect, useRef, useState } from "react";
import type { CV } from "../types/cv";
import CVTemplate1 from "./templates/CVTemplate1";
import CVTemplate2 from "./templates/CVTemplate2";
import CVTemplate3 from "./templates/CVTemplate3";
import CVTemplate4 from "./templates/CVTemplate4";
import CVTemplate5 from "./templates/CVTemplate5";

interface Props {
  cv: CV;
  scale?: number;
}

const TEMPLATE_COMPONENTS = [
  CVTemplate1,
  CVTemplate2,
  CVTemplate3,
  CVTemplate4,
  CVTemplate5,
];

export default function CVPreview({ cv, scale }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [computedScale, setComputedScale] = useState(scale ?? 0.6);

  const templateIdx = Math.min(Math.max(Number(cv.selectedTemplate) - 1, 0), 4);
  const TemplateComponent = TEMPLATE_COMPONENTS[templateIdx];

  useEffect(() => {
    if (scale !== undefined) return;
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setComputedScale(containerWidth / 794);
      }
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [scale]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <div
        style={{
          transform: `scale(${computedScale})`,
          transformOrigin: "top left",
          width: "794px",
          height: `${1123 * computedScale}px`,
        }}
      >
        <TemplateComponent cv={cv} />
      </div>
      {/* Spacer to match scaled height */}
      <div
        style={{
          height: `${1123 * computedScale}px`,
          marginTop: `-${1123 * computedScale}px`,
        }}
      />
    </div>
  );
}
