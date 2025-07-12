type HeroSection = {
  type: "hero";
  content: {
    headline: string;
    description: string;
    imageUrl: string;
    cta?: string;
    animationIcons: string[];
  };
};

type StatsSection = {
  type: "stats";
  content: {
    items: {
      label: string;
      value: number;
      color: string;
      suffix: string;
    }[];
  };
};

type FeaturesSection = {
  type: "features";
  content: {
    items: {
      title: string;
      description: string[];
      imageUrl: string;
      buttons?: {
        label: string;
        url: string;
      }[];
    }[];
  };
};

type ServiceCardsSection = {
  type: "serviceCards";
  content: {
    title: string;
    cards: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
};
type TrustedPartnersSection = {
  type: "trusted-partners";
  content: {
    headline1: string;
    headline2: string;
    headline3: string;

    items: string[];
  };
};
type BasicFeatures = {
  type: "basic-features";
  content: {
    headline: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: string;
      button: {
        label: string;
        href: string;
      };
    }[];
  };
};

type HomeSection =
  | HeroSection
  | StatsSection
  | FeaturesSection
  | ServiceCardsSection
  | TrustedPartnersSection
  | BasicFeatures;

type ExtendedSection = HomeSection & {
  _id: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// === Page Data Type ===

type PageData = {
  _id: string;
  name: string;
  slug: string;
  sections: ExtendedSection[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  latestBlogs: {
    _id: string;
    title: string;
    content: string;
    coverImage: string;
    status: string;
    meta?: {
      title?: string;
      description?: string;
      keywords?: string[];
    };
    createdAt: string;
    updatedAt: string;
    slug: string;
    __v: number;
  }[];
};

export type HomeProps = {
  metaData: {
    _id: string;
    page: string;
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  pageData: PageData;
  pageHasError: boolean;
};
