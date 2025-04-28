module.exports = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
      {
        source: '/posts/:id',
        destination: '/articles/:id',
        permanent: false,
      }
    ]
  },
}
