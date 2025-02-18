import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'], // Specifies the font weights to be used
  subsets: ['latin'], // Specifies the subset of characters to include (in this case, Latin characters)
});
