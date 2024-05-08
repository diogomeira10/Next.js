function productIdLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h2>Features Products</h2>
            {children}
        </div>
    );
}

export default productIdLayout;