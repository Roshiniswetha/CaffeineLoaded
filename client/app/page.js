'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/modeToggle';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getCookie } from 'cookies-next';
import { deleteCookie } from 'cookies-next';

export default function Home() {

  const token = getCookie('token');

  const handleClick = () => {
    deleteCookie('token')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full flex items-center justify-evenly font-mono text-sm lg:flex">
        <div className='relative top-4 flex gap-8'>
          <Link href='/auth/login'> 
        {token ? 
        <div className='flex gap-10'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>RS</AvatarFallback>
        </Avatar>
        <Button onClick={handleClick}>Logout</Button>
        </div>
        : <Button>
          Login
          </Button>
        }

          </Link>
        <ModeToggle />
        </div>
      </div>
      <div className="relative top-8 right-52">
        <h1 className="head-text scroll-m-20 text-6xl font-extrabold mr-36 lg:text-8xl">
          Caffeine
        </h1>
      </div>
      <div className="relative top-12 right-32">
        <h1 className="text1 scroll-m-20 my-8 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Start your Day Fresh
        </h1>
      </div>
      <div className="relative top-2 left-32">
        <h1 className="head-text scroll-m-20 text-6xl font-extrabold mr-36 lg:text-8xl">
          Loaded
        </h1>
      </div>
      <div className='relative text-xl bottom-20'>
      <Link href='/order'>
        <Button>
          Choose Your Flavour
        </Button>
      </Link>
      </div>
    </main>
  )
}
