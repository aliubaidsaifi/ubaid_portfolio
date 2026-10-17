"use client";

import { Children, useState } from "react";
import Icon from "@/components/Icon";

// Renders the first `initial` children in a grid; the rest appear after "See more".
export default function ShowMore({ children, initial = 5, className = "" }) {
  const [open, setOpen] = useState(false);
  const items = Children.toArray(children);
  const hidden = items.length - initial;

  return (
    <>
      <div className={className}>{open ? items : items.slice(0, initial)}</div>
      {hidden > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="group inline-flex min-h-14 items-center gap-3 rounded-full border border-fg/15 bg-surface pl-7 pr-2 text-base font-medium transition-colors hover:border-fg"
          >
            {open ? "Show less" : `See more projects (${hidden})`}
            <span
              className={`flex size-10 items-center justify-center rounded-full bg-fg text-bg transition-transform duration-300 ${
                open ? "-rotate-90" : "rotate-90"
              }`}
            >
              <Icon name="arrow" size={17} />
            </span>
          </button>
        </div>
      )}
    </>
  );
}
