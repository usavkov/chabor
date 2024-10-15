'use client'

import { useEffect } from "react";

import {
  getTargetRedirectURL,
  getUTMSearchParams,
} from "@utils";

interface RedirectProps {
  searchParams: Record<string, string>;
}

export default function Redirect({ searchParams }: RedirectProps) {
  const { target } = searchParams;

  const utmSearchParams = getUTMSearchParams(searchParams).toString();
  const targetUrl = getTargetRedirectURL(target);

  useEffect(() => {
    const timerId = setTimeout(() => {
      // window.location.replace(INSTAGRAM_PROFILE_URL || "https://www.instagram.com/english_batumi");

      console.log(utmSearchParams);
      console.log(targetUrl);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [targetUrl, utmSearchParams]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <span className="text-[160px]">Hi</span>
    </main>
  );
}
