'use client'
function randomNumber(number: number) {
    return Math.floor(Math.random() * number)
}


function productIdLayout({ children }: {
    children: React.ReactNode
}) {

    const random = randomNumber(2)

    if (random === 1) {
        throw new Error("Error loading product")
    }


    return (
        <div>
            <h2>Features Products</h2>
            {children}
        </div>
    );
}

export default productIdLayout;