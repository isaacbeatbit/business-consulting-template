import { SocialIcons } from "../AppBar/AppbarHeader";
import { Logo } from "../Logo/Logo";
import styles from "./footer.module.scss";

const About = () => (
  <div className={styles.about}>
    <Logo />
    <p className={styles.aboutDesc}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      maxime quia natus aspernatur dignissimos possimus ipsum non a dolore
      cumque exercitationem.
    </p>
  </div>
);

const columns = [
  {
    title: "Company",
    links: [
      {
        name: "About",
        href: "#",
      },
      {
        name: "Features",
        href: "#",
      },
      {
        name: "Works",
        href: "#",
      },
      {
        name: "Careers",
        href: "#",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        name: "Customer Support",
        href: "#",
      },
      {
        name: "Delivery Details",
        href: "#",
      },
      {
        name: "Terms & Conditions",
        href: "#",
      },
      {
        name: "Privacy Policy",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Free eBooks",
        href: "#",
      },
      {
        name: "Developer Tutorials",
        href: "#",
      },
      {
        name: "How to • Blog",
        href: "#",
      },
    ],
  },
  {
    title: "Link",
    links: [
      {
        name: "Free eBooks",
        href: "#",
      },
      {
        name: "Developer Tutorials",
        href: "#",
      },
      {
        name: "How to • Blog",
        href: "#",
      },
      {
        name: "Youtube Playlist",
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
