type Props = {
  isRunning: boolean;
  hasNextSchedule: boolean;
  startSchedule: () => void;
  stopSchedule: () => void;
  cancelSchedule: () => void;
  nextSchedule: () => void;
};

const ScheduleController = ({
  isRunning,
  hasNextSchedule,
  startSchedule,
  stopSchedule,
  cancelSchedule,
  nextSchedule,
}: Props) => {
  return (
    <>
      {isRunning ? (
        <button onClick={stopSchedule}>중지</button>
      ) : (
        <button onClick={startSchedule}>시작</button>
      )}
      <button onClick={cancelSchedule}>취소</button>
      {hasNextSchedule && <button onClick={nextSchedule}>다음</button>}
    </>
  );
};

export default ScheduleController;
