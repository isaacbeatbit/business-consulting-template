import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./nine.module.scss";

const images = [
  {
    src: "code.avif",
    alt: "code",
  },
  {
    src: "productivity.avif",
    alt: "productivity",
  },
  {
    src: "dialog.avif",
    alt: "dialog",
  },
  {
    src: "notes.avif",
    alt: "notes",
  },
];

const Item = ({ src, alt, idx }: { src: string; alt: string; idx: number }) => (
  <div className={`${styles.item} ${idx === 3 ? styles.hide : ""}`}>
    <img src={`/illustrations/${src}`} alt={alt} className={styles.itemImg} />
    <span className={styles.date}>
      <span>25</span>
      <span>Mar</span>
    </span>
    <span className={styles.tag}>Business</span>
    <p className={styles.itemTitle}>
      Guide To Newly Supporte Modern CSS Pseudo
    </p>
    <p>
      Lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </p>
  </div>
);

export const Nine = () => (
  <div className={styles.container}>
    <span className={styles.caption}>Article & News</span>
    <div className={styles.header}>
      <p className={styles.title}>
        Get every single <br />
        news & blogs
      </p>
      <button
        className={`${styles.button} ${styles.largeButton} ${styles.outlinedButton}`}
      >
        Browse Services <ArrowUpRight />
      </button>
    </div>
    <div className={styles.items}>
      {images.map(({ alt, src }, idx) => (
        <Item key={alt} src={src} alt={alt} idx={idx} />
      ))}
    </div>
  </div>
);
