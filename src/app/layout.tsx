import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "用户管理系统",
  description: "Next.js 全栈项目 - 简单的增删改查",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
