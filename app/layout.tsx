import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}>
          {children}
        <footer className='py10 flex justify-center items-center'>
          Hecho con ❤ por Vercel
        </footer>
      </body>
    </html>
  );
}
