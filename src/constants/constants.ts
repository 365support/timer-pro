import { Preset, Round, Setting, StopWatch } from "@/components/Common/Icons";

export const DEFAULT_TEMPLATE = {
  work: { minutes: 0, seconds: 30 },
  rest: { minutes: 0, seconds: 10 },
  round: 2,
  cycle: 2,
  cycleRest: { minutes: 0, seconds: 10 },
};

export const NAV_ITEMS_FIRST_GROUP = [
  { route: "/stopwatch", icon: StopWatch, label: "스톱워치" },
  { route: "/round", icon: Round, label: "라운드" },
];

export const NAV_ITEMS_SECOND_GROUP = [
  { route: "/preset", icon: Preset, label: "프리셋" },
  { route: "/setting", icon: Setting, label: "설정" },
];
