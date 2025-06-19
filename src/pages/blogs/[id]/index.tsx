import BannerSection from '@/components/BolgIdSection/BannerSection';
import BlogDetails from '@/components/BolgIdSection/BlogDetails';
import BlogForm from '@/components/BolgIdSection/BlogForm';
import BlogQuote from '@/components/BolgIdSection/BlogQuote';
import React from 'react';

const index = () => {
  return (
    <div>
      <BannerSection />
      <BlogDetails />
      <BlogQuote />
      <BlogForm />
    </div>
  )
}

export default index
