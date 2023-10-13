import { SocialIcons } from "../AppBar/AppbarHeader";
import { Logo } from "../Logo/Logo";
import styles from "./footer.module.scss";

const About = () => (
  <div className={styles.about}>
    <Logo />
    <p className={styles.aboutDesc}>
      Somos una consultora de tecnología que ayuda a las empresas a crear y
      escalar sus productos digitales en la nube.
    </p>
  </div>
);

const columns = [
  {
    title: "Compañía",
    links: [
      {
        name: "Acerca de",
        href: "#",
      },
      {
        name: "Características",
        href: "#",
      },
      {
        name: "Cómo funciona",
        href: "#",
      },
      {
        name: "Carreras",
        href: "#",
      },
    ],
  },
  {
    title: "Ayuda",
    links: [
      {
        name: "Soporte al Cliente",
        href: "#",
      },
      {
        name: "Detalles de Entrega",
        href: "#",
      },
      {
        name: "Términos y Condiciones",
        href: "#",
      },
      {
        name: "Política de Privacidad",
        href: "#",
      },
    ],
  },
  {
    title: "Recursos",
    links: [
      {
        name: "eBooks Gratuitos",
        href: "#",
      },
      {
        name: "Tutoriales para Desarrolladores",
        href: "#",
      },
      {
        name: "Cómo hacer • Blog",
        href: "#",
      },
    ],
  },
  {
    title: "Enlaces",
    links: [
      {
        name: "eBooks Gratuitos",
        href: "#",
      },
      {
        name: "Tutoriales para Desarrolladores",
        href: "#",
      },
      {
        name: "Cómo hacer • Blog",
        href: "#",
      },
      {
        name: "Lista de Reproducción de YouTube",
        href: "#",
      },
    ],
  },
];

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.content}>
        <About />
        <div className={styles.columns}>
          {columns.map(({ links, title }) => (
            <div key={title} className={styles.column}>
              <p className={styles.title}>{title}</p>
              <ul className={styles.list}>
                {links.map(({ href, name }) => (
                  <li key={name}>
                    <a href={href}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className={styles.bottom}>
      <div className={styles.bottomContainer}>
        <p>&copy; 2023 CDMX - Agency Web</p>
        <SocialIcons extraClasses={styles.icons} />
      </div>
    </div>
  </footer>
);
