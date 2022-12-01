import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const signedinPages = ['/', '/playlist', '/library']

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN

    if (!token) {
      return NextResponse.rewrite(new URL('/signin', req.url))
      // return NextResponse.rewrite(new URL('/dest', request.url))
    }
  }
}