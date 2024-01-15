'use client'

import React from 'react';
import Image from 'next/image';

import Link from 'next/link'
// import { useRouter } from 'next/navigation';

import Box from '@mui/system/Box';

import GridTile from "@/components/GridTile"
import { Button } from '@/components/ui/button';
import { TransitionProvider } from '@/animation/Transition';

import GetCategory from './[category]/page';

const ImagesList = [
  {
    image: '/images/coffee8.jpg',
  },
  {
    image: '/images/coffee1.jpg',
  },
  {
    image: '/images/coffee5.jpg',
  },
  {
    image: '/images/coffee4.jpg',
  },
  {
    image: '/images/coffee2.jpg',
  },
]

const category = [
  {
    name: 'Cappuccino'
  },
  {
    name: 'Espresso'
  },
  {
    name: 'Caffe Latte'
  },
  {
    name: 'Americano'
  },
  {
    name: 'Macchiato'
  },
]

export default function QuiltedImageList() {
  // const router = useRouter()
  return (
    <TransitionProvider>
      <Box
        id="three"
        className = 'grid w-full h-screen'
        sx={{
          gridTemplateColumns: [
            "1fr 1fr 1fr",
            "1fr 1fr 1fr",
            "1fr 1fr 1fr 1fr",
            "1fr 1fr 1fr 1fr 1fr",
          ],
          gridAutoRows: "1fr",
        }}
  >  
     {Array.from({length:10}, (_,i)=>{
       return( (i%2===0) ? 
        <GridTile>
              <Image
                sx={{ opacity: 0.5 }}
                width='200'
                height='200'
                src={ImagesList[i/2].image}
              />
          </GridTile>
          :
          <GridTile>
              <Button className="scroll-m-20 text-4xl font-extrabold lg:text-4xl">
               <Link href={`/order/${GetCategory()}`} as={`/order/${category[(i-1)/2].name}`}>
                {category[(i-1)/2].name}
              </Link>
              </Button>
          </GridTile>)
     })
     }
    {/* <GridTile bg="#12C612">
    <Button className="scroll-m-20 text-4xl font-extrabold lg:text-4xl" onClick={()=>router.push('/order/Cappuccino')}>
        Cappuccino
      </Button>
    </GridTile> */}
    {/* <GridTile>
      <Image
        sx={{ opacity: 0.5 }}
        width='200'
        height='200'
        src="/images/coffee1.jpg"
      />
    </GridTile>
    <GridTile >
    <Button className="scroll-m-20 text-4xl font-extrabold lg:text-4xl">
        Espresso
    </Button>
    </GridTile>
    <GridTile>
      <Image sx={{ opacity: 0.5 }} width='200'
        height='200' src="/images/coffee5.jpg" />
    </GridTile>
    <GridTile>
    <Button className="scroll-m-20 text-4xl font-extrabold lg:text-4xl">
        Caffe Latte
      </Button>
      </GridTile>
    <GridTile>
      <Image
        sx={{ opacity: 0.5 }}
        width='200'
        height='200'
        src="/images/coffee4.jpg"
      />
    </GridTile>
    <GridTile>
    <Button className="scroll-m-20 text-4xl font-extrabold lg:text-4xl">
        Americano
      </Button>
      </GridTile>
    <GridTile>
      <Image
        sx={{ opacity: 0.5 }}
        width='200'
        height='200'
        src="/images/coffee2.jpg"
      />
    </GridTile>
    <GridTile>
      <Button className="scroll-m-20 text-4xl font-extrabold lg:text-4xl">
        Macchiato
      </Button>
      </GridTile> */}
    </Box>
    </TransitionProvider>
  );
}