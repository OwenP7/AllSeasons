import { StrainType } from "@/data/strains";

export type StrainFilter = "ALL" | StrainType;

/** Shared: cut corners + structural frame */
const BADGE_CLIP =
  "[clip-path:polygon(0_6px,6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%)]";

/** Modal — dark UI, subtle type tint + structural lines */
const TYPE_BADGE: Record<StrainType, string> = {
  INDICA: [
    "relative",
    BADGE_CLIP,
    "border border-white/18 border-l-[3px] border-l-violet-400/75",
    "bg-gradient-to-br from-violet-950/35 to-black/80",
    "px-3.5 py-1.5 pl-3",
    "text-[10px] font-medium uppercase tracking-[0.22em] text-violet-100/95",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_-1px_0_rgba(0,0,0,0.45)]",
    "before:pointer-events-none before:absolute before:left-[7px] before:top-0 before:h-px before:w-[calc(100%-14px)] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:content-['']",
  ].join(" "),
  SATIVA: [
    "relative",
    BADGE_CLIP,
    "border border-white/18 border-l-[3px] border-l-emerald-400/75",
    "bg-gradient-to-br from-emerald-950/30 to-black/80",
    "px-3.5 py-1.5 pl-3",
    "text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-100/95",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_-1px_0_rgba(0,0,0,0.45)]",
    "before:pointer-events-none before:absolute before:left-[7px] before:top-0 before:h-px before:w-[calc(100%-14px)] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:content-['']",
  ].join(" "),
  HYBRID: [
    "relative",
    BADGE_CLIP,
    "border border-white/18 border-l-[3px] border-l-amber-400/75",
    "bg-gradient-to-br from-amber-950/25 to-black/80",
    "px-3.5 py-1.5 pl-3",
    "text-[10px] font-medium uppercase tracking-[0.22em] text-amber-100/95",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_-1px_0_rgba(0,0,0,0.45)]",
    "before:pointer-events-none before:absolute before:left-[7px] before:top-0 before:h-px before:w-[calc(100%-14px)] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:content-['']",
  ].join(" "),
};

/** Merged card control: type (left) + VIEW DETAILS (right), one clipped bar */
const CARD_ACTION_ROOT: Record<StrainType, string> = {
  INDICA: [
    "relative",
    BADGE_CLIP,
    "inline-flex w-full max-w-[300px] items-stretch overflow-hidden",
    "border border-white/35 border-l-[3px] border-l-violet-400",
    "bg-black/75 backdrop-blur-md",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.5)]",
    "before:pointer-events-none before:absolute before:left-[7px] before:top-0 before:h-px before:w-[calc(100%-14px)] before:bg-gradient-to-r before:from-transparent before:via-white/22 before:to-transparent before:content-['']",
    "transition-[filter,box-shadow] duration-200 ease-out",
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.06)]",
  ].join(" "),
  SATIVA: [
    "relative",
    BADGE_CLIP,
    "inline-flex w-full max-w-[300px] items-stretch overflow-hidden",
    "border border-white/35 border-l-[3px] border-l-emerald-400",
    "bg-black/75 backdrop-blur-md",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.5)]",
    "before:pointer-events-none before:absolute before:left-[7px] before:top-0 before:h-px before:w-[calc(100%-14px)] before:bg-gradient-to-r before:from-transparent before:via-white/22 before:to-transparent before:content-['']",
    "transition-[filter,box-shadow] duration-200 ease-out",
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.06)]",
  ].join(" "),
  HYBRID: [
    "relative",
    BADGE_CLIP,
    "inline-flex w-full max-w-[300px] items-stretch overflow-hidden",
    "border border-white/35 border-l-[3px] border-l-amber-400",
    "bg-black/75 backdrop-blur-md",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.5)]",
    "before:pointer-events-none before:absolute before:left-[7px] before:top-0 before:h-px before:w-[calc(100%-14px)] before:bg-gradient-to-r before:from-transparent before:via-white/22 before:to-transparent before:content-['']",
    "transition-[filter,box-shadow] duration-200 ease-out",
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.06)]",
  ].join(" "),
};

const CARD_ACTION_TYPE: Record<StrainType, string> = {
  INDICA:
    "flex shrink-0 items-center border-r border-white/25 px-3 py-2.5 pl-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-violet-50",
  SATIVA:
    "flex shrink-0 items-center border-r border-white/25 px-3 py-2.5 pl-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-50",
  HYBRID:
    "flex shrink-0 items-center border-r border-white/25 px-3 py-2.5 pl-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-50",
};

