import { serverFetch } from '@/lib/serverFetch';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')?.value;
  const pathname = request.nextUrl.pathname;

  const authPaths = ['/login', '/signup'];
  const isAuthPath = authPaths.some((path) => pathname.startsWith(path));

  if (!token) {
    if (isAuthPath) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const response = await serverFetch.get('/user');
    if (!response.ok && response.status === 401) {
      if (isAuthPath) {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (isAuthPath) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } catch (error) {
    console.error('Middleware auth check failed:', error);
    if (isAuthPath) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};