import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./four.module.scss";
import Image from "next/image";

export const Four = () => (
  <div className={styles.container}>
    <Image
      className={styles.image}
      src="/illustrations/team.png"
      alt="team"
      width={288}
      height={288}
    />
    <div className={styles.two}>
      <span className={styles.caption}>Acerca de la compañia</span>
      <h2 className={styles.title}>
        Somos expertos en consultoría de negocio y desarrolo de proyectos
      </h2>
      <p className={styles.description}>
        <span>
          Somos líderes en consultoría de negocio y desarrollo de proyectos,
          ofreciendo soluciones a medida para impulsar el éxito.
        </span>
        <span>
          Nuestro equipo de expertos brinda asesoramiento estratégico respaldado
          por un historial probado de éxitos en diversas industrias.
        </span>
      </p>
      <div className={styles.buttons}>
        <button
          className={`${styles.button}  ${styles.largeButton}  ${styles.secondaryButton} ${styles.secondaryIcon}`}
        >
          Saber más
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
          Ver video
        </button>
      </div>
    </div>
  </div>
);
