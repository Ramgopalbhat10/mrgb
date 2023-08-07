import { ThemeProvider } from '@mrgb/ui-shared';
import './global.css';

export const metadata = {
  title: 'Welcome to blog',
  description: 'My personal website and blog where I write about software development and other things I find interesting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
