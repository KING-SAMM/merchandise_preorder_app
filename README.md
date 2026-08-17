# Global Community Event Merchandise Portal

A static, mobile-first React application for configuring an event merchandise pre-order. There is no backend, database, sign-in, payment, inventory, or automatic submission. The member selects merchandise, reviews their details, and is sent to a pre-filled Google Form where they manually press **Submit**.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`. Any static host can serve the resulting `dist/` directory. Configure history fallback to `index.html` if the host requires it for client-side routes.

## Configuration

- Product data lives in `src/data/merchandise.ts`; new designs require no UI change.
- Placeholder image artwork is self-contained SVG data URLs. Replace `mainImage` and `galleryImages` with `/images/...` assets after placing real files in `public/images/`.
- Shirt sizes are the `shirtSizes` array in `src/data/merchandise.ts`.
- Google Forms configuration is in `src/config/googleForm.ts`.
- Set `googleFormsTestMode` in `src/config/app.ts` to `false` before public launch to hide the URL inspector.

### Adding a shirt or cap

Add an object to `merchandise` with a unique `id`, `productType` (`"shirt"` or `"cap"`), codes, descriptions, features, image paths, `active: true`, and `displayOrder`. The catalogue and detail routes populate automatically.

## Configure Google Forms

The included settings are deliberately blank. Google Forms uses public `entry.xxxxx` names which must match your own questions.

1. Create the Form and add questions for the desired member and merchandise fields.
2. In Google Forms choose **Get pre-filled link**, fill recognizable test values, and copy the generated link.
3. Inspect its query string: `entry.123456789=Test+Profile`. The number after `entry.` is the field identifier.
4. Put the Form `.../viewform` URL in `googleFormConfig.formUrl`; put each identifier in its matching `fields` value in `src/config/googleForm.ts`. Either `12345` or `entry.12345` works.
5. Keep test mode enabled, create a sample order, and use the developer panel on Google Form Handoff to inspect/copy/open the generated URL. Verify all fields inside Google Forms.
6. Set test mode to `false` when verified.

The app URL-encodes values using `URLSearchParams`, opens Google Forms in a new tab, and never submits automatically. It cannot know whether the external form was submitted.

## Privacy, reset, and testing

Current order data is stored only in React state and `sessionStorage`, so a refresh in the active browser session can recover it. It never uses `localStorage`. **Start New Order** asks for confirmation, clears the relevant session key, and returns to the catalogue.

Before launch, test all shirt sizes, quantities, no-cap behavior, required member fields, email validation, refresh recovery, mobile widths, review/edit actions, and each Google Forms mapping with a non-sensitive test response.
