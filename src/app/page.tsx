import Link from "next/link";

function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <Link href='/blog'>Blog</Link>
            <br />
            <Link href='/products'>Products</Link>
        </>
    );
}

export default Home;