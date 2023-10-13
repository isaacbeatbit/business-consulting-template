"use client";
import { useState } from "react";
import styles from "./seven.module.scss";
import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import Image from "next/image";

const options = [
  {
    name: "Descubrir Todo",
  },
  {
    name: "Asesoramiento Empresarial",
  },
  {
    name: "Creacion de Empresas",
  },
  {
    name: "Asesoramiento Financiero",
  },
  {
    name: "Manejo de Riesgo",
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
    <p className={styles.caption}>Proyectos & estudios de caso</p>
    <p className={styles.title}>
      Mira nuestros
      <br />
      Proyectos globales
    </p>
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
    <Image
      src={src}
      alt={alt}
      className={styles.itemImg}
      height={288}
      width={192}
    />
    <p className={styles.itemTitle}>
      &iquest;Por qué es importante la consultoría empresarial?
    </p>
    <div className={styles.itemBottom}>
      <span className={styles.date}>30 Abril, 2020</span>
      <button
        className={`${styles.button} ${styles.largeButton} ${styles.transparentButton}`}
      >
        Leer más
        <ArrowUpRight />
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
      Ver nuestros proyectos
      <ArrowUpRight />
    </button>
  </div>
);
