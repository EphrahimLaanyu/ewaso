import type { Metadata } from 'next';
import GalleryClient from '@/components/gallery/GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Experience the visual narrative of Goshen: luxury tented suites, untamed Laikipia landscapes, and intimate wildlife encounters through stunning photography.',
  openGraph: {
    title: 'Gallery | Goshen Laikipia',
    description:
      'Experience the visual narrative of Goshen: luxury tented suites, untamed Laikipia landscapes, and intimate wildlife encounters through stunning photography.',
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
