module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
        },
      ]
    }, 
    pageExtensions: ['page.tsx', 'core.tsx', 'js'],
    images: {
      domains: ['media0.giphy.com', 'media1.giphy.com', 'media2.giphy.com', 'media3.giphy.com', 'media4.giphy.com'],
    }
  }
