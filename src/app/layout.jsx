import { Poppins } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';

const poppins = Poppins({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Clinic Dashboard',
  description: 'Dashboard Fictício de uma clínica',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <AuthProvider>
      <body className={poppins.className}>
        {children}
      </body>
      </AuthProvider>
    </html>
  );
}
