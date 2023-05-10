// These styles apply to every route in the application
import '../../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
 

export const metadata = {
  title: 'My Page Title',
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <Head>
        <title>My page title</title>
      </Head>
      <body className="bg-white w-screen h-screen">
        {children}
      </body>
    </html>
  );

}