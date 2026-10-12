import React from 'react';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F4F1EB]">
      {children}
    </div>
  );
}