import { FramerMotionIcon, NextJSIcon, NextThemesIcon, ReactIcon, TailwindCSSIcon, TypeScriptIcon } from "@/components/Icons";

interface TechDataProps {
    id: number
    title: string
    subtitle: string
    icon: any
    url: string
}

export const TechData: TechDataProps[] = [
    {
        "id": 1,
        "title": "Next.js 14",
        "subtitle": "Framework gratuit et open source s'appuyant sur la bibliothèque JavaScript React et sur la technologie Node.js.",
        "icon": <NextJSIcon className="" />,
        "url": "https://nextjs.org/"
    },
    {
        "id": 2,
        "title": "React 18",
        "subtitle": "Bibliothèque JavaScript pour créer des interfaces utilisateurs",
        "icon": <ReactIcon className="" />,
        "url": "https://fr.react.dev/"
    },
    {
        "id": 3,
        "title": "TypeScript 5",
        "subtitle": "Langage de programmation fortement typé qui s'appuie sur JavaScript,",
        "icon": <TypeScriptIcon className="" />,
        "url": "https://www.typescriptlang.org/fr/"
    },
    {
        "id": 4,
        "title": "Tailwind CSS 3",
        "subtitle": "Framework CSS utilitaire rempli de classes.",
        "icon": <TailwindCSSIcon className="" />,
        "url": "https://tailwindcss.com/"
    },
    {
        "id": 5,
        "title": "next-themes 0.3",
        "subtitle": "Une abstraction pour les thèmes dans votre application React.",
        "icon": <NextThemesIcon className="" />,
        "url": "https://github.com/pacocoursey/next-themes"
    },
    {
        "id": 6,
        "title": "Framer Motion 12",
        "subtitle": "Bibliothèque de mouvements simple mais puissante pour React.",
        "icon": <FramerMotionIcon className="" />,
        "url": "https://www.framer.com/motion/"
    }
]