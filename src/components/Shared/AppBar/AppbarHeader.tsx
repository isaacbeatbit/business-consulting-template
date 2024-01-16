import styles from "./appbarHeader.module.scss";

const items = [
  {
    info: "+52 56 1003 5474",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-16.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,16,159.4,16,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z"></path>
      </svg>
    ),
  },
  {
    info: "hola@progreweb.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
      </svg>
    ),
  },
  {
    info: "120 F 2th Street, New York, USA",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
      </svg>
    ),
  },
  {
    info: "Mon - Fri: 9:00 - 19:00",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
      </svg>
    ),
  },
];

const socialItems = [
  {
    name: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,16,0,0,0-16,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>
      </svg>
    ),
    href: "/",
  },
  {
    name: "Twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path>
      </svg>
    ),
    href: "/",
  },
  {
    name: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,16,0,1,1-16-32A32,16,0,0,1,160,128Z"></path>
      </svg>
    ),
    href: "/",
  },
  {
    name: "Linkedin",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
      </svg>
    ),
    href: "/",
  },
];

export const SocialIcons = ({ extraClasses }: { extraClasses?: string }) => (
  <ul className={styles.socialList}>
    {socialItems.map(({ icon, name, href }) => (
      <li key={name}>
        <a
          href={href}
          className={`${styles.socialLink} ${extraClasses}`}
          aria-label={name}
        >
          {icon}
        </a>
      </li>
    ))}
  </ul>
);

export const AppbarHeader = () => {
  return (
    <div className={styles.appbarHeader}>
      <ul className={styles.list}>
        {items.slice(0, 3).map(({ icon, info }) => (
          <li key={info}>
            <a href="#" className={styles.link}>
              {icon}
              <span>{info}</span>
            </a>
          </li>
        ))}
        <div className={styles.spacer} />
        <li>
          <a href="#" className={styles.link}>
            {items[3].icon}
            <span>{items[3].info}</span>
          </a>
        </li>
      </ul>
      <span className={styles.divider}>|</span>
      <SocialIcons />
    </div>
  );
};
