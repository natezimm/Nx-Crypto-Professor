import './global.css';

export const metadata = {
  title: 'Crypto Professor',
  description: 'Ask me anything about crypto.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
