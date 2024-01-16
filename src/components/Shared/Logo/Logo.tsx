import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss";

export const MiniLogo = () => (
  <Link href="/" className={styles.miniLogo}>
    <Image src="/logo.svg" width={50} height={50} alt="logo" />
  </Link>
);

export const Logo = ({ extraClasses }: { extraClasses?: string }) => (
  <Link href="/" className={`${styles.logo} ${extraClasses}`}>
    <Image src="/logo.svg" width={50} height={50} alt="logo" />
    <span className={styles.logoTexts}>
      <span className={styles.logoTitle}>Progressiweb</span>
      <span className={styles.logoSubtitle}>Agencia web</span>
    </span>
  </Link>
);
