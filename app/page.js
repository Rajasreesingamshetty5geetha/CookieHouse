'use client'
import Header from '@/app/components/Header';
import Herosection from './components/Herosection';
import Imagefile from './components/Imagefile';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <Herosection/>
      <Imagefile/>
      <Footer/>
    </div>
  );
}

