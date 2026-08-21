type IconProps = { name: string; className?: string };

const PATHS: Record<string, string> = {
  target:
    "M12 3a9 9 0 1 0 9 9M12 7.5a4.5 4.5 0 1 0 4.5 4.5M12 12l7.5-7.5M16.5 4.5V7h2.5",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-4-4",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  megaphone: "M4 10v4h3l7 4V6l-7 4H4ZM18 9a4 4 0 0 1 0 6M8 14v5",
  flask: "M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3M7.5 15h9",
  layers: "m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5",
  graph: "M4 20h16M6 16l4-5 3 3 5-7",
  home: "M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8Z",
  health: "M12 5v14M5 12h14",
  bag: "M6 8h12l1 12H5L6 8ZM9 8V6a3 3 0 0 1 6 0v2",
  bed: "M3 18v-8h11a4 4 0 0 1 4 4v4M3 14h18M3 18h18M7 10V7",
  wrench:
    "M15 4a5 5 0 0 0-4.6 7L4 17.4 6.6 20l6.4-6.4A5 5 0 0 0 20 9l-3 3-2-2 3-3a5 5 0 0 0-3-3Z",
  dumbbell: "M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10",
  phone: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM11 18h2",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  pin: "M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11ZM12 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  check: "m4 12 5 5L20 6",
  arrow: "M5 12h14M13 6l6 6-6 6",
  spark: "M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3",
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const d = PATHS[name] ?? PATHS["spark"];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}
