import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './styles.module.css';

const footerLinks = {
  services: [
    { label: "PRP Therapy", href: "/services/obstetrics" },
    { label: "Female Intimacy Rejuvination", href: "/services/gynecology" },
    { label: "Medical Weight Loss", href: "/services/cosmetic" },
    { label: "Laser Therapy", href: "/services/fertility" },
    { label: "IV Infusions", href: "/services/wellness" }
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Careers", href: "/careers" },
    { label: "News & Media", href: "/news" },
    { label: "Contact", href: "/contact" }
  ],
  resources: [
    { label: "FAQs", href: "/faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Support", href: "/support" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Cookie Policy", href: "/cookies" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" }
];

export function FooterMain() {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerContent}>
        {/* About Section */}
        <div className={styles.aboutSection}>
          <h3 className={styles.gradientText}>Luxe Clinic</h3>
          <p className={styles.aboutText}>
            Our collective ambition is to ensure excellence in all treatments and care service that we render,ensuring every patient feels supported in looking and feeling their very best.
          </p>
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Links Sections */}
        <div className={styles.linksGrid}>
          <div>
            <h4 className={styles.linkTitle}>Treatments</h4>
            <ul className={styles.linkList}>
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.linkTitle}>Company</h4>
            <ul className={styles.linkList}>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.linkTitle}>Resources</h4>
            <ul className={styles.linkList}>
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.linkTitle}>Legal</h4>
            <ul className={styles.linkList}>
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
