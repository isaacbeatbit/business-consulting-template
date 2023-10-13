import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./five.module.scss";

const items = [
  {
    title: "Asesoramiento empresarial",
    description:
      "Navegue hacia el éxito con estrategias y dirección experta, impulsando crecimiento y eficiencia en su negocio.",
  },
  {
    title: "Creación de Empresas",
    description:
      "Iniciamos negocios sólidos desde cero, ademas brindando el conocimiento y apoyo necesario para el arranque exitoso de su empresa y su crecimiento.",
  },
  {
    title: "Asesoramiento Financiero",
    description:
      "Soluciones financieras personalizadas para alcanzar sus metas económicas, maximizando sus activos y recursos financieros.",
  },
  {
    title: "Gestión de riesgos",
    description:
      "Identificamos y mitigamos riesgos comerciales de manera efectiva, protegiendo su inversión y reputación corporativa en el mercado.",
  },
];

const numbers = [
  {
    number: 5310,
    text: "Clientes felices",
  },
  {
    number: 5310,
    text: "Proyectos terminados",
  },
  {
    number: 5310,
    text: "Proyectos en curso",
  },
  {
    number: 5310,
    text: "Premios ganados",
  },
];

const One = () => (
  <div className={styles.one}>
    <div className={styles.oneHeader}>
      <span className={styles.caption}>Nuestros servicios</span>
      <p className={styles.title}>
        Ofrecemos los mejores servicios de consultoria
      </p>
    </div>
    <p className={styles.description}>
      Encontrarás los mejores servicios de consultoria para tu empresa, con los
      mejores profesionales del mercado.
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
            aria-label="ir al servicio"
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
        Ver todos los servicios
        <ArrowUpRight />
      </button>
      <Three />
    </div>
  </div>
);
