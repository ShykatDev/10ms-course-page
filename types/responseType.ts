// Common types
export const sectionTypes = [
  "instructors",
  "features",
  "pointers",
  "feature_explanations",
  "about",
] as const;

export type SectionType = (typeof sectionTypes)[number];

export type Instructor = {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
};

export type Feature = {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
};

export type Pointer = {
  color: string;
  icon: string;
  id: string;
  text: string;
};

export type Exclusive = {
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
  checklist: string[];
};

export type Details = {
  description: string;
  icon: string;
  id: string;
  title: string;
};

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

export interface FeaturesSection extends CommonSection {
  type: "features";
  values: Feature[];
}

export interface PointersSection extends CommonSection {
  type: "pointers";
  values: Pointer[];
}

export interface FeatureExplanationsSection extends CommonSection {
  type: "feature_explanations";
  values: Exclusive[];
}

export interface AboutSection extends CommonSection {
  type: "about";
  values: Details[];
}

export type Section =
  | InstructorsSection
  | FeaturesSection
  | PointersSection
  | FeatureExplanationsSection
  | AboutSection;

export type Medium = {
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
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
