'use client'

import { useEffect } from 'react';

interface UnderMaintenanceProps {
  redirectTo: string;
}

export default function UnderMaintenance({ redirectTo }: UnderMaintenanceProps) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      window.location.href = redirectTo;
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [redirectTo]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <span className="text-[160px] motion-safe:animate-bounce">🛠️</span>
    </main>
  );
}
