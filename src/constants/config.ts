const GITHUB_PAGES_URL = 'https://iimorihonten.github.io';
export const BASE_PATH = import.meta.env.MODE === 'development' 
  ? '.' 
  : `${GITHUB_PAGES_URL}/AizuSazaedoHP`;

export const getImagePath = (path: string) => {
  return `${BASE_PATH}${path}`;
};
