// src/app/layout.tsx
"use client";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* It's good practice to include the lang attribute */}
      <body>{children}</body>
    </html>
  );
}
