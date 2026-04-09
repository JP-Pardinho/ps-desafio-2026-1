import styles from "./_components/home.module.css";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Sections from "./_components/Sections";

export default function HomePage() {
  return (
    <div className={styles.body}>
      <Navbar />
      <main className={styles.grid}>
        <Hero />
        <Sections />
      </main>
    </div>
  );
}
