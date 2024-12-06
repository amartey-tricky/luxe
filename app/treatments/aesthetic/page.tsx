import { AestheticGrid } from "./aethetic-grid";
import { AestheticHero } from "./aesthetic-hero";
import styles from "./index.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <AestheticHero />
      <AestheticGrid />
    </main>
  )
}
