import Image from 'next/image'
import { cn } from './cn'

export default function Home() {
  return (
    <main className="flex-1 min-h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className={cn.home.title}>OpenUI</h1>
      <br/>
      <p className={cn.home.subtitle}>powered by</p>
      <div className="grid grid-cols-3 gap-5">
        <Image
          src="/tauri.svg"
          alt="Tauri Logo"
          width={21}
          height={24}
          className="dark:text-[#F5F5F5] justify-self-end"
          priority
        />
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={100}
          height={24}
          className="dark:invert"
          priority
        />
        <Image
          src="/pb.svg"
          alt="Pocketbase Logo"
          width={24}
          height={24}
          className="dark:invert"
          priority
        />
      </div>
    </main>
  )
}
