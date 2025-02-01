"use client";

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import styles from './index.module.css';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
}

export function MobileMenu({ isOpen, navItems }: MobileMenuProps) {
  return (
    <div
      className={cn(
        'lg:hidden',
        styles.mobileMenu,
        isOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed
      )}
    >
      <div className="px-4 pt-2 pb-6 space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-md transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
        <Link href="https://cal.com/luxe-clinic-5ttd8o/luxe-appointment">
          <Button className="w-full mt-4" size="lg"
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
}
