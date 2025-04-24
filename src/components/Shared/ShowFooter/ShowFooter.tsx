'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from '../Footer/Footer';

const ShowFooter = () => {
    const pathName = usePathname();
    
    if(pathName.includes("/my-message")) return null

  return <Footer />
}

export default ShowFooter