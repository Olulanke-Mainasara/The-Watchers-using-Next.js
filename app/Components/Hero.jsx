import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
     <header className="flex h-screen items-center bg-[url(/Header.jpeg)] bg-cover bg-fixed dark:bg-scroll allIL:bg-[url(/headerM.jpg)] allIL:bg-bottom">
        <div className="w-full h-full justify-center flex flex-col gap-8 backdrop-brightness-50 text-center">
            <h1 className="text-white text-9xl md:text-8xl allEM:text-7xl allT:text-6xl">All Things Curious</h1>
            <h2 className="text-white text-3xl md:text-2xl allEM:text-xl allT:text-lg">Inspiring Minds, Everywhere, Unveiling Knowledge and Inspiration.</h2>
            <div className="mt-4">
              <Link href="#categories" title="Categories" className="rounded-3xl bg-white px-9 py-4 text-gray-800 text-3xl transition-colors duration-300 hover:bg-gray-800 hover:text-white allEMT:text-base allIL:hover:bg-white allIL:hover:text-gray-800">Start reading</Link>
              <Link href="#featuredArticles" title="Today's Articles" className="px-7 py-4 text-white text-3xl allEMT:text-base allEM:pr-0 allT:hidden">Today's articles <FontAwesomeIcon icon={ faArrowRight } /></Link>
            </div>
        </div>
    </header>
  )
}

export default Hero