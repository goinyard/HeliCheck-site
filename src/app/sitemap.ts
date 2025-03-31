import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://helicheck.com';
  
  // Main routes
  const routes = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service routes
  const serviceRoutes = [
    '/services/helicheck-em',
    '/services/sam',
    '/services/samson',
    '/services/borehole',
    '/services/ip',
    '/services/surface-em',
    '/services/environmental',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
} 