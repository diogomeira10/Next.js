//avoids caching behavior when using the GET method with the Respojnse objecy in Next.js
export const dynamic = "force-dynamic";

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString(),
    })
}