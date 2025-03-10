import { Phone, Mail, MapPin, Clock, MessageCircleMore } from 'lucide-react';
import Link from 'next/link';
import styles from './styles.module.css';

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "0303 980 050",
    href: "tel:+2333039880050"
  },
  {
    icon: MessageCircleMore,
    label: "Whatsapp",
    value: "0303 980 050",
    href: "https://wa.me/233303980050"
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "luxeclinicgh@gmail.com",
    href: "mailto:luxeclinicgh@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kalpohin Estates, Tamale, Ghana",
    href: "https://maps.app.goo.gl/Z88H5NvbpMQjxeMw7?g_st=com.google.maps.preview.copy"
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
