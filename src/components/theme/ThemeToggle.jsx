'use client'

import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !theme) {
      setTheme(systemTheme)
    }
  }, [mounted, theme, systemTheme, setTheme])

  if (!mounted)
    return (
      <div className='mx-auto flex h-[49px] w-3/4 items-center justify-evenly gap-2 rounded-xl border-[1px] p-2'>
        <div className='flex h-[28px] w-[28px] items-center justify-center rounded-md bg-transparent'></div>
        <div className='flex h-[28px] w-[28px] items-center justify-center rounded-md bg-transparent'></div>
      </div>
    )

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className='mx-auto flex h-[49px] w-3/4 items-center justify-evenly gap-3 rounded-xl border-[1px] p-2'>
      <div className={`flex h-[28px] w-[28px] items-center justify-center rounded-md ${currentTheme === 'light' ? 'bg-primary' : 'bg-transparent'}`}>
        <Sun color='white' className='cursor-pointer text-[19px] font-bold' onClick={() => setTheme('light')} />
      </div>

      <div className={`flex h-[28px] w-[28px] items-center justify-center rounded-md ${currentTheme === 'dark' ? 'bg-primary' : 'bg-transparent'}`}>
        <Moon color='black' className={`font-bold'} cursor-pointer text-[19px]`} onClick={() => setTheme('dark')} />
      </div>
    </div>
  )
}

export default ThemeToggle
