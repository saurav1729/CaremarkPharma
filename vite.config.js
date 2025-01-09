import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

async function fetchProductRoutes() {
  try {
    // Updated API endpoint to match your actual backend route
    const response = await fetch('https://www.caremarkpharmaceutical.com/api/product/getAllProducts');
    const data = await response.json();
    if (data.success && Array.isArray(data.data)) {
      return data.data.map(product => `/medicines/${product._id}`);
    } else {
      console.error('Unexpected API response structure:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching product routes:', error);
    return []; // Return an empty array if there's an error
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.caremarkpharmaceutical.com',
      routes: async () => {
        const productRoutes = await fetchProductRoutes();
        return [
          '/',
          '/medicines',
          ...productRoutes,
          '/contact',
          '/about',
        ];
      },
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
      exclude: ['/admin', '/login'], // Exclude any routes you don't want in the sitemap
      outDir: 'dist', // Ensure this matches your build output directory
    }),
  ],
  // Add any other Vite configurations here
})