import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],  // Include regular and bold weights
    subsets: ['latin'],      // Only include Latin character sets
  });