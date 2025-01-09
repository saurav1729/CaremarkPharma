import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import axios from 'axios';

// Define your static routes
const staticRoutes = [
  '/',
  '/medicines',
  '/contact',
  '/about',
  // Add any other static routes you have
];

async function fetchProductRoutes() {
  try {
    // Update this URL to your actual API endpoint
    const response = await axios.get('https://www.caremarkpharmaceutical.com/api/product/getAllProducts');
    const data = response.data;

    if (!data.success || !Array.isArray(data.data)) {
      console.warn('Product data not in expected format:', data);
      return [];
    }

    // Map each product to its URL path
    return data.data.map(product => ({
      url: `/medicines/${product._id}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching product routes:', error);
    // If API fails, try to get products from your local data
    try {
      const ProductData = await import('./src/utils/productData.json');
      return ProductData.products.map(product => ({
        url: `/medicines/${product.id}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.7,
      }));
    } catch (e) {
      console.error('Error loading local product data:', e);
      return [];
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.caremarkpharmaceutical.com',
      generateRobotsTxt: true, // This will also generate a robots.txt file
      exclude: ['/admin*', '/login', '/dashboard'], // Add any routes you want to exclude
      routes: async () => {
        const productRoutes = await fetchProductRoutes();

        // Combine static and dynamic routes
        const allRoutes = [
          ...staticRoutes.map(route => ({
            url: route,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: route === '/' ? 1.0 : 0.8,
          })),
          ...productRoutes,
        ];

        console.log('Generated routes for sitemap:', allRoutes);
        return allRoutes;
      },
    }),
  ],
  // ... rest of your Vite config
});
