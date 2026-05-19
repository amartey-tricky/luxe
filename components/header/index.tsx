"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { NavigationMenu } from './NavigationMenu';
import { MobileMenu } from './MobileMenu';
import { leftNavItems, rightNavItems } from './navigation-items';
import styles from './index.module.css';
import { usePathname } from 'next/navigation';

export function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ticking = useRef(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking.current = false;
      });
    }
  }, []);

  useEffect(() => {
    // set initial state in case user lands mid-page
    setIsScrolled(typeof window !== 'undefined' ? window.scrollY > 20 : false);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key for accessibility
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 w-full z-50 transition-all duration-300',
        isScrolled ? styles.headerScrolled : styles.headerDefault,
        styles.header
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation (desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu items={leftNavItems} />
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Luxe Clinic homepage" className={styles.logoContainer}>
              <Image
                src="https://photos.google.com/album/AF1QipP_6SLT64XlIMPMtVwaDAmK6R6r4kOE0NtGwlcC/photo/AF1QipNtZADfL3Ds0Y5dmvuCd31kSiGCFkDf-RtRCz0u"
                alt="Luxe Clinic logo"
                width={180}
                height={60}
                className={styles.logo}
                priority
              />
            </Link>
          </div>

          {/* Right Navigation (desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu items={rightNavItems} />
            <a
              href="https://cal.com/luxe-clinic-gh/luxe-appointment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className={styles.appointmentButton}>
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={styles.menuButton}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} navItems={[...leftNavItems, ...rightNavItems]} />
    </header>
  );
}
