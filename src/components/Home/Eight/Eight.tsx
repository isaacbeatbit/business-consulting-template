import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./eight.module.scss";

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
    <img src={`/illustrations/${src}`} alt={alt} className={styles.itemImg} />
    <p className={styles.itemTitle}>Kimbery Hansen</p>
    <span className={styles.itemCaption}>Senior Consultant</span>
  </div>
);

const Items = () => (
  <div className={styles.items}>
    {members.map(({ alt, src }) => (
      <Item src={src} alt={alt} key={alt} />
    ))}
  </div>
);

const reviews = [
  {
    stars: 5,
    text: "",
    name: "Randy Porter",
    position: "CEO at Company",
  },
];

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
      <img
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
    <span className={styles.caption}>Testimonials</span>
    <h3 className={styles.reviewsTitle}>What Our Clients Says</h3>
    <div className={styles.reviewsItems}>
      {Array(3)
        .fill(null)
        .map((_, idx) => (
          <Review key={idx} />
        ))}
    </div>
    <button
      className={`${styles.button} ${styles.largeButton} ${styles.secondaryButton} ${styles.reviewsButton}`}
    >
      All Reviews <ArrowUpRight />
    </button>
  </div>
);

export const Eight = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.wrapper2}>
        <span className={styles.caption}>Meet Our Team</span>
        <div className={styles.header}>
          <p className={styles.headerTitle}>
            Experience
            <br />
            Teams Members
          </p>
          <button
            className={`${styles.button} ${styles.largeButton} ${styles.outlinedButton}`}
          >
            Browse Services <ArrowUpRight />
          </button>
        </div>
        <Items />
        <Reviews />
      </div>
    </div>
  </div>
);
