import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/modeToggle';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full flex items-center justify-evenly font-mono text-sm lg:flex">
        <div className='relative top-4 flex gap-8'>
          <Link href='/auth/login'> 
        <Button>
            Login
        </Button>
          </Link>
        <ModeToggle />
        </div>
      </div>
      <div className="relative top-8 right-52">
        <h1 className="scroll-m-20 text-6xl font-extrabold mr-36 lg:text-8xl">
          Caffiene
        </h1>
      </div>
      <div className="relative top-12 right-32">
        <h1 className="scroll-m-20 my-8 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Start your Day Fresh
        </h1>
      </div>
      <div className="relative top-2 left-32">
        <h1 className="scroll-m-20 text-6xl font-extrabold mr-36 lg:text-8xl">
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
