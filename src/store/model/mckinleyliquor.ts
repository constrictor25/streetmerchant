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
      model: 'W.L. Weller Special Reserve 1L ',
      series: 'bt:weller',
      url: 'https://mckinley.global-wineandspirits.com/spirits/WL-Weller-Special-Reserve-Bourbon-w8195275pp',
    },
    {
      brand: 'bt',
      model: 'Buffalo Trace 750ml',
      series: 'bt:bt',
      url: 'https://mckinley.global-wineandspirits.com/spirits/Buffalo-Trace-Kentucky-Straight-Bourbon-Whiskey-w780721238',
    },
  ],
  name: 'mckinleyliquor',
};
