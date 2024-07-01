import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const commonPrivateRoutes = ["/dashboard"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = cookies().get("accessToken")?.value;

  if (
    token &&
    (commonPrivateRoutes.includes(pathname) ||
      commonPrivateRoutes.some((route) => pathname.startsWith(route)))
  ) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  return NextResponse.redirect(new URL("/admin-login", request.url));
}

export const config = {
  matcher: ["/dashboard/:page*"],
};
