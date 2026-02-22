import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("__session")?.value;
  const { pathname } = request.nextUrl;
  if (session && (pathname === '/')) {
    return NextResponse.redirect(new URL('/resident', request.url));
  }

  if (!session && pathname.startsWith('/resident')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Optimization: Only run middleware on these paths
export const config = {
  matcher: ['/resident/:path*', '/'],
};