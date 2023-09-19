"use client";
import { drawerState } from "@/recoil/atoms";
import { useRecoilState } from "recoil";
import styles from "./drawer.module.scss";

export const Drawer = () => {
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const handleClick = () => setDrawer(!drawer);

  return (
    <div
      onClick={handleClick}
      className={`${styles.drawer} ${drawer ? styles.visible : ""}`}
    />
  );
};
