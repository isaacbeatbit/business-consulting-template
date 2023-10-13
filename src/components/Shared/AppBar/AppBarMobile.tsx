"use client";
import styles from "./appbarMobile.module.scss";
import { Logo, MiniLogo } from "../Logo/Logo";
import { Menu } from "./Menu";
import { useRecoilValue } from "recoil";
import { drawerState } from "@/recoil/atoms";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Nosotros",
    href: "#",
  },
  {
    title: "Servicios",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Contacto",
    href: "#",
  },
];

export const AppBarMobile = () => {
  const drawer = useRecoilValue(drawerState);
  const pathname = usePathname();

  return (
    <div className={styles.appbarMobile}>
      <Menu />
      <MiniLogo />
      <div className={styles.spacer} />
      <button
        className={`${styles.button} ${styles.primaryButton} ${styles.largeButton}`}
      >
        Contactanos
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
        </svg>
      </button>
      <nav
        className={`${styles.navMobile} ${drawer ? styles.showNavMobile : ""}`}
      >
        <Logo extraClasses={styles.navMobileLogo} />
        <ul className={styles.navMobileLinks}>
          {links.map(({ href, title }) => (
            <li key={title}>
              <Link
                className={`${styles.navMobileLogoLink} ${
                  pathname === href ? styles.active : ""
                }`}
                href={href}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
