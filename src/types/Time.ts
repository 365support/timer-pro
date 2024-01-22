export type Time = {
  minutes: number;
  seconds: number;
};

export type Schedule = { name: string; time: Time };

type Round = {
  work: Schedule;
  rest: Schedule;
};

type Cycle = {
  rounds: Round[];
  rest: Schedule;
};

export type TabataTemplate = {
  work: Time;
  rest: Time;
  round: number;
  cycle: number;
  cycleRest: Time;
};

export type TemplateType = "tabata" | "round" | "stopwatch";
