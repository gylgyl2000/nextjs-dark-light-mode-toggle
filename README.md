Un basculement du mode sombre/clair dans Next.js

[nextjs-dark-light-mode-toggle](https://gylgyl2000.github.io/nextjs-dark-light-mode-toggle/)

- Next 14
- React 18
- TypeScript 5
- Tailwindcss 3
- next-themes 0.3.0
- Framer Motion 12

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Ajout de polices

[Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

```tsx
// src/app/layout.tsx

import {Montserrat} from "next/font/google"

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont"
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${montserrat.variable} font-mont`}>
            <body>{children}</body>
        </html>
    )
}
```

```ts
// tailwind.config.ts

import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
    ...
    theme: {
        extend: {
            fontFamily: {
                mont: ['var(--font-mont)', ...fontFamily.sans],
            }
        },
    },
    ...
};
export default config;
```

## Ajout de couleurs

[Customizing Colors - Tailwind CSS](https://tailwindcss.com/docs/customizing-colors)

```ts
// tailwind.config.ts

const config: Config = {
    ...
    theme: {
        extend: {
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
                primary: "#B63E96", // 240,86,199
                primaryDark: "#58E6D9", // 80,230,217
            }
        },
    },
    ...
};
export default config;
```

## Transformez les SVG en composants React

[SVGR - Transforms SVG into React Components. - SVGR](https://react-svgr.com/playground/)
