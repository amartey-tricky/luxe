"use client";

import { AestheticCard } from "./aethetic-card";
import { treatments } from "./aethetics-data";
import styles from "./index.module.css";

export function AestheticGrid() {
  return (
    <section className={styles.aetheticGrid} id="aethetic">
      <div className={styles.gridContainer}>
        <h2 className={styles.gridTitle}>Our Aesthetic Treatments</h2>
        <div className={styles.gridCards}>
          {treatments.map((treatment) => (
            <AestheticCard
              key={treatment.name}
              icon={treatment.icon}
              title={treatment.name}
              description={treatment.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
