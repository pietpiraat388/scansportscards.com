export interface FaqEntry {
  q: string;
  /** Plain-text answer. JSON-LD and visible copy share this string. */
  a: string;
  /** HTML-only. Not included in FAQPage schema. */
  learnMore?: { href: string; label: string };
}

export interface FeatureImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface GuideSection {
  h2: string;
  paras: string[];
  list?: { ordered?: boolean; items: string[] };
  table?: { headers: string[]; rows: string[][] };
  cta?: { title: string; text: string };
  figure?: { shot: number; caption: string };
}

export interface HowToBlock {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}

export interface Guide {
  slug: string;
  path: string;
  tag: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  lede: string;
  directAnswer: string;
  cardTitle: string;
  cardText: string;
  featuredOnHome: boolean;
  featureImage: FeatureImage;
  howto?: HowToBlock;
  sections: GuideSection[];
  faqs: FaqEntry[];
  related: string[];
  sources: { name: string; url: string }[];
  datePublished: string;
  dateModified: string;
}

export interface Screenshot {
  id: number;
  /** Matches `src/assets/screenshot-N.png` (filename order, not App Store display order). */
  file: `screenshot-${number}.png`;
  alt: string;
  caption: string;
}
