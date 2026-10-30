"use client";

import { useId, useRef, useState } from "react";
import Tag from "@/components/ui/Tag";
import type { ProjectDetail } from "@/types";

type TabDef = { id: string; label: string; body: React.ReactNode };

export default function ProjectDetailContent({
  detail,
}: {
  detail?: ProjectDetail;
}) {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  if (!detail) return null;
  const { overview, approach, capabilities, technologies, status } = detail;

  const paragraphs = (items: string[]) => (
    <div className="space-y-3">
      {items.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );

  const tabs: TabDef[] = [
    { id: "overview", label: "Overview", body: paragraphs(overview) },
    ...(approach?.length
      ? [{ id: "approach", label: "Approach", body: paragraphs(approach) }]
      : []),
    {
      id: "capabilities",
      label: "Capabilities",
      body: (
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {capabilities.map((item) => (
            <li key={item} className="border-t pt-3 text-navy">
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    ...(technologies?.length
      ? [
          {
            id: "technologies",
            label: "Technologies",
            body: (
              <ul className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            ),
          },
        ]
      : []),
    ...(status
      ? [{ id: "status", label: "Status", body: <p>{status}</p> }]
      : []),
  ];

  const current = Math.min(active, tabs.length - 1);
  const panelId = `${baseId}-panel`;

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = tabs.length - 1;
    let next = current;
    if (e.key === "ArrowRight") next = current === last ? 0 : current + 1;
    else if (e.key === "ArrowLeft") next = current === 0 ? last : current - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="mt-6 flex flex-col presentation:min-h-0 presentation:flex-1">
      <div
        role="tablist"
        aria-label="Project information"
        className="flex flex-wrap gap-x-6"
        onKeyDown={onKeyDown}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`${baseId}-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-controls={panelId}
            tabIndex={i === current ? 0 : -1}
            onClick={() => setActive(i)}
            className={`min-h-11 border-b-2 text-[15px] font-medium ${
              i === current
                ? "border-steel-dark text-navy"
                : "border-transparent text-muted hover:text-navy"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={panelId}
        aria-labelledby={`${baseId}-tab-${tabs[current].id}`}
        tabIndex={0}
        className="mt-4 text-[15px] text-muted presentation:min-h-0 presentation:flex-1 presentation:overflow-y-auto presentation:pr-2"
      >
        {tabs[current].body}
      </div>
    </div>
  );
}