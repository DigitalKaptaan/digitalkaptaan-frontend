export interface PrivacyPolicySectionBase {
  _id: string;
  type: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PrivacyPolicy0 extends PrivacyPolicySectionBase {
  type: "privacy-policy-0";
  content: {
    effectiveDate: string;
    company: string;
    website: string;
    contactEmail: string;
  };
}

export interface PrivacyPolicy1 extends PrivacyPolicySectionBase {
  type: "privacy-policy-1";
  content: {
    title: string;
    description: string;
    personalInformation: {
      title: string;
      description: string;
      items: string[];
    };
    nonPersonalInformation: {
      title: string;
      description: string;
      items: string[];
    };
  };
}

export interface SectionWithList extends PrivacyPolicySectionBase {
  type: string;
  content: {
    title: string;
    description: string;
    items: string[];
    contact?: string;
  };
}

export interface SectionPlainText extends PrivacyPolicySectionBase {
  type: string;
  content: {
    title: string;
    description: string;
  };
}

export interface ContactSection extends PrivacyPolicySectionBase {
  type: "privacy-policy-10";
  content: {
    title: string;
    company: string;
    email: string;
    website: string;
  };
}

export type PrivacyPolicySection =
  | PrivacyPolicy0
  | PrivacyPolicy1
  | SectionWithList
  | SectionPlainText
  | ContactSection;

export interface PrivacyPolicyData {
  _id: string;
  name: string;
  slug: string;
  sections: PrivacyPolicySection[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
