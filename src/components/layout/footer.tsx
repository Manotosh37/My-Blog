import  Link from 'next/link'

export function Footer() {
    return(
    <footer className='border-t border-gray-800 bg-gray-950/50'>
        <div className='container section-padding'>
            <div className='grid md:grid-cols-3 gap-12'>
                <div className='md:col-span-2'>
                    <Link href="/" className='inline-block mb-6'>
                        <div className='font-serif text-2xl font-light tracking-wide'>
                            <span className='text-white'>Travellers</span>
                            <span className='accent-text ml-2'>Journal</span>
                        </div>
                    </Link>
                    <p className='text bg-gray-400 mb-6 max-w-md font-light leading-relaxed'>
                        Personal stories and reflections from solo travels around the world. 
                        Honest accounts of discovery, challenge, and growth on the road less traveled.
                    </p>
                    <div className='text-sm text-gray-500'>
                        Currently exploring: Planning to travel the world! 🌍
                    </div>
                </div>

                <div>
                    <h3 className='font-medium mb-6 text-sm uppercase tracking-wider'>Navigation</h3>
                    <ul className='space-y-4 text-sm'>
                        <li>
                            <Link href='/posts' className='elegant-link'>
                            All Stories!
                            </Link>
                        </li>
                        <li>
                            <Link href='/about' className='elegent-link'>
                            About the Story Teller.
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500'>
                <p>
                    &copy; 2025 Travellers Journal. Written with curiosity & Love.
                </p>
            </div>
        </div>
    </footer>
)}