export type BrandingConfig = {
  companyName: string;
  tagline: string;
  phoneNumber: string;
  phoneHref: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  logoImage: string;
};

const DEFAULT_BRANDING: BrandingConfig = {
  companyName: 'TekNiLabs',
  tagline: 'Systems that automate & teams that grow',
  phoneNumber: '020 4569 0550',
  phoneHref: 'tel:+442045690550',
  primaryColor: '#1F8FFF',
  secondaryColor: '#0B1F33',
  backgroundColor: '#F7F9FB',
  textColor: '#1A1A1A',
  accentColor: '#1F8FFF',
  logoImage: 'TekNiLabs.png'
};

export const loadBranding = async (): Promise<BrandingConfig> => {
  const response = await fetch(`${import.meta.env.BASE_URL}branding.json`, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Unable to load branding configuration.');
  }

  const loadedBranding = (await response.json()) as Partial<BrandingConfig>;

  return {
    ...DEFAULT_BRANDING,
    ...loadedBranding,
    phoneNumber: loadedBranding.phoneNumber || DEFAULT_BRANDING.phoneNumber,
    phoneHref: loadedBranding.phoneHref || DEFAULT_BRANDING.phoneHref
  };
};
