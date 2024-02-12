import { ReactNode } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import clsx from "clsx";
import * as styles from "./index.css";

type ProgressbarProps = {
  percent: number;
  children: ReactNode;
  className?: string;
};

const Progressbar = ({ className, percent, children }: ProgressbarProps) => {
  return (
    <div className={clsx(className, styles.progressContainerStyle)}>
      <CircularProgressbar
        strokeWidth={5}
        value={percent}
        styles={buildStyles({
          trailColor: "#423B4B",
          pathColor: "#8778F0",
          pathTransitionDuration: percent === 0 ? 0 : 0.5,
        })}
      />
      <div className={styles.innerContentStyle}>{children}</div>
    </div>
  );
};

export default Progressbar;
