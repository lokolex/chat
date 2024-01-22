import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';

const jost = Jost({ subsets: ['latin'], preload: true });

export const metadata: Metadata = {
  title: 'Chat',
  description: 'Test assignment for the position of frontend developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
