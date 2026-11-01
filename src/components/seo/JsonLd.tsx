import React from 'react';

export default function JsonLd() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LodgingBusiness', 'Campground'],
        '@id': 'https://goshencamp.com/#lodging',
        name: 'Goshen Laikipia',
        alternateName: [
          'Goshen Safari Camp',
          'Goshen Camp',
          'Goshen Laikipia Luxury Safari Camp',
        ],
        description:
          'An exclusive luxury safari camp and premier place to stay in Ewaso Enclave Conservancy, Laikipia, Kenya. Featuring bespoke canvas suites, black leopard tracking, and authentic walking safari activities in Kenya.',
        url: 'https://goshencamp.com',
        telephone: '+254769030068',
        email: 'info@goshencamp.com',
        priceRange: '$$$$',
        currenciesAccepted: 'USD, KES',
        paymentAccepted: 'Credit Card, Wire Transfer',
        checkinTime: '12:00',
        checkoutTime: '10:00',
        numberOfRooms: 4,
        petsAllowed: false,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ewaso Enclave Conservancy',
          addressLocality: 'Laikipia',
          addressRegion: 'Laikipia County',
          addressCountry: 'KE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 0.020556,
          longitude: 37.074444,
        },
        hasMap: 'https://maps.google.com/?q=0.020556,37.074444',
        image: [
          'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/luxury-tent-suite-master-bed-panorama.jpeg',
          'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/camp4.jpeg',
          'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/elephant-family-wading-river-waters.jpeg',
          'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/open-air-dining-pavilion-bush-vista.jpeg',
        ],
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Bespoke Luxury Canvas Suites',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Black Leopard Tracking in Ewaso Enclave',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Guided Walking Safaris with Samburu Naturalists',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Day & Night 4x4 Game Drives',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Open-Air Bush Dining & Campfire Sundowners',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Ewaso Nyiro River Rock Pool Fishing',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Ensuite Bush Showers & Private Stone Verandas',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: '100% Solar-Powered Wilderness Camp',
            value: true,
          },
        ],
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Ewaso Enclave Conservancy, Laikipia County, Kenya',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://goshencamp.com/#website',
        url: 'https://goshencamp.com',
        name: 'Goshen Laikipia Safari Camp',
        description:
          'Official website of Goshen Laikipia: Luxury safari camp and places to stay in Ewaso Enclave Conservancy, Kenya.',
        publisher: {
          '@id': 'https://goshencamp.com/#lodging',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
