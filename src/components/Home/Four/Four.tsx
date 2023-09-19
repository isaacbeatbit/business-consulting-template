import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./four.module.scss";

const video = "https://youtu.be/_m3FYWXmRs4?si=krMnIugYt5cXrZ6l";

export const Four = () => (
  <div className={styles.container}>
    <div className={styles.one}>
      <img
        className={styles.image}
        src="/illustrations/team.avif"
        alt="team"
        width={300}
        height={450}
      />
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <img
            src="/illustrations/avatar.avif"
            alt="avatar"
            height={56}
            width={56}
            className={styles.avatar}
          />
          <div className={styles.cardTexts}>
            <span className={styles.cardTitle}>
              Jane Doe, <span>Founder</span>
            </span>
            <p className={styles.cardDescription}>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.two}>
      <span className={styles.caption}>About Company</span>
      <h3 className={styles.title}>
        We Are Business Consultinh & Credit Repair Experts
      </h3>
      <p className={styles.description}>
        <span>
          At We Are Business Consulting & Credit Repair Experts, we are
          passionate about providing innovative and expert business solutions in
          credit repair.
        </span>
        <span>
          With years of experience in the industry, we have advised numerous
          businesses and individuals to overcome financial challenges and regain
          credit stability.
        </span>
      </p>
      <div className={styles.buttons}>
        <button
          className={`${styles.button}  ${styles.largeButton}  ${styles.secondaryButton} ${styles.secondaryIcon}`}
        >
          Learn more
          <ArrowUpRight />
        </button>
        <button
          className={`${styles.button}  ${styles.largeButton} ${styles.transparentButton}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z"></path>
          </svg>
          Intro video
        </button>
      </div>
    </div>
  </div>
);
