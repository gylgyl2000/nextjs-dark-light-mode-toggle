'use client'

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import ThemeSwitcher from './ThemeSwitcher'

interface CustomLinkProps {
    href: string
    title: string
    className: string
}

const CustomLink = ({ href, title, className }: Readonly<CustomLinkProps>) => {
    // const router = useRouter()
    // console.log(router)
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-dark dark:bg-light
                    absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    `}
                    /* ${router.asPath === href ? 'w-full' : 'w-0'} */
            >
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between' >
        <nav>
            <CustomLink href="/" title='Accueil' className='mr-4' />
            <CustomLink href="/about" title='À propos' className='mx-4' />
            <CustomLink href="/projects" title='Projets' className='mx-4' />
            <CustomLink href="/articles" title='Articles' className='ml-4' />
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="/" target={"_blank"}
                className='w-6 mr-3'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
            >
                <TwitterIcon className='' />
            </motion.a>
            <motion.a href="/" target={"_blank"}
                className='w-6 mx-3 dark:invert'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
            >
                <GithubIcon className='' />
            </motion.a>
            <motion.a href="/" target={"_blank"}
                className='w-6 mx-3 dark:text-light dark:bg-opacity-100'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
            >
                <LinkedInIcon className='' />
            </motion.a>
            <motion.a href="/" target={"_blank"}
                className='w-6 mx-3'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
            >
                <PinterestIcon className='' />
            </motion.a>
            <motion.a href="/" target={"_blank"}
                className='w-6 mx-3'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
            >
                <DribbbleIcon className='' />
            </motion.a>
            <ThemeSwitcher />
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />

        </div>
    </header>
  )
}

export default NavBar