import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog"
}


function BlogPage() {
    return (
        <div>
            <Link href='/'>Back to Home</Link>
            <h1>Blog Page</h1>
        </div>

    );
}

export default BlogPage