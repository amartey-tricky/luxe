import styles from './styles.module.css';
import Link from 'next/link';

export function FooterBottom() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className={styles.footerBottom}>
      <p className={styles.copyright}>
        © {currentYear} Luxe Clinic. All rights reserved.
      </p>
      <p className={styles.attribution}>
        Designed by <Link href="https://tricky-tau.vercel.app/" className="underline text-blue-500">Patrick Annang</Link>
      </p>
    </div>
  );
}
