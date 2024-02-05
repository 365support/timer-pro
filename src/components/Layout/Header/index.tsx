import clsx from "clsx";
import * as style from "./index.css"; // 스타일 파일 경로는 예시입니다.

type HeaderProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Header = ({ className, children }: HeaderProps) => {
  return (
    <div>
      <header className={clsx(style.headerStyle, className)}>{children}</header>
      <div className={style.headerUnderLine} />
    </div>
  );
};

Header.Left = ({ className, onClick, children }: HeaderProps) => {
  return (
    <div onClick={onClick} className={clsx(style.headerSide, className)}>
      {children}
    </div>
  );
};

Header.Center = ({ className, onClick, children }: HeaderProps) => {
  return (
    <div onClick={onClick} className={clsx(style.headerCenter, className)}>
      {children}
    </div>
  );
};

Header.Right = ({ className, onClick, children }: HeaderProps) => {
  return (
    <div onClick={onClick} className={clsx(style.headerSide, className)}>
      {children}
    </div>
  );
};

export default Header;
