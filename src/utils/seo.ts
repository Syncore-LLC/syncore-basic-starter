import { Organization } from 'schema-dts';

interface Props {
  baseURL: string;
}

const SEO: Props = {
  baseURL: '',
};

// export const OrganizationJSONLd: Organization = {
//   '@context': 'https://schema.org',
//   '@type': 'Organization',
//   name: 'Organization Name',
//   legalName: 'Organization Name',
//   url: 'http://www.elite-strategies.com',
//   logo:
//     'http://cdn.elite-strategies.com/wp-content/uploads/2013/04/elitestrategies.png',
//   // foundingDate: '2009',
//   founders: [
//     // {
//     //   '@type': 'Person',
//     //   name: 'Patrick Coombe',
//     // },
//     // {
//     //   '@type': 'Person',
//     //   name: '',
//     // },
//   ],
//   address: {
//     // '@type': 'PostalAddress',
//     // streetAddress: '900 Linton Blvd Suite 104',
//     // addressLocality: 'Delray Beach',
//     // addressRegion: 'FL',
//     // postalCode: '33444',
//     // addressCountry: 'USA',
//   },
//   contactPoint: {
//     // '@type': 'ContactPoint',
//     // contactType: 'customer support',
//     // telephone: '[+561-526-8457]',
//     // email: 'info@elite-strategies.com',
//   },
//   sameAs: [
//     // ...social media urls
//   ],
// };

export default SEO;
