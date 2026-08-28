import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SkillForge Technologies & Solutions Ltd | Building What Moves Tomorrow',
  description:
    'SkillForge Technologies & Solutions Ltd builds modern digital products and technology solutions, led by CoreOne — our flagship education technology platform.',
  keywords: ['SkillForge', 'CoreOne', 'education technology', 'school management', 'software solutions'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
