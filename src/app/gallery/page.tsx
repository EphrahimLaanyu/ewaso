import type { Metadata } from 'next';
import GalleryClient from '@/components/gallery/GalleryClient';

export const metadata: Metadata = {
  title: 'Goshen Safari Camp Gallery | Photos of Laikipia Wildlife & Tents',
  description:
    'Browse stunning photography of Goshen Safari Camp in Ewaso Enclave Conservancy, Laikipia. Discover luxury canvas suites, rare black leopards, elephants, and unscripted safari activities in Kenya.',
  keywords: [
    'Goshen Safari Camp photos',
    'camps in Laikipia gallery',
    'places to stay in Laikipia photos',
    'Ewaso Enclave Conservancy photography',
    'black leopard photos Kenya',
    'luxury safari camp imagery',
  ],
  alternates: {
    canonical: 'https://goshencamp.com/gallery',
  },
  openGraph: {
    title: 'Goshen Safari Camp Gallery | Photos of Laikipia Wildlife & Tents',
    description:
      'Visual anthology of Goshen Safari Camp: handcrafted luxury tented suites, untamed Laikipia wildlife, and safari activities in Kenya.',
    url: 'https://goshencamp.com/gallery',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goshen Safari Camp Gallery | Photos of Laikipia Wildlife & Tents',
    description:
      'Photography of luxury canvas suites, wildlife encounters, and pristine Laikipia landscapes at Goshen Safari Camp.',
    images: ['/og-image.jpg'],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
