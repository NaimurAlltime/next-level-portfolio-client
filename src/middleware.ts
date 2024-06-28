import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { envConfig } from "./helpers/config/envConfig";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session: any = await getToken({ req: request, secret: envConfig.jwt.secret });
  
  if (!session) {
    return NextResponse.redirect(new URL("/admin-login", request.nextUrl));
  }
  if (session && (pathname === "/admin" || pathname === "/admin/login")) {
    return NextResponse.redirect(new URL("/admin/profile", request.nextUrl));
  }
  return NextResponse.next();
}

// This default export is required

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
