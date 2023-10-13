import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./nine.module.scss";
import Image from "next/image";

const images = [
  {
    src: "code.png",
    alt: "code",
  },
  {
    src: "productivity.png",
    alt: "productivity",
  },
  {
    src: "dialog.png",
    alt: "dialog",
  },
  {
    src: "notes.png",
    alt: "notes",
  },
];

const Item = ({ src, alt, idx }: { src: string; alt: string; idx: number }) => (
  <div className={`${styles.item} ${idx === 3 ? styles.hide : ""}`}>
    <Image width={288} height={193} src={`/illustrations/${src}`} alt={alt} className={styles.itemImg} />
    <span className={styles.tag}>Business</span>
    <p className={styles.itemTitle}>
      Guia para mejorar la productividad de tu equipo
    </p>
    <p>
      En este articulo te mostramos como mejorar la productividad de tu equipo y
      como hacer que tu equipo sea mas eficiente.
    </p>
  </div>
);

export const Nine = () => (
  <div className={styles.container}>
    <span className={styles.caption}>Articulos & noticias</span>
    <div className={styles.header}>
      <p className={styles.title}>
        Ver todas las
        <br />
        noticias y blogs
      </p>
      <button
        className={`${styles.button} ${styles.largeButton} ${styles.outlinedButton}`}
      >
        Explorar servicios
        <ArrowUpRight />
      </button>
    </div>
    <div className={styles.items}>
      {images.map(({ alt, src }, idx) => (
        <Item key={alt} src={src} alt={alt} idx={idx} />
      ))}
    </div>
  </div>
);
