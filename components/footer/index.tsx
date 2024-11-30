import { FooterTop } from './FooterTop';
import { FooterMain } from './FooterMain';
import { FooterBottom } from './FooterBottom';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FooterTop />
        <FooterMain />
        <FooterBottom />
      </div>
    </footer>
  );
}
