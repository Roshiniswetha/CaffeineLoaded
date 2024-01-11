'use client'

import React from 'react';
import Image from 'next/image';
import Box from '@mui/system/Box';

import GridTile from "@/components/GridTile"

import { TransitionProvider } from '@/animation/Transition';

export default function QuiltedImageList() {
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
     <GridTile>
      <Image
        sx={{ opacity: 0.5 }}
        width='200'
        height='200'
        src="/images/coffee7.jpg"
      />
    </GridTile>
    <GridTile bg="#12C612">
    <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-4xl">
        Cappuccino
      </h1>
    </GridTile>
    <GridTile>
      <Image
        sx={{ opacity: 0.5 }}
        width='200'
        height='200'
        src="/images/coffee1.jpg"
      />
    </GridTile>
    <GridTile >
    <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-4xl">
        Espresso
    </h1>
    </GridTile>
    <GridTile>
      <Image sx={{ opacity: 0.5 }} width='200'
        height='200' src="/images/coffee5.jpg" />
    </GridTile>
    <GridTile>
    <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-4xl">
        Caffe Latte
      </h1>
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
    <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-4xl">
        Americano
      </h1>
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
      <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-4xl">
        Macchiato
      </h1>
      </GridTile>
    </Box>
    </TransitionProvider>
  );
}