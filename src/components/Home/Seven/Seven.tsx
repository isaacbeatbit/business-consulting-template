"use client";
import { useState } from "react";
import styles from "./seven.module.scss";
import { ArrowUpRight } from "@/components/Shared/Icons/Icons";

const options = [
  {
    name: "Discover All",
  },
  {
    name: "Business Advice",
  },
  {
    name: "Startup Business",
  },
  {
    name: "Financial Advice",
  },
  {
    name: "Risk Management",
  },
];

const images = [
  {
    src: "responsive.avif",
    alt: "responsive",
  },
  {
    src: "writer.avif",
    alt: "writer",
  },
  {
    src: "planning.avif",
    alt: "planning",
  },
  {
    src: "teaching.avif",
    alt: "teaching",
  },
];

const Header = () => (
  <div className={styles.header}>
    <p className={styles.caption}>Projects & Cases Studies</p>
    <h3 className={styles.title}>
      Let&apos;s Looks
      <br />
      Our Global Projects
    </h3>
  </div>
);

const Options = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.optionsContainer}>
      <div className={styles.options}>
        {options.map(({ name }, idx) => (
          <button
            onClick={() => setSelected(idx)}
            key={name}
            className={`
          ${styles.button}
          ${styles.largeButton}
          ${selected === idx ? styles.primaryButton : styles.transparentButton}
          `}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

const Item = ({ src, alt }: { src: string; alt: string }) => (
  <div className={styles.item}>
    <img src={src} alt={alt} className={styles.itemImg} />
    <p className={styles.itemTitle}>
      Why your client needs a responsive website
    </p>
    <div className={styles.itemBottom}>
      <span className={styles.date}>April 30, 2020</span>
      <button
        className={`${styles.button} ${styles.largeButton} ${styles.transparentButton}`}
      >
        Read more <ArrowUpRight />
      </button>
    </div>
  </div>
);

const Items = () => (
  <div className={styles.items}>
    {images.map(({ alt, src }) => (
      <Item src={`/illustrations/${src}`} alt={alt} key={alt} />
    ))}
  </div>
);

export const Seven = () => (
  <div className={styles.container}>
    <Header />
    <Options />
    <Items />
    <button
      className={`${styles.button} ${styles.largeButton} ${styles.secondaryButton} ${styles.lastButton}`}
    >
      All Recent Projects <ArrowUpRight />
    </button>
  </div>
);
