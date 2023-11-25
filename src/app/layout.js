import localFont from 'next/font/local';
import Header from '@/components/Header';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from '@/context/UserContext';

const estedad = localFont({
  src: './assets/font/Estedad-Regular.woff2',
  variable: '--font-estedad',
  display: 'swap',
});

export const metadata = {
  title: 'فایل ها',
  description: 'پنلی برای مدیریت فایل های خریدار و فروشنده',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={estedad.variable}>
      <body className="bg-[#eee]">
        <Toaster position="top-center" reverseOrder={false} />
        <UserProvider>
          <Header />
          <main className="min-h-screen p-8 max-w-screen-wide mx-auto">
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
