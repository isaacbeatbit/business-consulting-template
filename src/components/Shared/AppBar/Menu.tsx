import { useSetRecoilState } from "recoil";
import styles from "./appbar.module.scss";
import { drawerState } from "@/recoil/atoms";

export const Menu = () => {
  const setDrawerState = useSetRecoilState(drawerState);

  const handleClick = () => setDrawerState(true);

  return (
    <button
    aria-label="menu"
      className={`${styles.iconButton} ${styles.mediumIconButton} ${styles.transparentIconButton}}`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
      </svg>
    </button>
  );
};
