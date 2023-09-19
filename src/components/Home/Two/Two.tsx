import Image from "next/image";
import styles from "./two.module.scss";

const links = [
  {
    src: "/logos/hotjar.svg",
    name: "hotjar",
    w: 113,
    h: 48,
  },
  {
    src: "/logos/paypal.svg",
    name: "paypal",
    w: 143,
    h: 48,
  },
  {
    src: "/logos/instagram.svg",
    name: "instragram",
    w: 125,
    h: 48,
  },
  {
    src: "/logos/shopify.svg",
    name: "shopify",
    w: 127,
    h: 48,
  },
];

export const Two = () => (
  <div className={styles.container}>
    <div className={styles.logos}>
      {links.map(({ src, name, w, h }) => (
        <Image key={name} src={src} alt={name} width={w} height={h} />
      ))}
    </div>
  </div>
);
