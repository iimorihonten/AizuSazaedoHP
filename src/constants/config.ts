export const getImagePath = (path: string) => {
  // Use Vite's BASE_URL (set by vite.config.ts base option) which correctly
  // resolves to '/' for custom domain (sazaedo.jp) or '/AizuSazaedoHP/' otherwise.
  // This ensures images work in both GitHub Pages custom domain and subdir deploys.
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};
