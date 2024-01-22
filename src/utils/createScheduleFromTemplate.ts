import { Schedule, TabataTemplate } from "@/types/Time";

const createRoundSchedules = (template: TabataTemplate): Schedule[] => {
  return Array.from({ length: template.round }, (_, index) => {
    const isNotLastRound = index < template.round - 1;

    return [
      { name: "work", time: template.work },
      ...(isNotLastRound ? [{ name: "rest", time: template.rest }] : []),
    ];
  }).flat();
};

export const createScheduleFromTemplate = (
  template: TabataTemplate
): Schedule[] => {
  const roundSchedules = createRoundSchedules(template);

  return Array.from({ length: template.cycle }, (_, cycleIndex) => {
    const isNotLastCycle = cycleIndex < template.cycle - 1;

    return isNotLastCycle
      ? [...roundSchedules, { name: "cycleRest", time: template.cycleRest }]
      : [...roundSchedules];
  }).flat();
};
