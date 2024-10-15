'use client'

import { useEffect } from 'react';

interface RedirectProps {
  to: string;
}

export const Redirect = ({ to }: RedirectProps) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      window.location.replace(to);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [to]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <span className="text-[160px]">Hi</span>
    </main>
  );
};
