export type BrandingConfig = {
  companyName: string;
  tagline: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  logoText: string;
};

export const loadBranding = async (): Promise<BrandingConfig> => {
  const response = await fetch(`${import.meta.env.BASE_URL}branding.json`);

  if (!response.ok) {
    throw new Error('Unable to load branding configuration.');
  }

  return (await response.json()) as BrandingConfig;
};
