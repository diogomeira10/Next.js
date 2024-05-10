import Link from "next/link";

function ProductDetails({ params }: {
    params: { productId: string }
}) {
    return (
        <>
            <Link href='/products'>
                <h1>Products</h1></Link>
                <h1>Details About the Product {params.productId}</h1>
            </>
            );
}

            export default ProductDetails;