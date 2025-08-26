'use client'
import useSWR from "swr"

export default function Page() {
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error, isLoading} = useSWR(
        'https://api.vercel.app/blog',
        fetcher
    )

    if(isLoading) return <p>Loading..</p>
    if(error) return <p>Error: {error.message}</p>
    return (
        <ol>
            {
                data.map((blog: {id: string; title:string}) => (
                    <li key={blog.id}>{blog.title}</li>
                ))
            }
        </ol>
    )
}