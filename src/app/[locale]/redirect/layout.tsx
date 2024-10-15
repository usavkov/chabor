import type { Metadata } from "next";

import "./redirect.scss";

export const metadata: Metadata = {
  title: "Chabor",
  description: "English language school",
};

interface RedirectLayoutProps {
  children: React.ReactNode;
}

export default function RedirectLayout({
  children,
}: RedirectLayoutProps) {
  return (
    <>
      {children}
    </>
  );
}
