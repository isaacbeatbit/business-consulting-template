"use client";
import { usePathname } from "next/navigation";
import { Logo } from "../Logo/Logo";
import styles from "./appbarDesk.module.scss";
import { ArrowUpRight } from "../Icons/Icons";

const items = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Nosotros",
    href: "#",
  },
  {
    name: "Servicios",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Contacto",
    href: "#",
  },
];

export const AppBarDesk = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.appbarDesk}>
      <Logo />
      <div className={styles.content}>
        <ul className={styles.list}>
          {items.map(({ name, href }) => (
            <li key={name}>
              <a href="#" className={styles.link}>
                {name}
                <span className={pathname === href ? styles.active : ""} />
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`${styles.button} ${styles.primaryButton} ${styles.largeButton}`}
        >
          Contactanos
          <ArrowUpRight />
        </button>
      </div>
    </nav>
  );
};
