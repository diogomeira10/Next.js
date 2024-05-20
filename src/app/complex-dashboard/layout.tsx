import Card from "@/components/card"

export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
}:
    {
        children: React.ReactNode,
        users: React.ReactNode,
        revenue: React.ReactNode,
        notifications: React.ReactNode,
        login: React.ReactNode
    }
) {

    const isLoggedIn = true

    return isLoggedIn ? <>
        <h1 style={{ textAlign: 'center' }}> This is the DashboardLayout Header  ....</h1>
        <Card>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <div>{users}</div>
                    <div>{revenue}</div>

                </div>
                <div style={{ display: "flex", flex: 1 }}>{notifications}</div>

            </div>

        </Card>
        <h1 style={{ textAlign: 'center' }}>This is the DashBoardLayout Footer</h1>
    </> :
        <div>
            {login}
        </div>
}
