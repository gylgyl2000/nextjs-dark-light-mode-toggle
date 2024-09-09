'use client'

import NavBar from "@/components/NavBar"
import { TechData } from "@/lib/data"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="w-4/5 m-auto">
        <div className="flex flex-wrap flex-row items-center justify-between pt-40">
          {TechData.map(tech => (
            <motion.a key={tech.id} href={tech.url} target={"_blank"}
              className="w-[32%] min-h-64 group rounded-lg border border-dark mb-5 px-4 py-4
                bg-gradient-to-b from-slate-800
                dark:bg-slate-800
                hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}  
              >
              <div className="w-14 pb-16">
                {tech.icon}
              </div>
              <div>
                <span className="text-slate-900 dark:text-white text-2xl font-bold">
                  {tech.title}
                </span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block max-w-[60ch]">
                  {tech.subtitle}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </main>
    </>
  )
}
