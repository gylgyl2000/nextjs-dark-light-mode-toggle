"use client"

import {useTheme} from "next-themes"
import {useEffect, useState} from "react"
import { MoonIcon, SunIcon } from "./Icons"
const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false)
  const {systemTheme, theme, setTheme} = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  useEffect(() => {
    setMount(true)
  }, [])
  // console.log(currentTheme)
  return mount ? (
    <div className="w-6 ml-3">
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        type="button"
        className="flex h-10 w-10 p-2 items-center justify-center rounded-md border border-gray-800 text-gray-800 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-slate-300 dark:text-white"
      >
        <MoonIcon className="dark:hidden" />
        <SunIcon className="hidden dark:block" />
      </button>
    </div>
  ) : null
}
export default ThemeSwitcher