type Props = {
  isRunning: boolean;
  hasNext: boolean;
  onStart: () => void;
  onStop: () => void;
  onCancel: () => void;
  onNext: () => void;
};

const ControlPanel = ({
  isRunning,
  hasNext,
  onStart,
  onStop,
  onCancel,
  onNext,
}: Props) => {
  return (
    <>
      {isRunning ? (
        <button onClick={onStop}>중지</button>
      ) : (
        <button onClick={onStart}>시작</button>
      )}
      <button onClick={onCancel}>취소</button>
      {hasNext && <button onClick={onNext}>다음</button>}
    </>
  );
};

export default ControlPanel;
