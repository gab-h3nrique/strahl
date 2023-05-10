// These styles apply to every route in the application
// import '../../styles/globals.css';
import Head from 'next/head';
import Header from '../../components/Header';
 

export const metadata = {
  title: 'My Page Title',
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
    
      <Header></Header>

      {children}

    </>
  );

}