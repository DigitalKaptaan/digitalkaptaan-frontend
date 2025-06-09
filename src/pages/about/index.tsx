import React from 'react';
import { Footer } from '@/layout';
import AboutHero from '@/components/AboutSection/AboutHero';
import AboutDetails from '@/components/AboutSection/AboutDetails';
import AboutScroller from '@/components/AboutSection/AboutScroller';
import AboutMembor from '@/components/AboutSection/AboutMembor';
import AboutForm from '@/components/AboutSection/AboutForm';

const index = () => {
  return (
   <>
   
   <AboutHero />
   <AboutDetails />
   <AboutScroller />
   <AboutMembor />
   <AboutForm />

   <Footer />
   </>
  )
}

export default index
