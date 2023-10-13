import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./one.module.scss";
import Image from "next/image";

export const One = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.first}>
        <h1 className={styles.title}>
          Ofrecemos las mejores soluciones para tu negocio
        </h1>
        <p className={styles.description}>
          Establezca su visión y su propuesta de valor y conviértalas en
          prototipos probables.
        </p>
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${styles.primaryButton} ${styles.largeButton}`}
          >
            Contactanos
            <ArrowUpRight />
          </button>
          <button
            className={`${styles.button} ${styles.outlinedButton} ${styles.largeButton}`}
          >
            Descubrir
            <ArrowUpRight />
          </button>
        </div>
      </div>
      <Image
        priority
        src="/illustrations/woman.png"
        alt="woman"
        width={288}
        height={288}
        className={styles.image}
      />
    </div>
  </div>
);
