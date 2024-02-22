import { Schedule, TabataTemplate } from "@/types/Time";

const createRoundSchedules = (template: TabataTemplate): Schedule[] => {
  return Array.from({ length: template.round }, (_, index) => {
    const isNotLastRound = index < template.round - 1;
    const schedules: Schedule[] = [{ name: "work", time: template.work }];

    if (isNotLastRound) {
      schedules.push({ name: "rest", time: template.rest });
    }

    return schedules;
  }).flat();
};

export const createScheduleFromTemplate = (
  template: TabataTemplate
): Schedule[] => {
  const roundSchedules = createRoundSchedules(template);

  return Array.from({ length: template.cycle }, (_, cycleIndex) => {
    const isNotLastCycle = cycleIndex < template.cycle - 1;
    const cycleSchedules = [...roundSchedules];

    if (isNotLastCycle) {
      cycleSchedules.push({ name: "cycleRest", time: template.cycleRest });
    }

    return cycleSchedules;
  }).flat();
};
