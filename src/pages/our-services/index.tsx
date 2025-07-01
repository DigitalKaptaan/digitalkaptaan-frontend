import React from 'react';
import { withMenuAndPageData } from '@/lib';
import { Feature, NumScroller, ServiceHero } from '@/components';

const index = () => {
  return (
    <main>
       <ServiceHero />
       <NumScroller />
       <Feature />
    </main>
  )
}

export default index

export const getServerSideProps = withMenuAndPageData("home", "home");
