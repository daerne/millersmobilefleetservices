# Miller's Mobile Fleet Services Website

A production-oriented, responsive static marketing site for Miller's Mobile Fleet Services. It uses semantic HTML, modern CSS, and a small amount of vanilla JavaScript—no build tooling or framework is required.

## Run locally

Open `index.html` directly in a browser, or serve the directory with any static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before launch

The site intentionally does not invent business facts. Search for `PLACEHOLDER` and `TODO`, then:

1. Replace the phone, email, and service-area placeholders with verified details.
2. Add the final canonical URL and `og:url` metadata.
3. Connect the request form to an approved form endpoint or server-side handler. The current form displays a configuration notice and does not transmit data.
4. Confirm the listed service categories and vehicle types with the business owner.
5. Replace the SVG social preview with a PNG/JPG equivalent if the target social platforms require a raster image.

## Files

- `index.html` — page content, metadata, navigation, sections, and service form
- `styles.css` — design system, responsive layouts, navigation states, and reduced-motion support
- `script.js` — mobile navigation, sticky-header treatment, dynamic footer year, and demo form notice
- `assets/` — lightweight SVG brand mark, favicon, and social preview

## Maintenance

Colors, typography, and reusable spacing are defined near the top of `styles.css`. Content can be edited directly in `index.html`. Keep unverified claims clearly labeled until real business information is supplied.
