import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./ten.module.scss";

export const Ten = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <h4 className={styles.title}>
        Get update by
        <br />
        signup newsletter
      </h4>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="@your email..."
        />
        <button
          className={`${styles.button} ${styles.primaryButton} ${styles.largeButton}`}
        >
          Subscribe <ArrowUpRight />
        </button>
      </form>
    </div>
  </div>
);
