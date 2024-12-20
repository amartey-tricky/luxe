import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import styles from './styles.module.css';

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "0302 980 050",
    href: "tel:+2333029880050"
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "luxeclinic@gmail.com",
    href: "mailto:luxeclinic@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kalpohini Estates, Tamale, Ghana",
    href: "https://maps.app.goo.gl/Z9SHcp2LWyrCT4X96"
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
