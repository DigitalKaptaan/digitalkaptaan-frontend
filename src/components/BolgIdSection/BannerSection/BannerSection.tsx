import React from 'react';
import Id from '@/styles/id.module.css'


const BannerSection = () => {
  return (
    <div>
      <section className={Id.hero_banner}>
        <div className={Id.hero_content}>
          <h1>10+ Best Hosting for WordPress</h1>
          <div className={Id.meta_info}>
            <span>📅 August 31, 2022</span>
            <span>👤 Ter@Admin</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerSection
