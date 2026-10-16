import type { Metadata } from 'next';
import InquireClient from '@/components/inquire/InquireClient';

export const metadata: Metadata = {
  title: 'Plan Your Safari | Inquire',
  description:
    'Plan your luxury safari at Goshen. Contact our reservations team to check availability, arrange bespoke itineraries, or reserve private camp buyouts in Laikipia.',
  openGraph: {
    title: 'Plan Your Safari | Inquire | Goshen Laikipia',
    description:
      'Plan your luxury safari at Goshen. Contact our reservations team to check availability, arrange bespoke itineraries, or reserve private camp buyouts in Laikipia.',
  },
};

export default function InquirePage() {
  return <InquireClient />;
}