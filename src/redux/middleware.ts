/* eslint-disable @typescript-eslint/no-explicit-any */
import { authRoutes } from "@/utils/pathnameHelper";
import { NextResponse } from "next/server";

export default function middleware(req: any) {
  const { nextUrl } = req;

  const isLoggedIn = req.cookies.get("bookatable-access-token")?.value;
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // If user exists redirect to `/home`
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // // If user not found, redirect to `/login`
  if (!isLoggedIn && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/sign-up",
    "/forgot-password",
    "/otp-get",
    "/set-new-password",
    "/verify-otp",
  ],
};
