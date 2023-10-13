import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./eight.module.scss";
import Image from "next/image";

const members = [
  {
    src: "woman-consultant.avif",
    alt: "woman cto",
  },
  {
    src: "man-cto.avif",
    alt: "man cto",
  },
  {
    src: "woman-founder.avif",
    alt: "woman consultant",
  },
  {
    src: "man-ceo.avif",
    alt: "man ceo",
  },
];

const Item = ({ src, alt }: { src: string; alt: string }) => (
  <div className={styles.item}>
    <Image
      src={`/illustrations/${src}`}
      alt={alt}
      className={styles.itemImg}
      height={405}
      width={270}
    />
    <p className={styles.itemTitle}>Kimbery Hansen</p>
    <span className={styles.itemCaption}>Fundador de startups</span>
  </div>
);

const Items = () => (
  <div className={styles.items}>
    {members.map(({ alt, src }) => (
      <Item src={src} alt={alt} key={alt} />
    ))}
  </div>
);

const Stars = () => (
  <div className={styles.stars}>
    {Array(5)
      .fill(null)
      .map((_, idx) => (
        <span key={idx} className={styles.star}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
          </svg>
        </span>
      ))}
  </div>
);

const Review = () => (
  <div className={styles.review}>
    <Stars />
    <p className={styles.reviewText}>
      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
      ipsum eu nunc commodo posuere et sit amet ligula.&quot;
    </p>
    <div className={styles.reviewBottom}>
      <Image
        src="/illustrations/avatar.avif"
        alt="avatar"
        width={64}
        height={64}
        className={styles.reviewImg}
      />
      <div>
        <p className={styles.reviewName}>Wanda Warren</p>
        <span className={styles.reviewPos}>Business Manager</span>
      </div>
    </div>
  </div>
);

const Reviews = () => (
  <div className={styles.reviews}>
    <span className={styles.caption}>Testimonios</span>
    <p className={styles.reviewsTitle}>
      &iquest;Que dicen nuestros clientes?
    </p>
    <div className={styles.reviewsItems}>
      {[1, 2, 3].map((i) => (
        <Review key={i} />
      ))}
    </div>
    <button
      className={`${styles.button} ${styles.largeButton} ${styles.secondaryButton} ${styles.reviewsButton}`}
    >
      Todas las opinones
      <ArrowUpRight />
    </button>
  </div>
);

export const Eight = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.wrapper2}>
        <span className={styles.caption}>Conoce a Nuestro Equipo</span>
        <div className={styles.header}>
          <p className={styles.headerTitle}>
            Miembros Experimentados
            <br />
            del Equipo
          </p>
          <button
            className={`${styles.button} ${styles.largeButton} ${styles.outlinedButton}`}
          >
            Explorar Servicios
            <ArrowUpRight />
          </button>
        </div>
        <Items />
        <Reviews />
      </div>
    </div>
  </div>
);
