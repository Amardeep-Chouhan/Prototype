import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /**
   * "corner" keeps the arrows inside the tile, bottom-right, so they never sit
   * on top of the headline. The live site centres them over the slide and they
   * cut through the text — that is the one thing we changed here.
   */
  controls?: "top" | "corner";
  label: string;
};

export function ScrollRow({ children, controls = "top", label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = () => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(sync, []);

  const scrollBy = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const arrows = (
    <div className="flex gap-2">
      <button
        type="button"
        aria-label={`Scroll ${label} left`}
        disabled={atStart}
        onClick={() => scrollBy(-1)}
        className="flex size-10 items-center justify-center rounded-full border bg-card text-foreground shadow-sm transition-opacity disabled:opacity-35"
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        type="button"
        aria-label={`Scroll ${label} right`}
        disabled={atEnd}
        onClick={() => scrollBy(1)}
        className="flex size-10 items-center justify-center rounded-full border bg-card text-foreground shadow-sm transition-opacity disabled:opacity-35"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );

  return (
    <div className={controls === "corner" ? "relative" : ""}>
      {controls === "top" && <div className="mb-3 flex justify-end">{arrows}</div>}
      <div ref={ref} onScroll={sync} className="scroll-row -mx-6 px-6">
        {children}
      </div>
      {controls === "corner" && (
        <div className="pointer-events-none absolute bottom-10 right-10 z-10">
          <div className="pointer-events-auto">{arrows}</div>
        </div>
      )}
    </div>
  );
}
