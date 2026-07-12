export const SITE_NAME = 'CardSense: Sports Card Scanner';
export const SITE_SHORT = 'CardSense';
export const SITE_URL = 'https://scansportscards.com';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6757801294';
export const DEVELOPER = 'Patrick van der Ploeg';

export interface FaqEntry {
  q: string;
  a: string; // plain-text answer, also rendered as HTML paragraphs split on \n\n
}

export function faqSchema(faqs: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    image: `${SITE_URL}/og${opts.path}.png`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@type': 'Organization', name: SITE_SHORT, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_SHORT, url: SITE_URL },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  operatingSystem: 'iOS',
  applicationCategory: 'SportsApplication',
  description:
    'CardSense identifies any sports card from a photo and shows its estimated market value based on recent eBay sales. Supports baseball, basketball, football, hockey, and soccer cards.',
  url: SITE_URL,
  image: `${SITE_URL}/og/home.png`,
  installUrl: APP_STORE_URL,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: { '@type': 'Person', name: DEVELOPER },
};
