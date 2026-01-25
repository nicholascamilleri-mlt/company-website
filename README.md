# TekNiLabs Website

A modern, responsive website for TekNiLabs built with React, Vite, and TypeScript.

## Setup

```bash
npm install
```

## Local Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment (CI/CD)

This repository includes a GitHub Actions workflow that builds the Vite site and deploys the `dist/` output to Google Cloud Storage.

### Required GitHub Secrets

Configure the following repository secrets before deploying:

- `GCP_PROJECT_ID`
- `GCP_SA_KEY` (service account JSON key)
- `GCS_BUCKET`

### Deployment Workflow

The workflow performs these steps:

1. Checkout the repository.
2. Install Node 18 dependencies.
3. Build the project with `npm run build`.
4. Authenticate to Google Cloud with GitHub Secrets.
5. Sync `dist/` to the GCS bucket.

### How to Trigger Deployments

Push to the `main` or `master` branch and GitHub Actions will automatically run the deployment workflow once secrets are configured.

### Troubleshooting

- **Build failures**: Ensure `npm install` and `npm run build` succeed locally.
- **GCS sync errors**: Verify `GCS_BUCKET` is set correctly and the service account has access to the bucket.
- **Lockfile warnings**: If you add `package-lock.json` or `npm-shrinkwrap.json`, the workflow will use `npm ci` and enable dependency caching automatically.
- **Missing secrets**: Ensure all required secrets are set in the repository settings before pushing to `main` or `master`.

## Branding Configuration

Brand styling is loaded dynamically from the root `branding.json` file.

```json
{
  "companyName": "TekNiLabs",
  "tagline": "Where Skills Meet Systems",
  "primaryColor": "#1F8FFF",
  "secondaryColor": "#0B1F33",
  "backgroundColor": "#F7F9FB",
  "textColor": "#1A1A1A",
  "accentColor": "#00C2B3",
  "logoImage": "/TekNiLabs.png"
}
```

Update the values in `branding.json` to change the site theme, brand name, and messaging.
