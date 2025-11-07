/**
 * SEO Component with Structured Data
 * Adds JSON-LD structured data for LocalBusiness and Products
 */

const SEO = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bodenseebär",
    "image": "https://bodenseebaer.sichtbar-seiten.de/og_image.jpg",
    "@id": "https://bodenseebaer.sichtbar-seiten.de",
    "url": "https://bodenseebaer.sichtbar-seiten.de",
    "telephone": "+4917474716412",
    "priceRange": "€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Seestraße 32",
      "addressLocality": "Hagnau am Bodensee",
      "postalCode": "88709",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.674195,
      "longitude": 9.3158409
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "description": "Bodenseebär in Hagnau am Bodensee - Ihr Shop für Badeschuhe, Taschen, Seemode, Accessoires und mehr. Alles für den perfekten Tag am Bodensee.",
    "sameAs": [],
    "areaServed": {
      "@type": "City",
      "name": "Hagnau am Bodensee"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Badeschuhe",
          "category": "Badeschuhe",
          "description": "Hochwertige Badeschuhe für sicheren Stand am See - verschiedene Modelle verfügbar"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Taschen",
          "category": "Taschen",
          "description": "Stylische und praktische Taschen für den Seetag"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Seemode",
          "category": "Seemode",
          "description": "Trendige Seemode für Damen und Herren am Bodensee"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Accessoires",
          "category": "Accessoires",
          "description": "Accessoires für den perfekten Tag am See"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Kaltgetränke",
          "category": "Kaltgetränke",
          "description": "Erfrischende Kaltgetränke für heiße Sommertage"
        }
      }
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bodenseebär",
    "url": "https://bodenseebaer.sichtbar-seiten.de",
    "description": "Bodenseebär - Alles für den See. Alles für Sie. Shop in Hagnau am Bodensee für Badeschuhe, Taschen, Seemode, Accessoires und Kaltgetränke.",
    "inLanguage": "de-DE",
    "keywords": "Badeschuhe, Taschen, Seemode, Accessoires, Kaltgetränke, Bodensee, Hagnau, Shop, Bademode, Strandmode",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bodenseebaer.sichtbar-seiten.de?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Product collection structured data for better product discovery
  const productCollectionData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Produkte bei Bodenseebär",
    "description": "Umfassende Produktauswahl: Badeschuhe, Taschen, Seemode, Accessoires und Kaltgetränke",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Badeschuhe",
          "description": "Hochwertige Badeschuhe für sicheren Stand am See - verschiedene Modelle verfügbar bei Bodenseebär in Hagnau am Bodensee",
          "category": "Badeschuhe",
          "keywords": "Badeschuhe, Wasserschuhe, Badeschuhe Bodensee, Badeschuhe kaufen Hagnau"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Taschen",
          "description": "Stylische und praktische Taschen für den Seetag - Seetaschen und Strandtaschen bei Bodenseebär",
          "category": "Taschen",
          "keywords": "Seetaschen, Strandtaschen, Taschen Bodensee, Taschen kaufen Hagnau"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Seemode",
          "description": "Trendige Seemode für Damen und Herren am Bodensee - Bademode und Strandmode bei Bodenseebär",
          "category": "Seemode",
          "keywords": "Seemode, Bademode, Strandmode, Seemode Bodensee, Bademode Hagnau"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Accessoires",
          "description": "Accessoires für den perfekten Tag am See - Sonnenbrillen, Strandaccessoires und mehr",
          "category": "Accessoires",
          "keywords": "Strandaccessoires, Se accessoires, Accessoires Bodensee"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Kaltgetränke",
          "description": "Erfrischende Kaltgetränke für heiße Sommertage am Bodensee",
          "category": "Kaltgetränke",
          "keywords": "Kaltgetränke, Getränke Bodensee, Erfrischungen"
        }
      }
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bodenseebaer.sichtbar-seiten.de"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Produkte",
        "item": "https://bodenseebaer.sichtbar-seiten.de#gallery"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Besuchen Sie uns",
        "item": "https://bodenseebaer.sichtbar-seiten.de#location"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCollectionData) }}
      />
    </>
  );
};

export default SEO;

