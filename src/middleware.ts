// a scenario where if the user navigates to /profile, should redirect the user to homepage 
import { NextResponse, type NextRequest } from "next/server";



export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");

    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }


    response.headers.set("custom-header", "custom-value")
    // Uncomment and adjust the below if you need to handle specific paths
    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.redirect(new URL("/hello", request.url));
    // }

    // if (request.nextUrl.pathname !== "/") {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }

    return response;
}


// export const config = {
//     matcher: '/profile'
// }