export type ServiceHeroSection = {
  _id: string;
  type: "service-hero";
  content: {
    headline: { text?: string; type: string }[];
    description: string;
    videoUrl: string;
  };
  order: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ServiceStatsSection = {
  _id: string;
  type: "service-stats";
  content: {
    items: {
      label: string;
      value: number;
      color: string;
      suffix: string;
    }[];
  };
  order: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ServiceBasicFeaturesSection = {
  _id: string;
  type: "service-basic-features";
  content: {
    headline: string;
    description: string;
    items: {
      icon: string;
      title: string;
      description: string;
      button: {
        label: string;
        href: string;
      };
    }[];
  };
  order: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ServiceSection =
  | ServiceHeroSection
  | ServiceStatsSection
  | ServiceBasicFeaturesSection;

export type ServicePage = {
  _id: string;
  name: string;
  slug: string;
  sections: ServiceSection[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
