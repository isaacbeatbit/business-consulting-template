import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./one.module.scss";

export const One = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.first}>
        <h1 className={styles.title}>We Provide Best Business Solutions</h1>
        <p className={styles.description}>
          Establish your vision and value proposition and turn them into
          testeable prototypes.
        </p>
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${styles.primaryButton} ${styles.largeButton}`}
          >
            Get consulting
            <ArrowUpRight />
          </button>
          <button
            className={`${styles.button} ${styles.outlinedButton} ${styles.largeButton}`}
          >
            Learn more
            <ArrowUpRight />
          </button>
        </div>
      </div>
      <img
        src="/illustrations/woman.png"
        alt="woman"
        width={400}
        height={500}
        className={styles.image}
      />
    </div>
  </div>
);
