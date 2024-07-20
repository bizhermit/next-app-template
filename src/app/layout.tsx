import type { Metadata } from "next";
import "../components/styles/elements/root.css";
// root.css is require first
import "../components/styles/elements/button.css";
import "../components/styles/elements/dialog.css";
import "../components/styles/elements/form-item.css";
import "../components/styles/elements/icon.css";

export const metadata: Metadata = {
  title: "Next App Template",
  description: "next-app template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
