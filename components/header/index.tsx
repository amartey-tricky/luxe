"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { NavigationMenu } from './NavigationMenu';
import { MobileMenu } from './MobileMenu';
import { leftNavItems, rightNavItems } from './navigation-items';
import styles from './index.module.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu items={leftNavItems} />
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={styles.logoContainer}>
              <Image
                src="https://utfs.io/f/NLBok024UocESdVltPx3Vtj2QJpluUD91egMziIZY4NTXGbc"
                alt="Clinic Logo"
                width={180}
                height={60}
                className={styles.logo}
                priority
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu items={rightNavItems} />
            <Link href="https://forms.gle/QawgPCbYKHgQAzKA6">
              <Button
                size="lg"
                className={styles.appointmentButton}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.menuButton}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        navItems={[...leftNavItems, ...rightNavItems]}
      />
    </header>
  );
}
