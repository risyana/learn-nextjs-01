import Posts from "@/components/posts";
import { Suspense } from "react";

export default function Page() {
    const getPosts = async() => {
        const data = await fetch('https://api.vercel.app/blog')
        const posts = await data.json()
        return posts
    }

    const posts = getPosts()

    return (
        <Suspense fallback={<p>Loading data...</p>}>
            <Posts posts={posts} />
        </Suspense>
    )
}