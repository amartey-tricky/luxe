import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import styles from './styles.module.css';

const contactInfo = [
  {
    icon: Phone,
    label: "24/7 Emergency",
    value: "(555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@modernclinic.com",
    href: "mailto:contact@modernclinic.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "123 Medical Center Dr, NY",
    href: "https://maps.google.com"
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon-Fri: 8AM-7PM",
    href: "/contact"
  }
];

export function FooterTop() {
  return (
    <div className={styles.footerTop}>
      {contactInfo.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={styles.contactItem}
          >
            <div className={styles.iconWrapper}>
              <Icon className={styles.icon} />
            </div>
            <div>
              <p className={styles.contactLabel}>{item.label}</p>
              <p className={styles.contactValue}>{item.value}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
