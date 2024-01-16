"use client";
import Timer from "@/components/Timer/Timer";
import useSchedule from "@/hooks/useSchedule";

const TimerPage = () => {
  const currentSchedule = useSchedule("template");

  if (currentSchedule.length === 0) {
    return null;
  }

  return <Timer schedule={currentSchedule} />;
};

export default TimerPage;
