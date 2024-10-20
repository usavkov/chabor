import "./globals.scss";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <>{children}</>
}
