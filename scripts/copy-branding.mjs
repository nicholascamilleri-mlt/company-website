import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const source = resolve(root, 'branding.json');
const destination = resolve(root, 'dist', 'branding.json');

await mkdir(dirname(destination), { recursive: true });
await copyFile(source, destination);
