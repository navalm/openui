import { IBM_Plex_Mono } from 'next/font/google'

export const mono = IBM_Plex_Mono({ weight: ['400','700'], subsets: ['latin'] })

const cx = (classNames: string[]) => {
  return classNames.join(' ')
}

export const cn = {
  layout: {
    body: 'antialiased text-[#1D1D1E] bg-[#F5F5F5] dark:text-[#F5F5F5] dark:bg-[#111]',
    app: 'min-h-full max-w-8xl mx-auto flex',
  },
  sidebar: {
    container: cx([
      mono.className,
      'hidden md:block z-20 dark:bg-[#1D1D1E]',
      'w-[18rem] min-h-screen p-2 text-sm',
      'inset-0 overflow-y-auto relative',
    ]),
    buttons: 'flex gap-1 mt-3',
    button: cx([
      'flex flex-1 gap-2 items-center',
      'px-[0.5rem] py-[0.3rem]',
      'hover:bg-[#1D1D1E]/10 dark:hover:bg-[#F5F5F5]/10 rounded-sm'
    ]),
    newChat: cx([
      'flex flex-1 gap-2 items-center',
      'border border-[#1D1D1E]/20 dark:border-[#F5F5F5]/20 hover:bg-[#1D1D1E]/10 dark:hover:bg-[#F5F5F5]/10 rounded-sm',
      'px-[0.5rem] py-[0.3rem]',
    ]),
    folder: cx([
      'flex gap-2 items-center',
      'border border-[#1D1D1E]/20 dark:border-[#F5F5F5]/20 hover:bg-[#1D1D1E]/10 dark:hover:bg-[#F5F5F5]/10 rounded-sm',
      'px-[0.5rem] py-[0.3rem]',
    ]),
  },
  home: {
    title: cx([
      mono.className,
      'font-bold text-2xl md:text-3xl lg:text-4xl',
    ]),
    subtitle: cx([
      mono.className,
      'uppercase text-xs tracking-widest mb-2',
    ]),
  }
}

export const logo = {
  image: 'dark:invert mx-auto cursor-pointer',
}