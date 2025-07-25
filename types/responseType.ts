// Common types
export type SectionType =
  | "instructors"
  | "features"
  | "pointers"
  | "feature_explanations"
  | "about";

export type Instructor = {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
};

export type Feature = { title: string; description: string };
export type Pointer = { title: string; icon: string };
export type FeatureExplanation = { title: string; content: string };

interface CommonSection {
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
}

export interface InstructorsSection extends CommonSection {
  type: "instructors";
  values: Instructor[];
}

// export type InstructorsSection = {
//   type: "instructors";
//   value: Instructor[];
// };

export type FeaturesSection = {
  type: "features";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  value: Feature[];
};

export type PointersSection = {
  type: "pointers";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  value: Pointer[];
};

export type FeatureExplanationsSection = {
  type: "feature_explanations";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  value: FeatureExplanation[];
};

export type AboutSection = {
  type: "about";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  value: string;
};

export type Section =
  | InstructorsSection
  | FeaturesSection
  | PointersSection
  | FeatureExplanationsSection
  | AboutSection;

export type Medium = {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
};

export type Checklist = {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
};

export type CtaText = {
  name: string;
  value: string;
};

export type Seo = {
  defaultMeta: {
    content: string;
    type: string;
    value: string;
  }[];
  description: string;
  keywords: string[];
  schema: {
    meta_name: string;
    meta_value: string;
    type: string;
  }[];
  title: string;
};

export type ResponseType = {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
};
