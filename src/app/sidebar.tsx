'use client'
import { useState } from 'react'
import { 
  CardStackPlusIcon,
  CrumpledPaperIcon,
  EnterIcon,
  ExitIcon,
  GlobeIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  TrashIcon,
} from '@radix-ui/react-icons'
import { cn }  from './cn'
import AppLogo from './app-logo'

export default function Sidebar() {
  const [theme, setTheme] = useState('dark')
  return (
    <div className={cn.sidebar.container}>
      <AppLogo />
      <div className={cn.sidebar.buttons}>
        <button aria-label="New chat" className={cn.sidebar.newChat}>
          <PlusIcon />
          <span>New chat</span>
        </button>
        <button aria-label="New folder" className={cn.sidebar.folder}>
          <CardStackPlusIcon />
        </button>
        <button
          aria-label="Toggle theme"
          className={cn.sidebar.folder}
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
            document.documentElement.classList.toggle('dark')
          }}
        >
          {theme === 'dark'
            ? <SunIcon />
            : <MoonIcon />
          }
        </button>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center h-[70%]">
        <CrumpledPaperIcon />
        <p>No conversations.</p>
      </div>
      <div className="flex flex-col gap-2 absolute left-2 bottom-2 right-2 pt-2 border-t border-t-[#1D1D1E]/20 dark:border-t-[#F5F5F5]/20">
        <button aria-label="Clear conversations" className={cn.sidebar.button}>
          <TrashIcon />
          <span>Clear conversations</span>
        </button>
        <button aria-label="Import conversations" className={cn.sidebar.button}>
          <EnterIcon />
          <span>Import conversations</span>
        </button>
        <button aria-label="Export conversations" className={cn.sidebar.button}>
          <ExitIcon />
          <span>Export conversations</span>
        </button>
        <button aria-label="API key" className={cn.sidebar.button}>
          <GlobeIcon />
          <span>Enter API key</span>
        </button>
      </div>
    </div>
  )
}
