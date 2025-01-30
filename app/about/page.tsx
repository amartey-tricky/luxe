import { Award, Heart, Users } from "lucide-react";
import { Doctors } from "./doctors";
import styles from "./index.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>About Us</h1>
      {/* Mission Statement */}
      <section className={styles.missionStatement}>
        <h2 className={styles.missionStatementTitle}>Our Mission</h2>
        <p className={styles.missionStatementDescription}>
         TO PROVIDE QUALITY PERSONALIZED HOLISTIC, ETHICAL, SAFE AND PROFESSIONAL EVIDENCE-BASED MEDICAL SOLUTIONS FOR ALL, BUILDING CONFIDENCE AND EMPOWERMENT TO ALL, HEALING MIND BODY AND SOUL.
        </p>
      </section>
         <section className={styles.missionStatement}>
        <h2 className={styles.missionStatementTitle}>Our Vision</h2>
        <p className={styles.missionStatementDescription}>
         TO BE THE CLINIC OF CHOICE BY ALL STANDARDS WITH CONSISTENT LEVEL OF QUALITY SERVICES, TRANSFORMING LIVES THROUGH CONTINUOUS INNOVATIVE CLINICAL MODALITIES. TO BE THE VALUED PARTNER AND CREATORS OF POSITIVE CHANGE WITH GLOBAL RECOGNITION
        </p>
      </section>
      {/* Core Values */}
      <section className={styles.coreValues}>
        <h2 className={styles.coreValuesTitle}>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <article className={styles.valuesCard}>
            <Award className={styles.valueIcon} />
            <h3 className={styles.valueTitle}>Excellence</h3>
            <p className={styles.valueDescription}>We strive for excellence in all our services, using state-of-the-art technology and advanced techniques.</p>
          </article>
          <article className={styles.valuesCard}>
            <Heart className={styles.valueIcon} />
            <h3 className={styles.valueTitle}>Compassion</h3>
            <p className={styles.valueDescription}>We provide caring, empathetic service, putting our patients' comfort and well-being first.</p>
          </article>
          <article className={styles.valuesCard}>
            <Users className={styles.valueIcon} />
            <h3 className={styles.valueTitle}>Integrity</h3>
            <p className={styles.ValueDescription}>We uphold the highest ethical standards, ensuring trust and transparency in all our practices.</p>
          </article>
        </div>
      </section>
        {/* Our Story */}
        <section className={styles.story}>
          <h2 className={styles.storyTitle}>Our Story</h2>
          <div className={styles.storyDescription}>
            <p className={styles.storyItem}>We remember the day we first opened our doors in Accra, driven by a passion to provide world-class dermatology care to the community. As Luxe Clinic Ghana, we were determined to bridge the gap in skincare services, offering personalized attention and cutting-edge treatments to address the unique skin concerns of each patient.</p>
            <p className={styles.storyItem}>Over the years, we've had the privilege of growing into a state-of-the-art clinic, boasting a team of expert dermatologists and advanced technologies. Our journey has been marked by countless success stories – patients who've regained their confidence, overcome skin conditions, and achieved radiant, healthy-looking skin. These triumphs fuel our mission to continuously innovate and improve, ensuring that every patient receives exceptional care.</p>
            <p className={styles.storyItem}>Today, we stand proud as a leading dermatology clinic in Ghana, committed to delivering personalized, results-driven treatments that exceed expectations. At Luxe Clinic Ghana, we remain dedicated to empowering individuals to take control of their skin health, providing a haven of expertise, care, and compassion. We look forward to continuing our journey, transforming lives one skin story at a time.,</p>
          </div>
        </section>
        <Doctors />
      </div>
    </main>
  )
}
