import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";
import PostList from "@/components/PostList";

// 1. Add 'async' to the function signature
export default async function PostsPage() {
    
    return (
        <section>
            <h1 className="text-center">posts</h1>
          
               <Suspense  fallback={<Loading/>} >
                  <PostList/>
               </Suspense>
       
        </section>
    );
}