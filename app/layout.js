import { Forum, Onest } from 'next/font/google';
import './globals.css';

const forum = Forum({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
  variable: '--font-forum',
  display: 'swap',
});

const onest = Onest({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-onest',
  display: 'swap',
});

export const metadata = {
  title: 'М/Ж — Мужское и женское',
  description:
    'Сообщество в Discord: голоса в эфире, общий стол и вечера, которые заканчиваются позже, чем планировалось.',
};

export const viewport = {
  themeColor: '#070B14',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${forum.variable} ${onest.variable}`}>
      <body>{children}</body>
    </html>
  );
}
