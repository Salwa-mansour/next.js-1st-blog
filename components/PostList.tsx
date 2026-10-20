import Link from "next/link";

// 1. Add 'async' to the function signature
export default async function PostList() {
    // 2. Await the fetch request AND await .json()
    const response = await fetch("http://localhost:5000/posts");
    const posts = await response.json();

    return (
        <section>
         
                <ul>
                    {/* 3. Uncomment and make sure you return JSX inside the .map() */}
                    {posts.slice(0, 5).map((post: { id: number; title: string }) => (
                        <li key={post.id} className="border-1 p-4 m-1">
                            <Link href={`/posts/${post.id}`} className="d-block">
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
        
        </section>
    );
}