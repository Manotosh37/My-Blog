import { getAllPosts } from '@/data/posts/posts'
import { PostCard } from '@/components/blog/postcard'
import Link from 'next/link'

export default async function Home() {
    const posts = await getAllPosts()
    const featuredPosts = posts.slice(0, 3)
    
    return (
        <>
        <div className='min-h-screen'>
            <section className='section-settings'>
                <div className='container text-center'>
                    <div className='animate-fade-in-up max-w-4xl mx-auto'>
                        <h1 className='font-serif text-6xl md:text-7xl font-light mb-8 tracking-tight'>Stories from the
                        <span className='block accent-text font-medium'>Journey</span></h1>
                        <div className='divider'></div>
                        <p className='text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed'>
                            Personal Stories and discoveries from my solo travel experience. Authentic stories, honest experience.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-8 justify-center items-center'>
                            <Link href='/posts' className='elegant-button'>Read Stories</Link>
                            <Link href='/about' className='elegant-link text-lg'>About Me</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-padding bg-gray-950/30'>
                <div className='container'>
                    <div className='text-center mb-16 animate-fade-in-up'>
                        <h2 className='font-serif text-4xl md:text-5xl font-light mb-6'>Recent <span className='accent-text'>Stories</span></h2>
                        <div className='divider'></div>
                        <p className='text-lg text-gray-400 max-w-2xl mx-auto font-light'>
                            Latest stories n with love.
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {featuredPosts.map((posts, index) => (
                            <div key={posts.slug} className='animate-fade-in-up' style={{animationDelay: `${index * 0.1}s`}}>
                                <PostCard posts={posts} />
                            </div>
                        ))}
                    </div>

                    <div className='text-center mt-16'>
                        <Link href='/posts' className='inline-block elegent-button'>
                        All Stories
                        </Link>
                    </div>
                </div>
            </section>

            <section className='section-paddding'>
                <div className='container'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <blockquote className='font-serif text-2xl md:text-3xl font-light italic text-gray-300 leading-relaxed mb-8'>
                            "A diamond was lying in the street covered with dirt. Many fools passed by. Someone who knew diamonds picked it up." 
                        </blockquote>
                        <div className='divider'>
                            <Link href='/about' className='elegent-link text-lg'>
                            Read More About This Philosophy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}