import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { parse } from "cookie"; // Correct import for the cookie package

function checkAuth(request: NextRequest) {
  const cookiesHeader = request.headers.get("cookie"); // Get the cookie header
  const cookies = cookiesHeader ? parse(cookiesHeader) : {}; // Use the named 'parse' function
  const accessToken = cookies?.accessToken || null;
  const refreshToken = cookies?.refreshToken || null;

  if (!accessToken || !refreshToken) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }
  return NextResponse.next();
}

// Middleware function that checks protected paths
export function middleware(request: NextRequest) {
  const protectedPaths = [
    "/add-photos",
    // "/enhance-profile",
    "/my-profile",
    "/my-message",
    "/my-subscription",
    "/payment/success",
    "/payment/cancel",
    "/flowers",
  ];

  if (protectedPaths.some((path) => request.url.includes(path))) {
    return checkAuth(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/add-photos",
    // "/enhance-profile",
    "/my-profile",
    "/my-message",
    "/my-subscription",
    "/payment/success",
    "/payment/cancel",
    "/flowers",
  ],
};
