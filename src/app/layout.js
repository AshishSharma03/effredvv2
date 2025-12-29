import { Geist, Geist_Mono, Public_Sans } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import localFont from "next/font/local";
import Script from "next/script";
const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700","800", "900"],
});

const myanmarKhyay = localFont({
  src: [
    {
      path: '../../public/fonts/Khyay-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: "--font-myanmar-khyay",
  display: 'swap',
});



export const metadata = {
  title: "Effred - Shape the Business with Effred",
  description: "Accelerate your business transformation with Effred's intelligent, scalable digital experiences. Explore our custom software, mobile apps, and automation solutions today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${myanmarKhyay.variable}`}>
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
          strategy="afterInteractive"
        />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
