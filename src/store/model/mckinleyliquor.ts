import {Store} from './store';

export const McKinleyLiquor: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '#button-cart',
      text: ['Add to Cart'],
    },
    maxPrice: {
      container: 'span[class*="price-characteristic"]',
    },
  },
  links: [
    {
      brand: 'bt',
      model: 'wlwellersr1l',
      series: 'test:series'',
      url: 'https://mckinley.global-wineandspirits.com/spirits/WL-Weller-Special-Reserve-Bourbon-w8195275pp',
    },
    {
      brand: 'bt',
      model: 'bt750',
      series: 'test:series'',
      url: 'https://mckinley.global-wineandspirits.com/spirits/Buffalo-Trace-Kentucky-Straight-Bourbon-Whiskey-w780721238',
    },
  ],
  name: 'mckinleyliquor',
};
