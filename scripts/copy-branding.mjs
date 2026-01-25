import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const source = resolve(root, 'branding.json');
const destination = resolve(root, 'dist', 'branding.json');

await mkdir(dirname(destination), { recursive: true });
await copyFile(source, destination);

const branding = JSON.parse(await readFile(source, 'utf-8'));
const logoImage = typeof branding.logoImage === 'string' ? branding.logoImage : '';
const shouldCopyLogo =
  logoImage && !logoImage.startsWith('http') && !logoImage.startsWith('data:');

if (shouldCopyLogo) {
  const logoPath = logoImage.startsWith('/') ? logoImage.slice(1) : logoImage;
  const logoSource = resolve(root, logoPath);
  const logoDestination = resolve(root, 'dist', logoPath);

  await mkdir(dirname(logoDestination), { recursive: true });
  await copyFile(logoSource, logoDestination);
}
