import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./ten.module.scss";

export const Ten = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <p className={styles.title}>
        Mantengase al dia
        <br />
        registrate a nuestro boletin &#8594;
      </p>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="@tu correo..."
        />
        <button
          className={`${styles.button} ${styles.primaryButton} ${styles.largeButton}`}
        >
          Suscribirme <ArrowUpRight />
        </button>
      </form>
    </div>
  </div>
);
