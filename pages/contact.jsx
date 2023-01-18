import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import React from 'react'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='Submit the from below for more work' />
        <Contact />
    </div>
  )
}

export default contact