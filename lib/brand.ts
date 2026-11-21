// The rtp. wordmark, drawn as strokes on a 13-unit grid. The r's shoulder,
// the t's crossbar and the top of the p's bowl all sit on the x-height line,
// so the three letters read as one continuous line ending in the period.
export const WORDMARK = {
  viewBox: "0 12 182 108",
  stroke: 13,
  paths: [
    "M6.5 88V32M6.5 64.5A26 26 0 0 1 32.5 38.5H42",
    "M64.5 14V65.5A16 16 0 0 0 80.5 81.5H90M52 38.5H84",
    "M108.5 32V118",
  ],
  bowl: { cx: 130, cy: 60, r: 21.5 },
  dot: { cx: 175, cy: 80.5, r: 7.5 },
} as const;

export const BRAND = {
  ink: "#17191A",
  paper: "#F3F0E9",
  signal: "#E0532B",
};
