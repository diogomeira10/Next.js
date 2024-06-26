import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Fallback default title",
        template: "%s | Codevolution"
    },
    description: "Generated by Next.js"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', backgroundColor: 'lightblue' }}>
          <h2>
            Header
          </h2>
        </header>
        <div>
          {children}

        </div>

        <footer style={{ padding: '1rem', backgroundColor: 'lightblue' }}>
          <p>
            Footer

          </p>
        </footer>
      </body> 
    </html>
  )
}
