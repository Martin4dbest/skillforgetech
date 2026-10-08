import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Core1 Enterprise Solution | Technology, Products & Solutions',
  description:
    'Core1 Enterprise Solution builds practical digital products and technology systems, including CoreOne, a connected school management platform.',
  keywords: [
    'Core1 Enterprise Solution',
    'CoreOne',
    'school management system',
    'EdTech',
    'software solutions',
    'digital transformation',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
