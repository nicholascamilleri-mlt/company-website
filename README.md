# TekNLabs Website

A modern, responsive website for TekNLabs built with React, Vite, and TypeScript.

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

This repository includes a GitHub Actions workflow that builds the Vite site and deploys the `dist/` output to S3, then invalidates CloudFront.

### Required GitHub Secrets

Configure the following repository secrets before deploying:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_S3_BUCKET`
- `CLOUDFRONT_ID`

### Deployment Workflow

The workflow performs these steps:

1. Checkout the repository.
2. Install Node 18 dependencies.
3. Build the project with `npm run build`.
4. Configure AWS credentials from GitHub Secrets.
5. Sync `dist/` to the S3 bucket.
6. Invalidate the CloudFront distribution cache.

### How to Trigger Deployments

Push to the `main` or `master` branch and GitHub Actions will automatically run the deployment workflow once secrets are configured.

### Troubleshooting

- **Build failures**: Ensure `npm install` and `npm run build` succeed locally.
- **S3 sync errors**: Verify `AWS_S3_BUCKET` is set correctly and the IAM user has access to the bucket.
- **CloudFront invalidation errors**: Confirm `CLOUDFRONT_ID` is correct and the IAM user has permission to create invalidations.
- **Missing secrets**: Ensure all required secrets are set in the repository settings before pushing to `main` or `master`.

## Branding Configuration

Brand styling is loaded dynamically from the root `branding.json` file.

```json
{
  "companyName": "TekNLabs",
  "tagline": "Where Skills Meet Systems",
  "primaryColor": "#1F8FFF",
  "secondaryColor": "#0B1F33",
  "backgroundColor": "#F7F9FB",
  "textColor": "#1A1A1A",
  "accentColor": "#00C2B3",
  "logoText": "TekN"
}
```

Update the values in `branding.json` to change the site theme, brand name, and messaging.
