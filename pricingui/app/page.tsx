"use client";
import Header from "./Header";
import Pricing from "./Pricing";
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'


export default function Home() {
  return (
  <ChakraProvider>
    <Header/>
    <Pricing/>
  </ChakraProvider>

  )
 
}
