import { useEffect } from 'react';

/**
 * SEOHead - Sets page-level meta tags dynamically
 * Usage: <SEOHead title="..." description="..." keywords="..." image="..." />
 */
export default function SEOHead({
  title,
  description,
  keywords,
  image = 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
  type = 'website',
  noindex = false,
}) {
  const siteName = '心靈假期 Mental Getaway';
  const siteUrl = 'https://mentalgetaway-561934f1.base44.app';
  const fullTitle = title ? `${siteName} | ${title}` : siteName;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Helper to set or create a meta tag
    const setMeta = (selector, attr, value) => {
      if (!value) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = attr.split('=');
        el.setAttribute(attrName.trim(), attrVal?.trim() || '');
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Standard meta
    setMeta('meta[name="description"]', 'name=description', description || '好好生活，找回心靈寧靜的綠洲。心靈假期提供身心靈退修旅程，讓您在大自然中重拾內在平靜。');
    setMeta('meta[name="keywords"]', 'name=keywords', keywords || '心靈假期, 身心靈, 退修, 靜心, 自然療癒, Mental Getaway, retreat, mindfulness');
    setMeta('meta[name="robots"]', 'name=robots', noindex ? 'noindex,nofollow' : 'index,follow');

    // Open Graph
    setMeta('meta[property="og:title"]', 'property=og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property=og:description', description || '好好生活，找回心靈寧靜的綠洲。');
    setMeta('meta[property="og:image"]', 'property=og:image', image);
    setMeta('meta[property="og:type"]', 'property=og:type', type);
    setMeta('meta[property="og:site_name"]', 'property=og:site_name', siteName);

    // Twitter Card
    setMeta('meta[name="twitter:card"]', 'name=twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', description || '好好生活，找回心靈寧靜的綠洲。');
    setMeta('meta[name="twitter:image"]', 'name=twitter:image', image);
  }, [fullTitle, description, keywords, image, type, noindex]);

  return null;
}