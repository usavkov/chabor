'use client'

import { useEffect } from 'react';

import Logo from '@public/logo.svg';

interface RedirectProps {
  to: string;
}

export const Redirect = ({ to }: RedirectProps) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      window.location.replace(to);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [to]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Logo className="motion-safe:animate-bounce" />
    </main>
  );
};
