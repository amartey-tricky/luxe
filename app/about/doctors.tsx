import Image from "next/image";
import styles from "./index.module.css";

const doctors = [
  {
    name: "Dr. Patience M. Konona-Ang",
    image: "",
    title: "Founder & Lead Physician",
    description: "Dr.Konona-Ang boasts an impressive credentials portfolio, featuring a fellowship in Aesthetic Medicine and Nano Fat Grafting from the Swiss Academy of Cosmetic Dermatology and Aesthetic Medicine (SACDAM) and a certification in Aesthetic Medicine from the North American Board of Anti-Aging Medicine (NABAM), underscoring her commitment to delivering exceptional patient care."
  },
  {
    name: "Umar Ali Mohammed",
    image: "",
    title: "Nurse",
    description: ""
  },
  {
    name: "Dr. Abu Bakr",
    image: "",
    title: "Plastic Surgeon",
    description: "Description goes here"
  }
]

export function Doctors() {
  return (
    <section>
      <h2 className={styles.teamTitle}>Meet our Staff</h2>
      <div className={styles.doctorsGrid}>
        {doctors.map((doctor) => (
          <article key={doctor.name} className={styles.doctorCard}>
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={150}
              height={150}
              className={styles.doctorImage}
            />
            <h3 className={styles.doctorName}>{doctor.name}</h3>
            <p className={styles.doctorTitle}>{doctor.title}</p>
            <p className={styles.doctorDescription}>{doctor.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
