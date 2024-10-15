import type { Metadata } from "next";

import "./redirect.scss";

export const metadata: Metadata = {
  title: "Chabor",
  description: "English language school",
};

export default function RedirectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('process.env', process.env)
  return (
    <>{children}</>
  );
}
