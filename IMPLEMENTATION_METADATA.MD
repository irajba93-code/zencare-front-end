# Implementation Plan: Website Metadata Update

## Goal Description
Update the website's metadata to effectively represent the brand (ZenCare Physiotherapy), improving Search Engine Optimization (SEO) and social media link previews. The current metadata uses default Lovable values which need to be replaced with our own robust metadata, including a custom snapshot of the website.

## User Review Required
> [!IMPORTANT]
> The following items require user confirmation:
> 1. **Snapshot Image (`og-image.jpeg`/`opengraph-image.png`)**: I will need you to provide the snapshot of the website or allow me to take one when the project is running, to replace the Lovable placeholder.
> 2. **Website URL**: Please confirm the canonical URL for the website (e.g., `https://zencarephysio.com` or something else).
> 3. **Branding details**: Confirm the exact text for title and descriptions in the `Proposed Changes` below.

## Proposed Changes

### Root HTML Metadata
The changes will be applied directly to the root HTML document which houses the Single Page Application.

#### [MODIFY] index.html
We will replace the default Lovable metadata tags with robust, SEO-friendly ones tailored for ZenCare Physiotherapy.

**Standard Meta Tags:**
- `<title>`: "ZenCare Physiotherapy - Expert Care & Rehabilitation"
- `<meta name="description">`: "Professional physiotherapy services tailored to your needs. Book an appointment with ZenCare Physiotherapy to start your journey to recovery."
- `<meta name="author">`: "ZenCare Physiotherapy"
- `<link rel="canonical">`: The canonical URL for the website.

**Open Graph (Facebook / LinkedIn) Meta Tags:**
- `<meta property="og:title">`: "ZenCare Physiotherapy"
- `<meta property="og:description">`: "Professional physiotherapy services tailored to your needs. Start your journey to recovery today."
- `<meta property="og:type">`: "website"
- `<meta property="og:url">`: (Website URL)
- `<meta property="og:image">`: `/opengraph-image.png` (Our snapshot)
- `<meta property="og:site_name">`: "ZenCare Physiotherapy"

**Twitter Card Meta Tags:**
- `<meta name="twitter:card">`: "summary_large_image"
- `<meta name="twitter:site">`: "@ZenCarePhysio" (or leave blank if no Twitter)
- `<meta name="twitter:title">`: "ZenCare Physiotherapy"
- `<meta name="twitter:description">`: "Professional physiotherapy services tailored to your needs. Start your journey to recovery today."
- `<meta name="twitter:image">`: `/opengraph-image.png` (Our snapshot)

### Assets
Adding the new snapshot image to the public directory so it can be served correctly.

#### [NEW] public/opengraph-image.png
- This will be the actual snapshot image of the finalized website landing page, resolution should ideally be `1200x630` for optimal social media preview compatibility.

## Verification Plan

### Manual Verification
1. Inspect the DOM in the browser to ensure all `<head>` meta tags are present and populated with the correct values.
2. Load the application locally and navigate to the image URL (e.g., `http://localhost:5173/opengraph-image.png`) to ensure the snapshot is served correctly.
3. Use a tool like [MetaTags.io](https://metatags.io/) or the Facebook Sharing Debugger when the site is deployed to test social media previews.
