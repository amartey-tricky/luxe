import { AestheticGrid } from "./aethetic-grid";
import { AestheticHero } from "./aesthetic-hero";
import { AestheticBenefits } from "./aethetic-benefits";
import styles from "./index.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <AestheticHero />
      <AestheticGrid />
      <AestheticBenefits />
    </main>
  )
}
