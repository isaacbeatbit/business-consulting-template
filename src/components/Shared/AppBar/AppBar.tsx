import styles from "./appbar.module.scss";
import { AppBarDesk } from "./AppBarDesk";
import { AppbarHeader } from "./AppbarHeader";
import { AppBarMobile } from "./AppBarMobile";

export const AppBar = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <AppbarHeader />
      <AppBarMobile />
      <AppBarDesk />
    </div>
  </header>
);
