"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import styles from './index.module.css';

interface NavItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavItem[];
}

export function NavigationMenu({ items }: NavigationMenuProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-8">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-base font-medium transition-colors duration-200',
            pathname === item.href
              ? 'text-purple-600'
              : 'text-gray-600 hover:text-purple-600',
            styles.navItem
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
