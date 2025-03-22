import { Metadata } from 'next'
import dynamic from 'next/dynamic';
import React from 'react'

export const metadata: Metadata = {
    title: 'Singles | 1Plus1 Dating website',
    description: 'Singles page',
    keywords: ['singles', 'page', 'example'],
}
const Discover = dynamic(() => import("@/components/Pages/Discover/Discover"));
const page = () => {
  return <Discover/>
}

export default page