const CARD_ACTION_DETAILS =
  "flex min-w-0 flex-1 cursor-pointer items-center justify-center px-3 py-2.5 text-[10px] font-medium uppercase tracking-[0.3em] leading-[1.6] text-[#a0a0a0] transition-[color,background-color] duration-200 group-hover/action:bg-white/[0.14] group-hover/action:text-white hover:bg-white/[0.18] hover:text-white";

/** Filter row — same geometry + rail colors as strain pills */
const FILTER_CHIP: Record<
  StrainFilter,
  { inactive: string; active: string }
> = {
  ALL: {
    inactive: [
      "relative",
      BADGE_CLIP,
      "border border-white/30 border-l-[3px] border-l-white/40",
      "bg-black/60 backdrop-blur-md",
      "px-4 py-2",
      "text-xs font-medium uppercase tracking-[0.22em] leading-[1.6] text-[#a0a0a0]",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.45)]",
      "transition-[color,background-color,border-color,box-shadow] duration-150",
      "hover:border-white/45 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]",
    ].join(" "),
    active: [
      "relative",
      BADGE_CLIP,
      "border border-white/55 border-l-[3px] border-l-white",
      "bg-white/[0.94] backdrop-blur-md",
      "px-4 py-2",
      "text-xs font-medium uppercase tracking-[0.22em] text-black",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.08)]",
    ].join(" "),
  },
  INDICA: {
    inactive: [
      "relative",
      BADGE_CLIP,
      "border border-white/30 border-l-[3px] border-l-violet-400/65",
      "bg-black/60 backdrop-blur-md",
      "px-4 py-2",
      "text-xs font-medium uppercase tracking-[0.22em] leading-[1.6] text-violet-200/75",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.45)]",
      "transition-[color,background-color,border-color,box-shadow] duration-150",
      "hover:border-violet-400/90 hover:text-violet-100 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
    ].join(" "),
    active: [
      "relative",
      BADGE_CLIP,
      "border border-violet-400/55 border-l-[3px] border-l-violet-300",
      "bg-gradient-to-br from-violet-950/55 to-black/85 backdrop-blur-md",
      "px-4 py-2",
      "text-xs font-medium uppercase tracking-[0.22em] text-violet-50",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.5)]",
    ].join(" "),
  },
  SATIVA: {
    inactive: [
      "relative",
      BADGE_CLIP,
      "border border-white/30 border-l-[3px] border-l-emerald-400/65",
      "bg-black/60 backdrop-blur-md",
      "px-4 py-2",
      "text-xs font-medium uppercase tracking-[0.22em] leading-[1.6] text-emerald-200/75",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.45)]",
      "transition-[color,background-color,border-color,box-shadow] duration-150",
      "hover:border-emerald-400/90 hover:text-emerald-100 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
    ].join(" "),
    active: [
      "relative",
      BADGE_CLIP,
      "border border-emerald-400/55 border-l-[3px] border-l-emerald-300",
      "bg-gradient-to-br from-emerald-950/45 to-black/85 backdrop-blur-md",
      "px-4 py-2",
      "text-xs font-medium uppercase tracking-[0.22em] text-emerald-50",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.5)]",
    ].join(" "),
  },
  HYBRID: {
    inactive: [
      "relative",
      BADGE_CLIP,
      "border border-white/30 border-l-[3px] border-l-amber-400/65",
      "bg-black/60 backdrop-blur-md",
      "px-4 py-2",
      "text-xs font-medium uppercase tracking-[0.22em] leading-[1.6] text-amber-200/75",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.45)]",
      "transition-[color,background-color,border-color,box-shadow] duration-150",
      "hover:border-amber-400/90 hover:text-amber-100 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
    ].join(" "),
    active: [
      "relative",
      BADGE_CLIP,
      "border border-amber-400/55 border-l-[3px] border-l-amber-300",
      "bg-gradient-to-br from-amber-950/40 to-black/85 backdrop-blur-md",
      "px-4 py-2",
      "text-xs font-medium uppercase tracking-[0.22em] text-amber-50",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.5)]",
    ].join(" "),
  },
};

export function filterChipClasses(filter: StrainFilter, isActive: boolean): string {
  const row = FILTER_CHIP[filter];
  return isActive ? row.active : row.inactive;
}

export function strainCardActionRootClasses(type: StrainType): string {
  return CARD_ACTION_ROOT[type];
}

export function strainCardActionTypeClasses(type: StrainType): string {
  return CARD_ACTION_TYPE[type];
}

export function strainCardActionDetailsClasses(): string {
  return CARD_ACTION_DETAILS;
}

export function typeBadgeClasses(type: StrainType): string {
  return TYPE_BADGE[type];
}
