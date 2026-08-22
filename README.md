# Creative Time Center — CTC 2nd Year Anniversary Merchandise Portal

Official frontend-only pre-order portal for **Creative Time Center** and its event theme, **From Vision to Global Movement**. It uses React, TypeScript, Vite, client-side routing, sessionStorage, static assets, and a Google Forms handoff. It includes no backend, payment, account, database, or inventory system.

## Categories and pricing

- T-Shirts: Navy, White, Lime, Black — S/M/L ₦7,000; XL/XXL ₦9,000
- Corporate Shirts: Navy, White, Lime — S/M/L ₦7,000; XL/XXL ₦9,000
- Hoodies: Navy, White, Lime, Orange — S/M/L ₦13,000; XL/XXL ₦15,000
- Caps: Navy, White, Lime, Orange — ₦3,000

Prices are centralized in `src/config/pricing.ts`; products, temporary replacement-ready codes, descriptions, and image paths are centralized in `src/data/merchandise.ts`.

## Images

Assets are in `public/images/merchandise/`:

```
caps/<colour>/front.jpg + side.jpg
corporate/<colour>/front.jpg + back.jpg
hoodie/<colour>/front.jpg + back.jpg
t-shirts/<colour>/front.jpg + back.jpg
```

The project’s verified hoodie folder is singular: `hoodie/`. Product cards crossfade front to back/side and use only the matching variant folder.

## Google Forms

Set the public Form URL and public `entry.xxxxx` IDs in `src/config/googleForm.ts`. The utility in `src/utils/googleForm.ts` omits unselected merchandise categories when `omitEmptyMerchandise` is true. Test mode is controlled by `src/config/app.ts` and displays the prefilled URL only in that mode.

## Run

```bash
npm install
npm run dev
npm run build
```

Order and member information are stored only in sessionStorage for the active browser session. The external Google Form remains the authoritative submitted order.
