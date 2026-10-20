import { notFound } from "next/navigation";

type PostPageProps = {
    params:Promise<{id:string}>
}

export default async function PostPage({params}: PostPageProps){
    const {id}= await params;
    const response = await fetch(`http://localhost:5000/posts/${id}`);
    const post = await response.json();
    console.log(` post ${JSON.stringify(post) }`)
    if(!post.id){
        console.log('no post')
        notFound();
    }

    return(
        <article>
            <h1>
                {post.title}
            </h1>
            <p>
                {post.content}
            </p>
        </article>
    )
}