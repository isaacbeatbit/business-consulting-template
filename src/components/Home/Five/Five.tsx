import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./five.module.scss";

const items = [
  {
    title: "Business Advice",
    description:
      "Deliver faster and more reliable business outcomes. We help you scale your business, improve performance and increase ROI.",
  },
  {
    title: "Startup business",
    description:
      "Deliver faster and more reliable business outcomes. We help you scale your business, improve performance and increase ROI.",
  },
  {
    title: "Financial Advice",
    description:
      "Deliver faster and more reliable business outcomes. We help you scale your business, improve performance and increase ROI.",
  },
  {
    title: "Risk Management",
    description:
      "Deliver faster and more reliable business outcomes. We help you scale your business, improve performance and increase ROI.",
  },
];

const numbers = [
  {
    number: 5310,
    text: "Happy Client",
  },
  {
    number: 5310,
    text: "Complete Project",
  },
  {
    number: 5310,
    text: "Running Project",
  },
  {
    number: 5310,
    text: "Winning Awards",
  },
];

const One = () => (
  <div className={styles.one}>
    <div className={styles.oneHeader}>
      <span className={styles.caption}>Our services</span>
      <p className={styles.title}>We Provide The Best Service For Consulting</p>
    </div>
    <p className={styles.description}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sapiente
      provident maiores.
    </p>
  </div>
);

const Two = () => (
  <div className={styles.items}>
    {items.map(({ description, title }) => (
      <div key={title} className={`${styles.item} ${styles.itemWithIcon}`}>
        <p className={styles.itemTitle}>{title}</p>
        <p className={styles.itemDesc}>{description}</p>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.iconButton} ${styles.mediumIconButton} ${styles.darkIconButton} ${styles.icon}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </button>
        </div>
      </div>
    ))}
  </div>
);

const Three = () => (
  <div className={styles.three}>
    {numbers.map(({ number, text }) => (
      <div key={text} className={styles.numbers}>
        <span className={styles.number}>{number}</span>
        <span className={styles.text}>{text}</span>
      </div>
    ))}
  </div>
);

export const Five = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <One />
      <Two />
      <button
        className={`${styles.button} ${styles.largeButton} ${styles.outlinedButton} ${styles.ctaBtn}`}
      >
        Browse Services <ArrowUpRight />
      </button>
      <Three />
    </div>
  </div>
);
