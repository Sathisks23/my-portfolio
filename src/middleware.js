import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req) {
  const token = req.cookies.get('token')?.value;

  // If token is not present, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    // Verifying the JWT token using your secret key from environment variable
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));

    // Determine user role (admin or regular user)
    const isAdmin = payload.isAdmin;

    const url = req.nextUrl.pathname;

    // Admin users should be redirected to the admin dashboard
    if (url.startsWith('/admin') && !isAdmin) {
      return NextResponse.redirect(new URL('/user/dashboard', req.url));
    }

    // Regular users should be redirected to the user dashboard
    if (url.startsWith('/user') && isAdmin) {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }

    // If everything is okay, proceed with the request
    return NextResponse.next();
  } catch (error) {
    // If the token is invalid or expired, redirect to login
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

// This middleware applies to routes starting with /admin or /user
export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};
