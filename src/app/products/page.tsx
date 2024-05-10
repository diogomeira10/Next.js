import Link from "next/link";


function Products() {

    const productId = 1000

    return (
        <div>
            <Link href='/'>Back to Home</Link>
            <h1>
                Products
            </h1>
            <Link href='products/1'>
                <h2>Product 1</h2>
            </Link>
            <Link href='products/2'>
                <h2>Product 2</h2>
            </Link>
            <Link href='products/3' replace>
                <h2>Product 3</h2>
            </Link>
            <Link href={`products/${productId}`}>
                <h2>Product 1000</h2>
            </Link>
        </div>
    );
}

export default Products;