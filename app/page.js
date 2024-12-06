// import Image from "next/image";
import styles from "./page.module.css";

export const metadata={
  title: "Home page",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>hello lama</h1>
    </div>
  );
}
