import { APP, home, homeFaqs } from '../data';
import type { FaqEntry } from '../data';

export type { FaqEntry };

export const SITE_NAME = APP.name;
export const SITE_SHORT = APP.shortName;
export const SITE_URL = APP.siteUrl;
export const APP_STORE_URL = APP.appStoreUrl;
export const DEVELOPER = APP.developer;
export const APP_STORE_ID = APP.appStoreId;

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
  image?: string;
}) {
  const image = opts.image ?? `${SITE_URL}/og${opts.path}.png`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    image,
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

export function softwareAppSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APP.name,
    operatingSystem: APP.operatingSystem,
    applicationCategory: 'SportsApplication',
    description: home.description,
    url: SITE_URL,
    image: `${SITE_URL}${home.ogImage}`,
    installUrl: APP.appStoreUrl,
    offers: {
      '@type': 'Offer',
      price: APP.price,
      priceCurrency: APP.priceCurrency,
    },
    author: { '@type': 'Person', name: APP.developer },
  };
  return schema;
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: APP.siteName,
    url: SITE_URL,
  };
}

export function homeJsonLd() {
  return [softwareAppSchema(), websiteSchema(), faqSchema(homeFaqs)];
}
