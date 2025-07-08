import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "fallback-secret-key-for-development");

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get("token")?.value;

  if (!jwt) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    await jwtVerify(jwt, secret);

    return NextResponse.next();
  } catch (error) {
    console.error("❌ JWT verification error: ", error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/protected/:path*",
};
