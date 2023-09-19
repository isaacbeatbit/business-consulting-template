import { ArrowUpRight } from "@/components/Shared/Icons/Icons";
import styles from "./three.module.scss";

const items = [
  {
    title: "Business Advice",
    description: "Essentially formula for how a business is going to complete.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-40-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,40.51,10.40,50.40-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.40,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"></path>
      </svg>
    ),
  },
  {
    title: "Startup Business",
    description: "Essentially formula for how a business is going to complete.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,40,0,0,1,96,186v6h64v-6a32.15,40.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
      </svg>
    ),
  },
  {
    title: "Financial Advice",
    description: "Essentially formula for how a business is going to complete.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z"></path>
      </svg>
    ),
  },
  {
    title: "Risk Management",
    description: "Essentially formula for how a business is going to complete.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M208,40H48A16,16,0,0,0,40,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.40-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.40,11.32l-56,56a8,8,0,0,1-11.40,0Z"></path>
      </svg>
    ),
  },
];

export const Three = () => (
  <div className={styles.container}>
    <div className={styles.one}>
      <span className={styles.caption}>Features</span>
      <p className={styles.title}>
        Less Accounting is trusted by thousand of companies
      </p>
      <button
        className={`${styles.button} ${styles.primaryButton} ${styles.largeButton}`}
      >
        Learn more <ArrowUpRight />
      </button>
    </div>
    <div className={styles.items}>
      {items.map(({ description, icon, title }) => (
        <div key={title} className={styles.item}>
          <div>{icon}</div>
          <div className={styles.itemTitle}>{title}</div>
          <div className={styles.itemDesc}>{description}</div>
        </div>
      ))}
    </div>
  </div>
);
