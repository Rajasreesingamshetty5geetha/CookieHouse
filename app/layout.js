import {Poppins} from 'next/font/google'
import { Roboto } from 'next/font/google';
import { Playwrite_IN } from 'next/font/google';
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})
const cursive = Playwrite_IN({
  subsets: ['latin'],
  weight: ['100', '300', '400'],
  variable: '--font-cursive',
})

export const metadata = {
  title: "CookieHouse",
  description: "Delicious Cookies in your house",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${cursive.variable} --font-poppins --font-roboto --font-cursive antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
