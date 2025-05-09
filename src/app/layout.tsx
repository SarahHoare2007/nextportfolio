import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";
import 'photoswipe/dist/photoswipe.css';
import "./globals.css";
import Navbar from '../components/navbar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/global/theme';
<link rel="stylesheet" href="https://use.typekit.net/dpt4bai.css"></link>

const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Sarah Hoare portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            <div className="main-wrapper">
              {children}

              {/* remove footer from layout and add it to each page individually.*/}
            </div>

          </ThemeProvider>
        </AppRouterCacheProvider></body>
    </html>
  );
}
