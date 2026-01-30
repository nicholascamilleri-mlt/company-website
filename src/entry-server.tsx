import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import type { BrandingConfig } from './config/branding';

export const render = (url: string, branding: BrandingConfig) =>
  renderToString(
    <StaticRouter location={url}>
      <App initialBranding={branding} />
    </StaticRouter>
  );
