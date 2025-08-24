export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    return (
        <>
            <h3>Blog content</h3>
            <ol>
                {
                    posts.map((post: { id: number; title: string }) => (
                        <li key={post.id}>
                            <p>{post.title}</p>
                        </li>
                    ))
                }
            </ol>
        </>
    )
}