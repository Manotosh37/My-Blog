import { getAllPosts } from '@/data/posts[md]/posts'
import { PostCard } from '@/components/blog/postcard'

export default async function Home() {
    const posts = await getAllPosts()
    const featuredPosts = posts.slice(0, 3)
    
    return (
        <>
        <div className='min-h-screen'></div>
        </>
    )
}