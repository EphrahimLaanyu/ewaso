import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Activities & Experiences | Goshen Laikipia',
  description: 'Unforgettable game drives, guided nature walks, black leopard tracking, and sundowners at Goshen in Laikipia.',
};

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
