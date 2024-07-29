export interface ProductListDetails {
    kind: string;
    id: string;
    offerId: string;
    source: string;
    title: string;
    description: string;
    link: string;
    imageLink: string;
    contentLanguage: string;
    targetCountry: string;
    feedLabel: string;
    channel: string;
    ageGroup: string;
    availability: string;
    availabilityDate: string;
    brand: string;
    color: string;
    condition: string;
    gender: string;
    googleProductCategory: string;
    gtin: string;
    itemGroupId: string;
    mpn: string;
    price: Price;
    sizes: string[];
  }
  
  export interface Price {
    value: string;
    currency: string;
  }
  