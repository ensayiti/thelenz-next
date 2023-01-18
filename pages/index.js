import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'
import Instagram from '@/components/Instagram'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Lenz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='The Lenz' message='Capturing the pure essence of new life.' />
      <Slider slides={SliderData}/>
      <Instagram />
    </>
  )
}
