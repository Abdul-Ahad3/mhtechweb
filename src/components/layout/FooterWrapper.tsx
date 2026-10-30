'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer'; // Your existing Server Component

export default function FooterWrapper() {
  const pathname = usePathname();

  // This will match /projects/my-project-1, /projects/anything-else, etc.
  const isProjectPage = pathname?.startsWith('/projects/');

  if (isProjectPage) {
    return null;
  }

  return <Footer />;
}