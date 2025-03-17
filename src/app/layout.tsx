// src/app/layout.tsx

"use client";
import "@/styles/globals.css"; // Make sure this path is correct

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* It's good practice to include the lang attribute */}
      <body>{children}</body>
    </html>
  );
}
