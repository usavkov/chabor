import { NextRequest } from "next/server";

import { routing } from "./i18n/routing";
import handleI18nRouting from './middlewares/i18n';

export default async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
};