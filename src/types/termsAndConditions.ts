// types/termsAndConditions.ts

export interface TermsAndConditions {
  name: string;
  slug: string;
  sections: TermsSection[];
}

export type TermsSection =
  | {
      type: "terms-and-conditions-0";
      content: SectionIntro;
      order: number;
    }
  | {
      type:
        | "terms-and-conditions-1"
        | "terms-and-conditions-2"
        | "terms-and-conditions-3"
        | "terms-and-conditions-4"
        | "terms-and-conditions-5"
        | "terms-and-conditions-6";
      content: SectionWithListAndContact;
      order: number;
    }
  | {
      type:
        | "terms-and-conditions-7"
        | "terms-and-conditions-8"
        | "terms-and-conditions-9";
      content: SectionSimple;
      order: number;
    }
  | {
      type: "terms-and-conditions-10";
      content: SectionContact;
      order: number;
    };

// Content types
export interface SectionIntro {
  effectiveDate: string;
  company: string;
  website: string;
  contactEmail: string;
}

export interface SectionWithListAndContact {
  title: string;
  description?: string;
  items: string[];
  contact?: string;
}

export interface SectionSimple {
  title: string;
  description: string;
}

export interface SectionContact {
  title: string;
  description: string;
  company: string;
  email: string;
  website: string;
}
