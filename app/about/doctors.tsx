import Image from "next/image";
import styles from "./index.module.css";

const doctors = [
  {
    name: "Dr. John Doe",
    image: "",
    title: "Founder & Lead Physician",
    description: "Description goes here"
  },
  {
    name: "Dr. Jane Doe",
    image: "",
    title: "Obstetrician & Gynecologist",
    description: "Description goes here"
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
      <h2 className={styles.teamTitle}>Meet our Doctors</h2>
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
