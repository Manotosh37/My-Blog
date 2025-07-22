"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigation = [
        {name: 'Home', href: '/'},
        {name: 'Stories', href: '/stories'},
        {name: 'About', href: '/about'}
    ]

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled? 'bg-gray-950/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-20'>
                    <Link href="/" className="group">
                        <div className='font-serif text-2xl font-light tracking-wide'>
                        <span className='text-white group-hover:text-gray-300 transition-colors duration-300'> Travelers</span>
                        <span className='text-acc ml-2'>Journal</span>
                        </div>
                    </Link>

                    <nav className='hidden md:flex items-center space-x-12'>
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className={`elegent-link text-sm uppercase tracking-wider ${pathname === item.href? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-white'}`}>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )}