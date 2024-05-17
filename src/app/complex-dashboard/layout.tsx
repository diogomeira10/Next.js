export default function DashboardLayout({ children }:
    {
        children: React.ReactNode
    }
) {
    return <>
        <h1> This is the DashboardLayout Header ...</h1>
        <div>
            {children}
        </div>
        <h1>This is the DashBoardLayout Footer</h1>
    </>
}
